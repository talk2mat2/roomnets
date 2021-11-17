import React, { useState, useEffect } from "react";

import { ApiClient } from "admin-bro";
import { Box } from "@admin-bro/design-system";
import styled from "styled-components";
import axios from "axios";
const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: tomato;
  margin: 5px 0 9px;
`;
const Select = styled.select`
  margin: 10px;
  color: grey;

  border: none;
`;
const FaqDiv = styled.div`
  position: absolute;
  width: 60%;
  top: 10vh;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 19999;
  min-height: 440px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 40px -10px #000;
  //   margin: calc(50vh - 220px) auto;
  padding: 30px 30px;
  max-width: calc(100vw - 40px);
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 700px) {
    width: 85%;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background: none;
    outline: none;
    resize: none;
    border: 0;
    font-family: "Montserrat", sans-serif;
    transition: all 0.3s;
    border-bottom: 2px solid #bebed2;
  }
  .input2 {
    border-bottom: 2px solid #fff;
  }
  input:focus {
    border-bottom: 2px solid #78788c;
  }
  .inpu2:focus {
    border-bottom: 2px solid #fff;
  }
  p:before {
    content: attr(type);
    display: block;
    margin: 28px 0 0;
    font-size: 14px;
    color: #5a5a5a;
  }
  button {
    float: right;
    padding: 8px 12px;
    margin: 8px 0 0;
    font-family: "Montserrat", sans-serif;
    border: 2px solid #78788c;
    background: 0;
    color: #5a5a6e;
    cursor: pointer;
    transition: all 0.3s;
  }
  button:hover {
    background: #78788c;
    color: #fff;
  }
  h1 {
    font-size: 40px !important;
  }
`;

const api = new ApiClient();

const Dashboard = () => {
  const [data, setData] = useState({});
  const [ImageState, setImageState] = React.useState([]);
  const [country, setCountry] = React.useState("");
  const [faqVisible, setfaqVisible] = React.useState(false);
  const [ImageState2, setImageState2] = React.useState({});
  const [Privacy, setPrivacy] = React.useState(false);

  const [blogpost, setBlogpost] = React.useState(false);
  const [Aboutus, setAboutus] = React.useState(false);
  const [loading, setloading] = React.useState(false);
  const [count, setCount] = useState({ no_Apart: 0, no_Rooms: 0, no_Users: 0 });
  const [banners, setBanners] = React.useState([]);
  const [formResponse2, setFormResponse2] = React.useState({
    title: "",
    body: "",
    country: "",
    image: "",
  });
  const [formResponse, setFormResponse] = React.useState({
    question: "",
    answer: "",
    aboutusBody: "",
    aboutusTitle: "",
    privacyBody: "",
    privacyTitle: "",
  });

  const countDocuments = async () => {
    return await axios
      .get(`/api/v1/countDocuments`)
      .then((response) => response)
      .catch((err) => err);
  };
  const postFaq = async () => {
    if (!formResponse.question || !formResponse.answer) {
      return alert("question and answer must be provided");
    }
    setfaqVisible(false);
    return await axios
      .post(`/api/v1/updateFaq`, {
        title: formResponse.question,
        body: formResponse.answer,
      })
      .then((response) => alert("success"))
      .catch((err) => alert("failure"));
  };
  const postPrivacy = async () => {
    if (!formResponse.privacyBody || !formResponse.privacyTitle) {
      return alert("Body or title can not be empty");
    }
    setPrivacy(false);
    return await axios
      .post(`/api/v1/updatePrivacy`, {
        body: formResponse.privacyBody,
        title: formResponse.privacyTitle,
      })
      .then((response) => alert("success"))
      .catch((err) => alert("failure"));
  };
  const postAboutUs = async () => {
    if (!formResponse.aboutusBody || !formResponse.aboutusTitle) {
      return alert("Body or title can not be empty");
    }
    setAboutus(false);
    return await axios
      .post(`/api/v1/updateAboutUs`, {
        title: formResponse.aboutusTitle,
        body: formResponse.aboutusBody,
      })
      .then((response) => alert("success"))
      .catch((err) => alert("failure"));
  };
  const fetchHomepageModels = async () => {
    return await axios
      .get(`/api/v1/fetchHomepageModels`)
      .then((response) => response)
      .catch((err) => err);
  };
  const UploadImagesDocuments = async (data) => {
    console.log(data);
    // return await axios
    //   .post(`/Api/v1/uploadBanners`, data, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //       boundary: "MyBoundary",
    //     },
    //   })
  };

  function handleChange(event) {
    if (ImageState.length > 2) {
      return alert("maximum no of images reached");
    }
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg" ||
      event.target.files[0].type === "image/gif"
    ) {
      if (event.target.files[0]) {
        const newImagestate = ImageState;

        setImageState([
          ...ImageState,
          {
            file: URL.createObjectURL(event.target.files[0]),
            Uri: event.target.files[0],
          },
        ]);
      }
    } else {
      return alert("select a valid image format");
    }
  }

  const UploadNow = async (e) => {
    e.preventDefault();
    if (ImageState.length < 1) {
      return alert("You must select at least one image or more");
    }
    if (!country) {
      return alert("You must select a target country");
    }
    var formData = new FormData();
const countryData=JSON.stringify({country:country})
formData.append('countryData',countryData)
    for (let x = 0; x < ImageState.length; x++) {
      formData.append("file", ImageState[x]["Uri"]);
    }
    // UploadImagesDocuments(FormData);
    setloading(true);
    await axios({
      // url: `${ProxyUrl}/users/PreRegister`,
      url: `/Api/v1/uploadBanners`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setImageState([]);
        setloading(false);
        setBanners(response.data.userData.Banners);
        alert("Operation was successfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const mapImagestate = () => {
    return ImageState.map((xx) => (
      <div key={xx._id} style={{ margin: "4px" }}>
        <img
          src={xx.file}
          alt="preview"
          style={{
            maxWidth: "20%",
            maxHeight: "30%",
          }}
        />
      </div>
    ));
  };

  const mapBanners = () => {
    return (
      banners.length > 0 &&
      banners.map((xx) => (
        <div key={xx._id} style={{ margin: "4px" }}>
          <img
            src={xx.uri}
            alt="preview"
            style={{
              maxWidth: "20%",
              maxHeight: "20%",
            }}
          />
        </div>
      ))
    );
  };

  useEffect(() => {
    countDocuments()
      .then((response) => setCount({ ...response.data.userData }))
      .then(() =>
        fetchHomepageModels().then((res) => {
          setBanners(res.data.userData.Banners);
        })
      );
    api.getDashboard().then((response) => {
      setData(response.data);
    });
  }, []);
  const handleFadedit = () => {
    setfaqVisible(true);
  };
  const handlePrivacy = () => {
    setPrivacy(true);
  };
  const handleAbout = () => {
    setAboutus(true);
  };
  const handleBlog = () => {
    setBlogpost(true);
  };

  function handleChange2(event) {
    if (
      event.target.files[0].type === "image/png" ||
      event.target.files[0].type === "image/jpg" ||
      event.target.files[0].type === "image/jpeg"
    ) {
      if (event.target.files[0]) {
        // const newImagestate = ImageState;
        // newImagestate.push({
        //   file: URL.createObjectURL(event.target.files[0]),
        //   Uri: event.target.files[0],
        // });
        // setImageState(newImagestate);
        setImageState2({
          file: URL.createObjectURL(event.target.files[0]),
          Uri: event.target.files[0],
        });
      }
    } else {
      return alert("select a valid image format");
    }
  }

  const CreateNewBlogPost = async () => {
    if (!formResponse2.title || !formResponse2.body || !formResponse2.country) {
      return alert("You didnt fill the Mandatory fields");
    }
    var formData = new FormData();
    formData.append("userData", JSON.stringify(formResponse2));
    // for (let x = 0; x < ImageState.length; x++) {
    formData.append("file", ImageState2["Uri"]);

    // dispatch(SETPOSTROOMPROCESS(formResponse));
    setloading(true);
    setBlogpost(false);
    await axios({
      // url: `${ProxyUrl}/users/PreRegister`,
      url: `/Api/v1/createBlog`,
      method: "POST",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        setloading(false);
          console.log(response.data);
          alert(response.data.message)
      })
      .catch((err) => {
        setloading(false);
        alert("An error has occured");
      });
  };
  return (
    <Box variant="grey">
      {/* <Box variant="white">some: {data.some}</Box> */}
      <Box variant="white">
        <h2
          font-size="xl"
          className="sc-dIvqjp lbrNjM sc-fKgIGh admin-bro_Header admin-bro_H5"
          font-weight="normal"
        >
          Welcome to admin section
        </h2>
        <Line />
      </Box>
      <br />
      {faqVisible ? (
        <FaqDiv>
          <div
            onClick={() => setfaqVisible(false)}
            style={{
              float: "right",
              cursor: "pointer",
              color: "tomato",
            }}
          >
            <h1>x</h1>
          </div>
          <br />
          <br />

          <label>Question</label>
          <input
            type="text"
            value={formResponse.question}
            onChange={(e) =>
              setFormResponse({
                ...formResponse,
                question: e.target.value,
              })
            }
          />

          <br />
          <br />
          <br />
          <label>Answer</label>
          <br />

          <textarea
            value={formResponse.answer}
            onChange={(e) =>
              setFormResponse({
                ...formResponse,
                answer: e.target.value,
              })
            }
            rows={10}
          ></textarea>
          <br />
          <br />
          <button onClick={postFaq}>
            <span
              className="sc-giAqnE dqTeSL admin-bro_Icon"
              color="grey100"
            ></span>
            Publish
          </button>
        </FaqDiv>
      ) : null}
      {Privacy ? (
        <FaqDiv>
          <div
            onClick={() => setPrivacy(false)}
            style={{
              float: "right",
              cursor: "pointer",
              color: "tomato",
            }}
          >
            <h1>x</h1>
          </div>
          <br />
          <label>Title</label>
          <input
            type="text"
            value={formResponse.privacyTitle}
            onChange={(e) =>
              setFormResponse({
                ...formResponse,
                privacyTitle: e.target.value,
              })
            }
          />

          <br />

          <label>Body</label>
          <br />

          <textarea
            value={formResponse.privacyBody}
            onChange={(e) =>
              setFormResponse({
                ...formResponse,
                privacyBody: e.target.value,
              })
            }
            rows={15}
          ></textarea>
          <br />
          <br />
          <button onClick={postPrivacy}>
            <span
              className="sc-giAqnE dqTeSL admin-bro_Icon"
              color="grey100"
            ></span>
            Publish
          </button>
        </FaqDiv>
      ) : null}
      {Aboutus ? (
        <FaqDiv>
          <div
            onClick={() => setAboutus(false)}
            style={{
              float: "right",
              cursor: "pointer",
              color: "tomato",
            }}
          >
            <h1>x</h1>
          </div>
          <label>title</label>
          <input
            type="text"
            value={formResponse.aboutusTitle}
            onChange={(e) =>
              setFormResponse({
                ...formResponse,
                aboutusTitle: e.target.value,
              })
            }
          />

          <br />

          <label>Body</label>
          <br />

          <textarea
            value={formResponse.aboutusBody}
            onChange={(e) =>
              setFormResponse({
                ...formResponse,
                aboutusBody: e.target.value,
              })
            }
            rows={15}
          ></textarea>
          <br />
          <br />
          <button onClick={postAboutUs}>
            <span
              className="sc-giAqnE dqTeSL admin-bro_Icon"
              color="grey100"
            ></span>
            Publish
          </button>
        </FaqDiv>
      ) : null}
      {/* edit blog post */}

      {blogpost ? (
        <FaqDiv>
          <div
            onClick={() => setBlogpost(false)}
            style={{
              float: "right",
              cursor: "pointer",
              color: "tomato",
            }}
          >
            <h1>x</h1>
          </div>

          <div>
            <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
              Create New Blog Post
            </h2>
          </div>

          <br />
          <label>
            Topic <sup>*</sup>
          </label>
          <input
            type="text"
            value={formResponse2.title}
            onChange={(e) =>
              setFormResponse2({
                ...formResponse2,
                title: e.target.value,
              })
            }
          />

          <br />
          <br />
          <br />
          <label>
            Body <sup>*</sup>
          </label>
          <br />

          <textarea
            value={formResponse2.body}
            onChange={(e) =>
              setFormResponse2({
                ...formResponse2,
                body: e.target.value,
              })
            }
            rows={10}
          ></textarea>
          <br />
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p>Select Image</p>
              <input
                className="input2"
                type="file"
                onChange={handleChange2}
                accept="image/x-png,image/jpeg,image/gif"
              />
            </div>
            <div>
              <br />
              <br />
              <Select
                onChange={(e) =>
                  setFormResponse2({
                    ...formResponse2,
                    country: e.target.value,
                  })
                }
                value={formResponse2.country}
              >
                <option value="NG">
                  --Select Country*--
                </option>
                <option value="NG">Nigeria</option>
                <option value="GH">Ghana</option>
                <option value="KE">Kenya</option>
                <option value="US">USA</option>
                <option value="ZA">South-Africa</option>
                <option value="IE">Ireland</option>
                <option value="GB">UK</option>
              </Select>
            </div>
          </div>
          <br />
          <button onClick={CreateNewBlogPost}>
            <span
              className="sc-giAqnE dqTeSL admin-bro_Icon"
              color="grey100"
            ></span>
            Publish
          </button>
        </FaqDiv>
      ) : null}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <section
          width="1,0.5,0.5,0.3333333333333333"
          className="sc-dIsAE cHuGUn admin-bro_Box"
        >
          <a className="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
            <div className="sc-jrsJCI exBroz admin-bro_Text">
              <svg
                width="100"
                height="70"
                viewBox="0 0 152 169"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Group"
                    transform="translate(2.000000, 2.000000)"
                    stroke="#879FFA"
                    stroke-width="3"
                  >
                    <path
                      d="M74,117.371134 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M108.882866,90.7418658 C109.714261,87.6976379 110.158112,84.4934359 110.158112,81.185567 C110.158112,61.2008302 93.9572813,45 73.9725445,45 C53.9878077,45 37.7869775,61.2008302 37.7869775,81.185567 C37.7869775,97.3610095 48.4003337,111.05757 63.0430857,115.691287"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M73.9725445,117.371134 C77.5908988,117.371134 81.0852119,116.840051 84.3817866,115.851582 C89.8928309,114.19911 94.8512468,111.268362 98.9127122,107.40366"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <circle
                      id="Oval-Copy"
                      fill-opacity="0.196268575"
                      fill="#879FFA"
                      cx="104.127184"
                      cy="99.2783505"
                      r="9.64948454"
                    ></circle>
                    <path
                      d="M120.255984,85.4659665 C128.43855,89.8418956 133.002057,93.9015871 132.226834,96.7947568 C131.38817,99.9246931 124.455699,101.112837 113.853361,100.515516"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M94.0573111,98.0477535 C86.8513781,96.7649447 79.0016836,95.0204726 70.8507066,92.8364249 C38.6777508,84.2157074 13.9941115,72.0109683 15.718255,65.5763772 C16.4982546,62.6653791 22.5493576,61.4340187 31.9215354,61.7565326"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <line
                      x1="96.5"
                      y1="22.5"
                      x2="96.5"
                      y2="35.5278784"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="96.5"
                      y1="22.5"
                      x2="96.5"
                      y2="35.5278784"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(96.500000, 29.000000) rotate(-270.000000) translate(-96.500000, -29.000000) "
                    ></line>
                    <line
                      x1="38.5"
                      y1="38.3"
                      x2="38.5"
                      y2="46.1167271"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="38.4916365"
                      y1="38.2916365"
                      x2="38.4916365"
                      y2="46.1083635"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(38.491636, 42.200000) rotate(-270.000000) translate(-38.491636, -42.200000) "
                    ></line>
                    <line
                      x1="98"
                      y1="122.266667"
                      x2="98"
                      y2="129.214868"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="97.9925658"
                      y1="122.259232"
                      x2="97.9925658"
                      y2="129.207434"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(97.992566, 125.733333) rotate(-270.000000) translate(-97.992566, -125.733333) "
                    ></line>
                    <line
                      x1="40.5"
                      y1="122.433333"
                      x2="40.5"
                      y2="133.724161"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="40.4879193"
                      y1="122.421253"
                      x2="40.4879193"
                      y2="133.712081"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(40.487919, 128.066667) rotate(-270.000000) translate(-40.487919, -128.066667) "
                    ></line>
                  </g>
                </g>
              </svg>
              <h5
                font-size="xl"
                className="sc-dIvqjp lbrNjM sc-fKgIGh admin-bro_Header admin-bro_H5"
                font-weight="normal"
              >
                Registered Users
                <br />
                {count.no_Users}
              </h5>
              <div className="sc-jrsJCI bJANQE admin-bro_Text"></div>
            </div>
          </a>
        </section>
        <section
          width="1,0.5,0.5,0.3333333333333333"
          className="sc-dIsAE cHuGUn admin-bro_Box"
        >
          <a className="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
            <div className="sc-jrsJCI exBroz admin-bro_Text">
              <svg
                width="100"
                height="70"
                viewBox="0 0 152 169"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Group"
                    transform="translate(2.000000, 2.000000)"
                    stroke="#879FFA"
                    stroke-width="3"
                  >
                    <path
                      d="M74,117.371134 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M108.882866,90.7418658 C109.714261,87.6976379 110.158112,84.4934359 110.158112,81.185567 C110.158112,61.2008302 93.9572813,45 73.9725445,45 C53.9878077,45 37.7869775,61.2008302 37.7869775,81.185567 C37.7869775,97.3610095 48.4003337,111.05757 63.0430857,115.691287"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M73.9725445,117.371134 C77.5908988,117.371134 81.0852119,116.840051 84.3817866,115.851582 C89.8928309,114.19911 94.8512468,111.268362 98.9127122,107.40366"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <circle
                      id="Oval-Copy"
                      fill-opacity="0.196268575"
                      fill="#879FFA"
                      cx="104.127184"
                      cy="99.2783505"
                      r="9.64948454"
                    ></circle>
                    <path
                      d="M120.255984,85.4659665 C128.43855,89.8418956 133.002057,93.9015871 132.226834,96.7947568 C131.38817,99.9246931 124.455699,101.112837 113.853361,100.515516"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M94.0573111,98.0477535 C86.8513781,96.7649447 79.0016836,95.0204726 70.8507066,92.8364249 C38.6777508,84.2157074 13.9941115,72.0109683 15.718255,65.5763772 C16.4982546,62.6653791 22.5493576,61.4340187 31.9215354,61.7565326"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <line
                      x1="96.5"
                      y1="22.5"
                      x2="96.5"
                      y2="35.5278784"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="96.5"
                      y1="22.5"
                      x2="96.5"
                      y2="35.5278784"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(96.500000, 29.000000) rotate(-270.000000) translate(-96.500000, -29.000000) "
                    ></line>
                    <line
                      x1="38.5"
                      y1="38.3"
                      x2="38.5"
                      y2="46.1167271"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="38.4916365"
                      y1="38.2916365"
                      x2="38.4916365"
                      y2="46.1083635"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(38.491636, 42.200000) rotate(-270.000000) translate(-38.491636, -42.200000) "
                    ></line>
                    <line
                      x1="98"
                      y1="122.266667"
                      x2="98"
                      y2="129.214868"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="97.9925658"
                      y1="122.259232"
                      x2="97.9925658"
                      y2="129.207434"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(97.992566, 125.733333) rotate(-270.000000) translate(-97.992566, -125.733333) "
                    ></line>
                    <line
                      x1="40.5"
                      y1="122.433333"
                      x2="40.5"
                      y2="133.724161"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="40.4879193"
                      y1="122.421253"
                      x2="40.4879193"
                      y2="133.712081"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(40.487919, 128.066667) rotate(-270.000000) translate(-40.487919, -128.066667) "
                    ></line>
                  </g>
                </g>
              </svg>
              <h5
                font-size="xl"
                className="sc-dIvqjp lbrNjM sc-fKgIGh admin-bro_Header admin-bro_H5"
                font-weight="normal"
              >
                Rooms Posted
                <br />
                {count.no_Rooms}
              </h5>
              <div className="sc-jrsJCI bJANQE admin-bro_Text"></div>
            </div>
          </a>
        </section>
        <section
          width="1,0.5,0.5,0.3333333333333333"
          className="sc-dIsAE cHuGUn admin-bro_Box"
        >
          <a className="sc-dIsAE default-dashboard__Card-y6jxa9-0 kgyQN kKlyvT admin-bro_Box">
            <div className="sc-jrsJCI exBroz admin-bro_Text">
              <svg
                width="100"
                height="70"
                viewBox="0 0 152 169"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Symbols"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Group"
                    transform="translate(2.000000, 2.000000)"
                    stroke="#879FFA"
                    stroke-width="3"
                  >
                    <path
                      d="M74,117.371134 L74,158.723567 C74,162.037275 71.3137085,164.723567 68,164.723567 C66.9452118,164.723567 65.9090627,164.445504 64.995996,163.917406 L6.67495026,130.185774 L6.67495026,130.185774 C2.54398439,127.796512 1.42108547e-14,123.386278 1.42108547e-14,118.614125 L1.42108547e-14,48.436129 C1.42108547e-14,43.6639756 2.54398439,39.2537412 6.67495026,36.8644799 L67.3072083,1.79609278 C71.4477337,-0.598697595 76.5522663,-0.598697595 80.6927917,1.79609278 L141.32505,36.8644799 C145.456016,39.2537412 148,43.6639756 148,48.436129 L148,118.614125 C148,123.386278 145.456016,127.796512 141.32505,130.185774 L92.2812226,158.551663"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M108.882866,90.7418658 C109.714261,87.6976379 110.158112,84.4934359 110.158112,81.185567 C110.158112,61.2008302 93.9572813,45 73.9725445,45 C53.9878077,45 37.7869775,61.2008302 37.7869775,81.185567 C37.7869775,97.3610095 48.4003337,111.05757 63.0430857,115.691287"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M73.9725445,117.371134 C77.5908988,117.371134 81.0852119,116.840051 84.3817866,115.851582 C89.8928309,114.19911 94.8512468,111.268362 98.9127122,107.40366"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <circle
                      id="Oval-Copy"
                      fill-opacity="0.196268575"
                      fill="#879FFA"
                      cx="104.127184"
                      cy="99.2783505"
                      r="9.64948454"
                    ></circle>
                    <path
                      d="M120.255984,85.4659665 C128.43855,89.8418956 133.002057,93.9015871 132.226834,96.7947568 C131.38817,99.9246931 124.455699,101.112837 113.853361,100.515516"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <path
                      d="M94.0573111,98.0477535 C86.8513781,96.7649447 79.0016836,95.0204726 70.8507066,92.8364249 C38.6777508,84.2157074 13.9941115,72.0109683 15.718255,65.5763772 C16.4982546,62.6653791 22.5493576,61.4340187 31.9215354,61.7565326"
                      id="Path"
                      stroke-linecap="round"
                    ></path>
                    <line
                      x1="96.5"
                      y1="22.5"
                      x2="96.5"
                      y2="35.5278784"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="96.5"
                      y1="22.5"
                      x2="96.5"
                      y2="35.5278784"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(96.500000, 29.000000) rotate(-270.000000) translate(-96.500000, -29.000000) "
                    ></line>
                    <line
                      x1="38.5"
                      y1="38.3"
                      x2="38.5"
                      y2="46.1167271"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="38.4916365"
                      y1="38.2916365"
                      x2="38.4916365"
                      y2="46.1083635"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(38.491636, 42.200000) rotate(-270.000000) translate(-38.491636, -42.200000) "
                    ></line>
                    <line
                      x1="98"
                      y1="122.266667"
                      x2="98"
                      y2="129.214868"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="97.9925658"
                      y1="122.259232"
                      x2="97.9925658"
                      y2="129.207434"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(97.992566, 125.733333) rotate(-270.000000) translate(-97.992566, -125.733333) "
                    ></line>
                    <line
                      x1="40.5"
                      y1="122.433333"
                      x2="40.5"
                      y2="133.724161"
                      id="Line-6"
                      stroke-linecap="round"
                    ></line>
                    <line
                      x1="40.4879193"
                      y1="122.421253"
                      x2="40.4879193"
                      y2="133.712081"
                      id="Line-6-Copy"
                      stroke-linecap="round"
                      transform="translate(40.487919, 128.066667) rotate(-270.000000) translate(-40.487919, -128.066667) "
                    ></line>
                  </g>
                </g>
              </svg>
              <h5
                font-size="xl"
                className="sc-dIvqjp lbrNjM sc-fKgIGh admin-bro_Header admin-bro_H5"
                font-weight="normal"
              >
                Apartments Posted
                <br />
                {count.no_Apart}
              </h5>
              <div className="sc-jrsJCI bJANQE admin-bro_Text"></div>
            </div>
          </a>
        </section>
      </div>
      <form onSubmit={UploadNow}>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          {mapBanners ? mapBanners() : null}
        </div> */}

        <br />
        <Box variant="white">
          {loading ? <p>..Uploading</p> : null}
          <h5
            font-size="sm"
            className="sc-dIvqjp lbrNjM sc-fKgIGh admin-bro_Header admin-bro_H5"
            font-weight="normal"
          >
            Add Banners
          </h5>
          <Line />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {mapImagestate()}
          </div>
          <br />

          <small className="sc-dIvqjp  sc-fKgIG">
            <i>Select up to 2 images and click on upload</i>
            <br />
            <i>Image 1 size (landscape) 2088 px x 144 px</i>
            <br />
            <i>Image 2 size (portrait) 144 px x 2088 px </i>
            <br />
            <br />
          </small>
          <div style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
          <input
            type="file"
            onChange={handleChange}
            accept="image/x-png,image/jpeg,image/gif"
          />
             <Select
                onChange={(e) =>
                  setCountry(
                   e.target.value,
                  )
                }
                value={country}
              >
                <option value="">
                  --Select Country*--
                </option>
                <option value="NG">Nigeria</option>
                <option value="GH">Ghana</option>
                <option value="KE">Kenya</option>
                <option value="US">USA</option>
                <option value="ZA">South-Africa</option>
                <option value="IE">Ireland</option>
                <option value="GB">UK</option>
              </Select>
          <button
            type="submit"
            href="/admin"
            data-testid="action-new"
            className="sc-gtssRu sc-dvXXZy kGJZae eAtiBe admin-bro_ButtonGroupItem admin-bro_Button admin-bro_ButtonGroupItem"
          >
            <span className="sc-giAqnE dqTeSL admin-bro_Icon" color="grey100">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="16"
                height="16"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
              </svg>
            </span>
            Upload
          </button>
        </div>
        </Box>
      </form>
      <br />
      <br />
      <Box variant="white">
        <h5
          font-size="sm"
          className="sc-dIvqjp lbrNjM sc-fKgIGh admin-bro_Header admin-bro_H5"
          font-weight="normal"
        >
          Web Content
        </h5>
        <Line />
        <Box>
          <ul>
            <h6>
              FAQ <button onClick={handleFadedit}>+Add</button>
            </h6>
            <br />
            <h6>
              Privacy Policy <button onClick={handlePrivacy}>+Edit</button>
            </h6>
            <br />
            <h6>
              About Us <button onClick={handleAbout}>+Edit</button>
            </h6>
            <br />
          </ul>
        </Box>
      </Box>

      <br />
      <Box variant="white">
        <h5
          font-size="sm"
          className="sc-dIvqjp lbrNjM sc-fKgIGh admin-bro_Header admin-bro_H5"
          font-weight="normal"
        >
          Blog Posts
        </h5>
        <Line />
        <Box>
          <button
            type="submit"
            onClick={handleBlog}
            data-testid="action-new"
            className="sc-gtssRu sc-dvXXZy kGJZae eAtiBe admin-bro_ButtonGroupItem admin-bro_Button admin-bro_ButtonGroupItem"
          >
            <span className="sc-giAqnE dqTeSL admin-bro_Icon" color="grey100">
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="16"
                height="16"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M17 15L17 8 15 8 15 15 8 15 8 17 15 17 15 24 17 24 17 17 24 17 24 15z"></path>
              </svg>
            </span>
            Create New Post
          </button>
        </Box>
      </Box>

      <br />
      <br />
      <br />
    </Box>
  );
};

export default Dashboard;
