const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserSchema = require("../models/userMoodel");
const MessagesSchema = require("../models/messagesModel");
const ContactMessages = require("../models/contactMessages");
const Rooms = require("../models/rooms");
const Blog = require("../models/blog");
const AdRates = require("../models/AdRates");
const Apartments = require("../models/apartments");
const BlogComments = require("../models/BlogComments");
var querystring = require('querystring');

const HomepageModels = require("../models/homepageModel");

const axios = require("axios");
const path = require("path");
require("dotenv").config("../.env");
const fs = require("fs");
// var child_process = require("child_process");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
// const homepageModel = require("../models/homepageModel");

let gfs;
const conn = mongoose.connection;
conn.once("open", function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function getYear(){
  const d = new Date()
var amountOfYearsRequired = 1;
const time=d.setFullYear(d.getFullYear() + amountOfYearsRequired);
const year= new Date(time)
return year
}
function getDays(days){
  var d = new Date();
  const time=d.setDate(d.getDate() + days);
  const times= new Date(time)
  return times
}


exports.Login = async function (req, res) {
  const { Email, Password } = req.body;
  if (!Password || !Email) {
    return res
      .status(404)
      .send({ message: "pls provide a valid password and email" });
  }

  if (!validateEmail(Email)) {
    return res.status(404).json({ message: "Pls use a valid email address" });
  }

  UserSchema.findOne({ Email }, async function (err, user) {
    if (err) throw err;
    if (!user) {
      res.status(404).json({
        message: " A user with this account does not exist",
      });
    } else if (user) {
      const match = await user.verifyPassword(Password);
      if (!match) {
        return res
          .status(401)
          .json({ message: "The entered password is not correct." });
      } else {
        user.Password = "";
        return res.json({
          status: true,
          userData: {
            token: jwt.sign({ user: user }, process.env.JWTKEY, {
              expiresIn: "17520hr",
            }),
            user,
          },
        });
      }
    }
  });
};

exports.Register = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    password2,
    // Gender,
    mobileNumber,
    country
  } = req.body;
  // console.log(req.body);
  const Email = email;
  const Password = password;
  const Password2 = password2;
  if (!validateEmail(Email)) {
    return res
      .status(501)
      .json({ message: "pls use a valid email address to register" });
  }
  if (Password2 != Password) {
    return res.status(501).json({ message: "both password dont match" });
  }
  // console.log(firstName, lastName, email, Password, Password2);
  if (!Password2 || !Password || !lastName || !firstName || !Email || !country) {
    return res.status(501).json({
      message: "You didnt fill all values required,kindly try again",
    });
  }
  await UserSchema.findOne({ Email: Email }).then(async (user) => {
    if (user) {
      return res.status(501).send({
        message: `a user with email ${Email}is already registred, proceed to login`,
      });
    } else {
      try {
        const RegisterdDate = new Date();

        const Passwordhash = bcrypt.hashSync(Password, 10);
        const newUser = new UserSchema({
          firstName,
          mobileNumber,
          lastName,
          Email,
          Password: Passwordhash,
          RegisterdDate,
          country
        });
        await newUser.save();

        this.Login({ body: { Email, Password } }, res);
        // return res.status(200).send({ message: "account registered successfully" });
      } catch (err) {
        console.log(err);
        return res.status(501).send({
          message: "error occured pls try again or contact admin",
          err: err,
        });
      }
    }
  });
};

exports.SyncronizeUserData = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(404).json({
      status: false,
      message: "not sign in or provided jwt",
    });
  }
  await UserSchema.findOne({ _id: id }).then(async (user) => {
    user.Password = "";
    return res.json({
      status: true,
      userData: {
        user,
      },
    });
  });
};
exports.updateProfile = async (req, res) => {
  const { firstName, lastName, maritalStatus, mobileNumber, dateOfBirth } =
    req.body;
  const params = {
    firstName,
    lastName,
    maritalStatus,
    mobileNumber,
    dateOfBirth,
  };
  // console.log(req.body);
  //we dont wan to update undefined or null to a users data to our database
  Object.keys(params).map((xxx) =>
    params[xxx] === null || typeof params[xxx] === "undefined"
      ? delete params[xxx]
      : null
  );
  // console.log(params);
  await UserSchema.findOneAndUpdate({ _id: req.body.id }, params, {
    returnOriginal: false,
    useFindAndModify: false,
  }).then(async () => {
    await this.SyncronizeUserData(req, res);
  });
};

// exports.addInsurer = async (req, res) => {
//   console.log(req.file);
//   const { formResponse } = req.body;

//   const {
//     name,
//     tradeName,
//     classification,
//     registrationYear,
//     yearEstablished,
//     website,
//     telephone,
//     creditRating,
//     developerPoral,
//     carQuotePrice,
//     bikeQuotePrice,
//     thricycleQuotePrice,
//     HomeQuotePrice,
//     lifeQuotePrice,
//     travelQuotePrice,
//     phoneQuotePrice,
//     pcQuotePrice,
//     laptopQuotePrice,
//     CameratopQuotePrice,
//     gadgetQuotePrice,
//     ipodQuotePrice,
//     tabletQuotePrice,
//     healthQuotePrice,
//     registrationNumber,
//   } = JSON.parse(formResponse);

//   const params = {
//     name,
//     tradeName,
//     classification,
//     registrationYear,
//     gadgetQuotePrice,
//     yearEstablished,
//     website,
//     telephone,
//     creditRating,
//     developerPoral,
//     carQuotePrice,
//     bikeQuotePrice,
//     thricycleQuotePrice,
//     HomeQuotePrice,
//     lifeQuotePrice,
//     travelQuotePrice,
//     phoneQuotePrice,
//     pcQuotePrice,
//     laptopQuotePrice,
//     CameratopQuotePrice,
//     ipodQuotePrice,
//     tabletQuotePrice,
//     healthQuotePrice,
//     registrationNumber,
//   };
//   if (!name) {
//     return res.status(404).json({
//       status: false,
//       message: "Insurer name is required",
//     });
//   }

//   Object.keys(params).map((xxx) =>
//     params[xxx] === null || typeof params[xxx] === "undefined"
//       ? delete params[xxx]
//       : null
//   );
//   console.log(req.headers.host);
//   // const url = req.protocol + "://" + req.get("host") + req.originalUrl;
//   // const url =
//   //   req.protocol +
//   //   "://" +
//   //   req.get("host") +
//   //   "/api/v1/upload/" +
//   //   req.file.filename;
//   const url =
//    process.env.WEB_URL +
//     "/api/v1/upload/" +
//     req.file.filename;
//   console.log(url);
//   const NewInsurer = new insuranceentity({
//     ...params,
//     logoImg: url,
//   });

//   await NewInsurer.save();
//   return res.status(202).json({
//     status: true,
//     message: "Information Saved Successfully",
//   });
// };

//serve media image from mongodb grfs database
exports.MediaImage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });

    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.send("not found");
  }
};

exports.UpdateHomepageModels = async (req, res) => {
  const { videoUrl } = req.body;
  //set to false to allow update with empty string to delete existing records
  if (false) {
    return res.status(501).send({
      status: false,
      message: "required parameters not provided",
    });
  } else {
    const exist = await HomepageModels.findOne({ videoUrl: { $exists: true } });
    if (exist) {
      exist.videoUrl = videoUrl;
      await exist.save();
      return res.status(200).json({
        status: true,
        message: "updated successfully",
      });
    } else {
      const updateHomepageModels = new HomepageModels({ videoUrl: videoUrl });
      await updateHomepageModels.save();
      return res.status(200).json({
        status: true,
        message: "updated successfully",
      });
    }
  }
};
exports.fetchHomepageModels = async (req, res) => {

  await HomepageModels.findOne({ name:"home"})
    .then((response) => {
      return res.status(200).json({
        status: true,
        message: "fetch was successful",
        userData: response,
      });
    })
    .catch((error) => {
      return res.status(501).send({
        status: false,
        message: "not found",
      });
    });
};
exports.BlogPostAll = async (req, res) => {

  const { country } = req.params
;
  if (!country) {
    return res.status(501).send({
      status: false,
      message: "Country code not provided",
    });
  }
  const total = await Blog.estimatedDocumentCount();
var limit= 15
  var pageNo = req.query.pageNo || 0;

  var skip = pageNo * limit

  await Blog.find({country:country}).skip(skip).limit(limit)
    .then((response) => {
      return res.status(200).json({
        status: true,
        message: "fetch was successful",
        userData: response,
        total: total,
        limit: limit,
        pageNo
      });
    })
    .catch((error) => {
      return res.status(501).send({
        status: false,
        message: "not found",
      });
    });
};
//get All REecent Post
exports.BlogPostAllRecent = async (req, res) => {

  const { country } = req.params
// console.log(country)
  if (!country) {
    return res.status(501).send({
      status: false,
      message: "Country code not provided",
    });
  }
  await Blog.find({country:country}).sort({id:-1})
    .then((response) => {
    // console.log(response)
      return res.status(200).json({
        status: true,
        message: "fetch was successful",
        userData: new Array(...response).slice(0,4), 
      });
    })
    .catch((error) => {
      return res.status(501).send({
        status: false,
        message: "not found",
      });
    });
};

exports.BlogById = async (req, res) => {

  const { id } = req.params

  if (!id) {
    return res.status(501).send({
      status: false,
      message: "Country code not provided",
    });
  }
  await Blog.findOne({ _id: id }).populate({path:"comments",model:"Blogcomments",populate:[{path:"commentedBy",model:"Users",select: 'firstName lastName'}]}).populate("comments.commentedBy")
    .then((response) => {
      return res.status(200).json({
        status: true,
        message: "fetch was successful",
        userData: response, 
      });
    })
    .catch((error) => {
      return res.status(501).send({
        status: false,
        message: "not found",
      });
    });
};



//cherck if user is registered


exports.isUserRegistered = async (req, res) => {
  const email = req.params.email;

  if (!email) {
    return res.status(501).send({
      status: false,
      message: "no email provided",
    });
  }
  const userEmail = String(email).toLowerCase();
  const Emailisregistered = await UserSchema.findOne({ Email: userEmail });
  if (Emailisregistered) {
    return res.status(200).send({
      status: true,
      message: "user email is registered",
    });
  } else {
    return res.status(501).send({
      status: false,
      message: "this email is not registered",
    });
  }
};
exports.PostAddRooms = async (req, res) => {
  // console.log("file is", req.files.length);
  // const file = req.files;
  const { userData } = req.body;
  const DataInfo = JSON.parse(userData);
  let newFiles = new Array();
  for (const file of req.files) {
    let img = {
      uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
    };
    newFiles.push(img);
  }
  // console.log(newFiles);
  // console.log(DataInfo);
  const { building_location } = DataInfo;
  if (!building_location) {
    return res.status(501).send({
      status: false,
      message: "Building location not found",
    });
  }
  const { lat, lng } = building_location;
  if (!lat || !lng) {
    return res.status(501).send({
      status: false,
      message: "lng/lat not provided",
    });
  }

  const newRooms = new Rooms({
    media: newFiles,
    ...DataInfo,
    posted_by: req.body.id,
    location: {
      type: "Point",
      coordinates: [lng, lat],
    },
  });

  await newRooms.save((err, success) => {
    if (err) {
      console.log(err);
      return res.status(501).send({
        status: false,
        message: "lng/lat not provided",
      });
    } else {
      return res.status(201).send({
        status: true,
        message: "Addd Post was successful",
        usadData: success,
      });
    }
  });
};

// media server

exports.media = async (req, res) => {
  const fileName = req.params.fileName;

  if (!fileName) {
    return res.status(501).send({
      status: false,
      message: "lng/lat not provided",
    });
  }
  try {
    const imageFile = fs.createReadStream(
      path.join(__dirname, "../upload/", fileName)
    );
    imageFile.on("error", (error) => {
      return res.status(404).send({
        status: false,
        message: "image not found",
      });
    });

    return imageFile.pipe(res);
  } catch (err) {
    return res.status(404).send({
      status: false,
      message: "image not found",
    });
  }
};

//list rooms
exports.ListRoomsByState = async (req, res) => {
  const params = req.params.state
    ? {"Approved_By_Admin":true,
        "building_location.address": {
          // $regex: req.params.state,
          $regex: req.params.state,
          $options: "i",
        },
      }
    : {};

  let total = await Rooms.countDocuments(params);
  const limit = 15;

  var pageNo = req.query.pageNo || 0;

  var skip = pageNo * limit;

  await Rooms.find(params)
    .populate("posted_by", "-Password")
    .then((response) => {
      return res.status(200).send({
        status: true,
        message: "Search Result Success",
        userData: response,
        total: total,
        limit: limit,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).send({
        status: false,
        message: "emty result",
      });
    });
};



//list room by me

exports.ListRoomsByMe = async (req, res) => {
  const country = req.query.country
  const params = {posted_by:req.body.id,country}
  

  let total = await Rooms.countDocuments(params);
  const limit = 15;

  var pageNo = req.query.pageNo || 0;

  var skip = pageNo * limit;

  await Rooms.find(params)
    .populate("posted_by", "-Password")
    .then((response) => {
      return res.status(200).send({
        status: true,
        message: "Search Result Success",
        userData: response,
        total: total,
        limit: limit,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).send({
        status: false,
        message: "emty result",
      });
    });
};
//liat  Apartments
exports.ListApartByState = async (req, res) => {

  const params = req.params.state
  ? {"Approved_By_Admin":true,
      "building_location.address": {
        $regex: req.params.state,
        $options: "i",
      },
    }
  : {};
// console.log(req.query.location)
let total = await Apartments.countDocuments(params);
const limit = 15;

var pageNo = req.query.pageNo || 0;

var skip = pageNo * limit;

await Apartments.find(params)
  .populate("posted_by", "-Password").limit(limit).skip(skip).sort({isPaidAdd:-1})
  .then((response) => {
    return res.status(200).send({
      status: true,
      message: "Search Result Success",
      userData: response,
      total: total,
      limit: limit,
    });
  })
  .catch((err) => {
    console.log(err);
    return res.status(404).send({
      status: false,
      message: "emty result",
    });
  });
  // const limit = 15;
  // // const params = {}
  // const params = req.params.state
  //   ? {"Approved_By_Admin":true,
  //       "building_location.address": {
  //         $regex: req.params.state,
  //         $options: "i",
  //       },
  //     }
  //   : {};
  // let total = await Apartments.countDocuments(params);
  // var pageNo = req.query.pageNo || 0;

  // var skip = pageNo * limit;

  // await Apartments.find(params)
  //   .populate("posted_by", "-Password")
  //   .limit(limit)
  //   .then((response) => {
  //     return res.status(200).send({
  //       status: true,
  //       message: "Search Result Success",
  //       userData: response,
  //       total: total,
  //       limit: limit,
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return res.status(404).send({
  //       status: false,
  //       message: "emty result",
  //     });
  //   });
};

//list apartment by me
exports.ListApartByMe = async (req, res) => {
// console.log("called")
const country = req.query.country
  const params = {posted_by:req.body.id,country}

let total = await Apartments.countDocuments(params);
const limit = 15;

var pageNo = req.query.pageNo || 0;

var skip = pageNo * limit;

await Apartments.find(params)
  .populate("posted_by", "-Password").limit(limit).skip(skip).sort({isPaidAdd:-1})
  .then((response) => {
    return res.status(200).send({
      status: true,
      message: "Search Result Success",
      userData: response,
      total: total,
      limit: limit,
    });
  })
  .catch((err) => {
    console.log(err);
    return res.status(404).send({
      status: false,
      message: "emty result",
    });
  });

};
exports.PostAddApart = async (req, res) => {
  console.log("file is", req.files.length);
  // const file = req.files;
  const { userData } = req.body;
  const DataInfo = JSON.parse(userData);
  // console.log(DataInfo);
  let newFiles = new Array();
  for (const file of req.files) {
    let img = {
      uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
    };
    newFiles.push(img);
  }

  const { building_location } = DataInfo;
  if (!building_location) {
    return res.status(501).send({
      status: false,
      message: "Building location not supplied",
    });
  }
  const { lat, lng } = building_location;
  if (!lat || !lng) {
    return res.status(501).send({
      status: false,
      message: "lng/lat not provided",
    });
  }

  const newApartments = new Apartments({
    media: newFiles,
    ...DataInfo,
    posted_by: req.body.id,
    location: {
      type: "Point",
      coordinates: [lng, lat],
    },
  });

  await newApartments.save((err, success) => {
    if (err) {
      console.log(err);
      return res.status(501).send({
        status: false,
        message: "Unable to process the requested operation",
      });
    } else {
      return res.status(201).send({
        status: true,
        message: "Add Post was successful",
        usadData: success,
      });
    }
  });
};

exports.ListRoomsByLocation = async (req, res) => {
  const params = req.query.location
    ? {"Approved_By_Admin":true,
        "building_location.address": {
          $regex: req.query.location,
          $options: "i",
        },
      }
    : {};
  // console.log(req.query.location)
  let total = await Rooms.countDocuments(params);
  const limit = 15;

  var pageNo = req.query.pageNo || 0;

  var skip = pageNo * limit;

  await Rooms.find(params)
    .populate("posted_by", "-Password").limit(limit).skip(skip).sort({isPaidAdd:-1})
    .then((response) => {
      return res.status(200).send({
        status: true,
        message: "Search Result Success",
        userData: response,
        total: total,
        limit: limit,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).send({
        status: false,
        message: "emty result",
      });
    });
};

//list apartments when a user search by address string
exports.ListApartByLocation = async (req, res) => {

  const params = req.query.location
    ? {"Approved_By_Admin":true,
        "building_location.address": {
          $regex: req.query.location,
          $options: "i",
        },
      }
    : {};
  // console.log(req.query.location)
  let total = await Apartments.countDocuments(params);
  const limit = 15;

  var pageNo = req.query.pageNo || 0;

  var skip = pageNo * limit;

  await Apartments.find(params)
    .populate("posted_by", "-Password").limit(limit).skip(skip).sort({isPaidAdd:-1})
    .then((response) => {
      return res.status(200).send({
        status: true,
        message: "Search Result Success",
        userData: response,
        total: total,
        limit: limit,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).send({
        status: false,
        message: "emty result",
      });
    });
};

//list room  from lat longitidue when user supplies long lat
exports.ListRoomsByLnglat = async (req, res) => {
  if (!req.query.lng || !req.query.lat) {
    return res.status(404).send({
      status: false,
      message: "longititude and latidue not provided",
    });
  }
  const lng = parseInt(req.query.lng);
  const lat = parseInt(req.query.lat);
  // console.log(typeof(lng))
  const limit = 15;

  var pageNo = req.query.pageNo || 0;

  var skip = pageNo * limit;
  const params = req.query.lng
    ? [
        {
          $geoNear: {
            near: {
              type: "Point",
              coordinates: [lng, lat],
            },
            maxDistance: 120000, //meters if search result disatcne
            key: "location",
            distanceField: "distance",
          },
        },
        { $sort : {isPaidAdd:-1,distance : 1 } },
        { $limit: limit },
        { $unset: "Password" },
        { $skip: skip },
      { $match: { "Approved_By_Admin": true } },
      // { $sort : { distance : 1 ,isPaidAdd:1} }
        // {$count:"total"},
      ]
    : [];
  const paramCount = req.query.lng
    ? [
        {
          $geoNear: {
            near: {
              type: "Point",
              coordinates: [lng, lat],
            },
            maxDistance: 120000, //meters if search result disatcne
            key: "location",
            distanceField: "distance",
          },
        },
        // { $limit: 7 },
        {$match:{"Approved_By_Admin":true}},
        { $unset: "Password" },
      { $count: "total" },
     
      ]
    : [];
  // console.log(req.query.location)
  let total = await Rooms.aggregate(paramCount);
  console.log(total)
  totalCount = total[0] ? total[0]["total"] : 0;

  await Rooms.aggregate(params)
    .then(async (response) => {
      const populated = await UserSchema.populate(response, {
        path: "posted_by",
        select: "-Password",
      });

      return res.status(200).send({
        status: true,
        message: "Search Result Success",
        userData: populated,
        total: totalCount,
        limit: limit,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).send({
        status: false,
        message: "emty result",
      });
    });
};
exports.ListApartByLnglat = async (req, res) => {
  if (!req.query.lng || !req.query.lat) {
    return res.status(404).send({
      status: false,
      message: "longititude and latidue not provided",
    });
  }
  const lng = parseInt(req.query.lng);
  const lat = parseInt(req.query.lat);
  const limit = 15;

  var pageNo = req.query.pageNo || 0;

  var skip = pageNo * limit;
  // console.log(typeof(lng))
  const params = req.query.lng
    ? [
        {
          $geoNear: {
            near: {
              type: "Point",
              coordinates: [lng, lat],
            },
            maxDistance: 120000, //meters if search result disatcne
            key: "location",
            distanceField: "distance",
          },
        },
        { $sort : {isPaidAdd:-1,distance : 1 } },
        { $limit: 7 },
        { $unset: "Password" },
        { $skip: skip },
      { $match: { "Approved_By_Admin": true } },
     
        // {$count:"total"},
      ]
    : [];
  const paramCount = req.query.lng
    ? [
        {
          $geoNear: {
            near: {
              type: "Point",
              coordinates: [lng, lat],
            },
            maxDistance: 120000, //meters if search result disatcne
            key: "location",
            distanceField: "distance",
          },
        },
        // { $limit: 7 },
        {$match:{"Approved_By_Admin":true}},
        { $unset: "Password" },
      { $count: "total" },
     
      ]
    : [];
  // console.log(req.query.location)
  let total = await Apartments.aggregate(paramCount);
  totalCount = total[0] ? total[0]["total"] : 0;

  await Apartments.aggregate(params)
    .then(async (response) => {
      // console.log(response)
      const populated = await UserSchema.populate(response, {
        path: "posted_by",
        select: "-Password",
      });

      return res.status(200).send({
        status: true,
        message: "Search Result Success",
        userData: populated,
        total: totalCount,
        limit: limit,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(404).send({
        status: false,
        message: "emty result",
      });
    });
};

exports.countDocuments = async (req, res) => {
  try {
    const no_Rooms = await Rooms.estimatedDocumentCount();
    const no_Apart = await Apartments.estimatedDocumentCount();
    const no_Users = await UserSchema.estimatedDocumentCount();
    return res.status(200).send({
      status: true,
      message: "Result Success",
      userData: { no_Rooms, no_Apart, no_Users },
    });
  } catch (error) {
    return res.status(501).send({
      status: false,
      message: "Result failed",
      userData: { no_Rooms: 0, no_Apart: 0, no_Users: 0 },
    });
  }
};
exports.uploadBanners = async (req, res) => {
  try {
    let Banners = new Array();
    const countryDaTa= req.body
    const{country} = JSON.parse(req.body.countryData)
    console.log(country)
    
    // console.log(req.files);
    for (const file of req.files) {
      let img = {
        uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
      };
      Banners.push(img);
    }
    // console.log(Banners);

    const params= country == "KE"
    ?{Banners_KE:Banners}
    : country == "US"
    ? {Banners_US:Banners}
    : country == "NG"
    ? {Banners_NG:Banners}
    : country == "IE"
    ? {Banners_IE:Banners}
    : country == "ZA"
    ? {Banners_ZA:Banners}
    : country == "GB"
    ? {Banners_GB:Banners}
    : country == "GH"
    ? {Banners_GH:Banners}
    : {}


    // const key=`Banners_${country}`
    //   const params={key:Banners}
    const isHomeExist = await HomepageModels.findOne({ name: "home" });
    if (isHomeExist) {
      // console.log(isHomeExist)
      
      await HomepageModels.findOneAndUpdate(
        { name: "home" },
        params,
        {
          returnOriginal: false,
          useFindAndModify: false,
        }
      ).then((response) => {
        console.log("success");
        return res.status(200).send({
          status: true,
          message: "Operation was successfull",
          userData: response,
        });
      });
    } else {
      const newhomepageModel = new HomepageModels(
        params
      );
      await newhomepageModel.save();
      return res.status(200).send({
        status: true,
        message: "Operation was successfull",
        userData: newhomepageModel,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(501).send({
      status: false,
      message:
        "Operation failed, there was an error perfoming the requested operation",
    });
  }
};

exports.updatePrivacy  = async (req, res) => {
  const { body,title } = req.body
    if (!body || !title) {
    return res.status(501).send({
      status: false,
      message: "body or title provided",
     
    });
  }


  const isHomeExist = await HomepageModels.findOne({ name: "home" });
  if (isHomeExist) {
    // console.log(isHomeExist)
    await HomepageModels.findOneAndUpdate(
      { name: "home" },
      { privacy: [...isHomeExist.privacy,{title,body}] },
      {
        returnOriginal: false,
        useFindAndModify: false,
      }
    ).then((response) => {
      console.log("success");
      return res.status(200).send({
        status: true,
        message: "Operation was successfull",
      
      });
    });
  }
 else {
    const newhomepageModel = new HomepageModels({
      privacy:[{title,body}] 
    });
    await newhomepageModel.save();
    return res.status(200).send({
      status: true,
      message: "Operation was successfull",
      userData: newhomepageModel,
    });
  }

}


 

exports.updateFaq = async (req, res) => {
  const { body,title } = req.body
    if (!body || !title) {
    return res.status(501).send({
      status: false,
      message: "body or title provided",
     
    });
  }


  const isHomeExist = await HomepageModels.findOne({ name: "home" });
  if (isHomeExist) {
    // console.log(isHomeExist)
    await HomepageModels.findOneAndUpdate(
      { name: "home" },
      { faq: [...isHomeExist.faq,{title,body}] },
      {
        returnOriginal: false,
        useFindAndModify: false,
      }
    ).then((response) => {
      console.log("success");
      return res.status(200).send({
        status: true,
        message: "Operation was successfull",
      
      });
    });
  }
 else {
    const newhomepageModel = new HomepageModels({
      faq:[{title,body}] 
    });
    await newhomepageModel.save();
    return res.status(200).send({
      status: true,
      message: "Operation was successfull",
      userData: newhomepageModel,
    });
  }

}

exports.updateAboutUs = async (req, res) => {

  const { body,title } = req.body
    if (!body || !title) {
    return res.status(501).send({
      status: false,
      message: "body or title provided",
     
    });
  }


  const isHomeExist = await HomepageModels.findOne({ name: "home" });
  if (isHomeExist) {
    // console.log(isHomeExist)
    await HomepageModels.findOneAndUpdate(
      { name: "home" },
      { aboutUs: [...isHomeExist.aboutUs,{title,body}] },
      {
        returnOriginal: false,
        useFindAndModify: false,
      }
    ).then((response) => {
      console.log("success");
      return res.status(200).send({
        status: true,
        message: "Operation was successfull",
      
      });
    });
  }
 else {
    const newhomepageModel = new HomepageModels({
      aboutUs:[{title,body}] 
    });
    await newhomepageModel.save();
    return res.status(200).send({
      status: true,
      message: "Operation was successfull",
      userData: newhomepageModel,
    });
  }

}

exports.contactForm = async (req, res) => {
 
  const {  firstName,
  message,
  lastName,
  company,
  mobileNumber,
  subject,
    email } = req.body
  
  if (!firstName || !message || !subject || !lastName || !email) {
    return res.status(404).json({
      status: false,
      message: " All field s not supplied",
    });
  }
  else {
    const newContactMessage = new ContactMessages({message,
      lastName,
      company,
      firstName,
      mobileNumber,
      subject})

    await newContactMessage.save()
    return res.status(200).send({
      status: true,
      message: "Operation was successfull",
     
    });
  }
}

exports.CreateBlog = async (req, res) => {
  // console.log("file is", req.files.length);
  // const file = req.files;
  const { userData } = req.body;
  const{title,body,country} = JSON.parse(userData);
 

  if (!title || !body || !country) {
    return res.status(404).json({
      status: false,
      message: " All field s not supplied",
    });
  }

  let newFiles = new Array();
  if (req.files.length>0) {
    for (const file of req.files) {
      let img = {
        uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
      };
      newFiles.push(img);
    }
  }
  let params= req.files.length>0? {
    title,body,country, imagUri:newFiles[0]['uri']
  }: {
    title,body,country
  }

  const newBlogPost = new Blog(params)
  await newBlogPost.save((err, success) => {
    if (err) {
      console.log(err);
      return res.status(501).send({
        status: false,
        message: "error saving the data",
      });
    } else {
      return res.status(201).send({
        status: true,
        message: "Blog Post was successful",
       
      });
    }
  });
   
};

exports.postComment =async (req, res) => {

  const {
    title,
    body,
    commentedBy,
    comments_for_post
  } = req.body
  
  if (!title || !body || !commentedBy || !comments_for_post) {
    return res.status(501).send({
      status: false,
      message: "no title or body or comment id or current user id",
    });
  }

  else {
    try {
      const newComment = new BlogComments({
        body,title,commentedBy,comments_for_post
      })
      await newComment.save();
      await Blog.findOne({ _id: comments_for_post }).then(async(post) => {
        post.comments.push(newComment)
        await post.save();
    // return res.status(200).send({
    //   status: true,
    //   message: "Post was successfull",
    // });
        req['params']["id"] =comments_for_post
        await this.BlogById(req,res)
      })
    }
    catch (err) {
      console.log(err)
      return res.status(501).send({
        status: false,
        message: "An error occured: "+err,
      });
    }
   
  }
}


exports.LikeAPost = async (req, res) => {
  
  const id = req.body.id
  const postId = req.params.postId
 
  const BlogPost = await Blog.findOne({ _id: postId })

  try {
    if (BlogPost) {
      var isInArray = BlogPost.likes.some(function (likes) {
        return likes.equals(id);

    })

   
      if (isInArray) {
      
      await BlogPost.likes.pull(id)
      await BlogPost.save()
      req.params.id=postId
      await this.BlogById(req,res)
    }
    else {
    
      const user = await UserSchema.findOne({_id:id})
      if (user) {
      
        await BlogPost.likes.push(user) 
        await BlogPost.save()
        req.params.id=postId
        await this.BlogById(req,res)
      }
    }
    
  }
  }
  catch (err) {
    // console.log(err)
    return res.status(501).send({
      status: false,
      message: "An error occured: "+err,
    });
  }
 
}
exports.handleUpgradeRooms=async(req,res)=>{
const{post_id,payment_response,plan}= req.body


if(!post_id || !payment_response || ! plan){

  return res.status(501).send({
    status: false,
    message: "An error occured: "
  });
}

const isPaid = await axios.get(
  `https://api.flutterwave.com/v3/transactions/${payment_response.transaction_id}/verify`,
  {
    headers: { Authorization: `Bearer ${process.env.FLUTTER_SECRET_KEY}` },
  }
);
if (!isPaid.data.status === "success") {
  return res
    .status(404)
    .json({ message: "payment wasnt successfull, try again",status:false });
}
if (isPaid.data.status === "success") {
 
const today=new Date()

const expire_date=plan==="month"?getDays(30):plan==="week"? getDays(7):plan==="year"?getYear():""
  await Rooms.findByIdAndUpdate(
    { _id: post_id },
    {
      // $inc: params,
      isPaidAdd:true,
      expire_date:expire_date,
      purchase_date:today,
      plan:plan,
      payment_response:payment_response
    },
    { new: true, useFindAndModify: false }
  )
    .then((data) => {
      return res.json({
        userData: data,
        status:true,
        message:"success"
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(501).send({ message: "an error occured,unable update post to premiumt",status:false, });
    });
}
}
exports.handleUpgradeApart=async(req,res)=>{
  const{post_id,payment_response,plan}= req.body
  if(!post_id || !payment_response || ! plan){
  
    return res.status(501).send({
      status: false,
      message: "An error occured: "
    });
  }
  
  const isPaid = await axios.get(
    `https://api.flutterwave.com/v3/transactions/${payment_response.transaction_id}/verify`,
    {
      headers: { Authorization: `Bearer ${process.env.FLUTTER_SECRET_KEY}` },
    }
  );
  if (!isPaid.data.status === "success") {
    return res
      .status(404)
      .json({ message: "payment wasnt successfull, try again",status:false });
  }
  if (isPaid.data.status === "success") {
   
  const today=new Date()
  
  const expire_date=plan==="month"?getDays(30):plan==="week"? getDays(7):plan==="year"?getYear():""
    await Apartments.findByIdAndUpdate(
      { _id: post_id },
      {
        // $inc: params,
        isPaidAdd:true,
        expire_date:expire_date,
        purchase_date:today,
        plan:plan,
        payment_response:payment_response
      },
      { new: true, useFindAndModify: false }
    )
      .then((data) => {
        return res.json({
          userData: data,
          status:true,
          message:"success"
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(501).send({ message: "an error occured,unable update post to premiumt",status:false, });
      });
  }
}
exports.getPricesRates=async(req,res)=>{
const country=req.params.country
if(!country){
    return res.status(501).send({
      status: false,
      message: "No country provided: "
    });
}

  await AdRates.findOne({country}).then(rates=>{
    // if the country ad rates is not set we return default which is the else statement
    if(rates){return res.status(200).json({
      userData: rates,
      status:true,
      message:"success"
    })}
    else{
      return res.status(200).json({
        userData: {"currency":"USD" , WeeklyPrice:70,MonthlyPrice:200, YearlyPrice:350,country:"Default"},
        status:true,
        message:"success"
      });
    }
  }).catch(err=>{
    console.log(err)
//we return a default if not set by admin, any any circumstancees
//is used status 200 to return success to client an in means
    return res.status(200).json({
      userData: {"currency":"USD" , WeeklyPrice:70,MonthlyPrice:200, YearlyPrice:350,country:"Default"},
      status:true,
      message:"success"
    });
  })
}



exports.handleUpgradesRoomPayPal=async (req,res)=>{
  const{post_id,plan,orderID}= req.body
  // PAYPAL_OAUTH_API = 'https://api-m.sandbox.paypal.com/v1/oauth2/token/';
  // PAYPAL_ORDER_API = 'https://api-m.sandbox.paypal.com/v2/checkout/orders/';
  const PAYPAL_OAUTH_API = process.env.PAYPAL_OAUTH_API
  const PAYPAL_ORDER_API = process.env.PAYPAL_ORDER_API

  basicAuth = Buffer.from(`${ process.env.PAYPAL_CLIENT }:${ process.env.PAYPAL_SECRET }`).toString('base64')
  // const auth = await axios.post(PAYPAL_OAUTH_API ,{"grant_type": "client_credentials"},{
  //   headers: {
  //     // Accept:        `application/json`,
  //     'Content-Type':'application/x-www-form-urlencoded',
  //     Authorization: `Basic ${ basicAuth }`
  //   },
  //   // data: `grant_type=client_credentials`
  // }).
  
  
  const auth = await axios.post(PAYPAL_OAUTH_API,
    // note the use of querystring
    querystring.stringify({'grant_type':'client_credentials'}),{
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',     
      Authorization: `Basic ${ basicAuth }`
    }
  }).then(res=>res.data).catch(err=>{
    console.log(err)
  })


  // const orderID = req.body.orderID;
  const details = await axios.get(PAYPAL_ORDER_API + orderID, {
    headers: {
      Accept:        `application/json`,
      Authorization: `Bearer ${ auth.access_token }`
    }
  }).then(res=>res.data).catch((err)=>{
    console.log(err)
    return err
  });
// console.log(details)
  // if (details.purchase_units[0].amount.value !== '5.77') {
  if (!details.purchase_units[0].amount.value) {
    console.log(details)
    return res.send(400);
  }
  else{
    const today=new Date()
    const expire_date=plan==="month"?getDays(30):plan==="week"? getDays(7):plan==="year"?getYear():""
      await Rooms.findByIdAndUpdate(
        { _id: post_id },
        {
          // $inc: params,
          isPaidAdd:true,
          expire_date:expire_date,
          purchase_date:today,
          plan:plan,
          payment_response:details
        },
        { new: true, useFindAndModify: false }
      )
        .then((data) => {
          return res.json({
            userData: data,
            status:true,
            message:"success"
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(501).send({ message: "an error occured,unable update post to premiumt",status:false, });
        });
  }

}


exports.handleUpgradesApartPayPal=async (req,res)=>{
  const{post_id,plan,orderID}= req.body
  // console.log(req.body)
  // PAYPAL_OAUTH_API = 'https://api-m.sandbox.paypal.com/v1/oauth2/token/';
  // PAYPAL_ORDER_API = 'https://api-m.sandbox.paypal.com/v2/checkout/orders/';
  const PAYPAL_OAUTH_API = process.env.PAYPAL_OAUTH_API
  const PAYPAL_ORDER_API = process.env.PAYPAL_ORDER_API
  basicAuth = Buffer.from(`${ process.env.PAYPAL_CLIENT }:${ process.env.PAYPAL_SECRET }`).toString('base64')
  // const auth = await axios.post(PAYPAL_OAUTH_API ,{"grant_type": "client_credentials"},{
  //   headers: {
  //     // Accept:        `application/json`,
  //     'Content-Type':'application/x-www-form-urlencoded',
  //     Authorization: `Basic ${ basicAuth }`
  //   },
  //   // data: `grant_type=client_credentials`
  // }).
  
  
  const auth = await axios.post(PAYPAL_OAUTH_API,
    // note the use of querystring
    querystring.stringify({'grant_type':'client_credentials'}),{
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',     
      Authorization: `Basic ${ basicAuth }`
    }
  }).then(res=>res.data).catch(err=>{
    console.log(err)
  })


  // const orderID = req.body.orderID;
  const details = await axios.get(PAYPAL_ORDER_API + orderID, {
    headers: {
      Accept:        `application/json`,
      Authorization: `Bearer ${ auth.access_token }`
    }
  }).then(res=>res.data).catch((err)=>{
    console.log(err)
    return err
  });
// console.log(details)
  // if (details.purchase_units[0].amount.value !== '5.77') {
  if (!details.purchase_units[0].amount.value) {
    console.log(details)
    return res.send(400);
  }
  else{
    const today=new Date()
    const expire_date=plan==="month"?getDays(30):plan==="week"? getDays(7):plan==="year"?getYear():""
      await Apartments.findByIdAndUpdate(
        { _id: post_id },
        {
          // $inc: params,
          isPaidAdd:true,
          expire_date:expire_date,
          purchase_date:today,
          plan:plan,
          payment_response:details
        },
        { new: true, useFindAndModify: false }
      )
        .then((data) => {
          return res.json({
            userData: data,
            status:true,
            message:"success"
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(501).send({ message: "an error occured,unable update post to premiumt",status:false, });
        });
  }

}

exports.handleUpgradesAccountPayPal=async (req,res)=>{
  const{user_id,plan,orderID}= req.body
  // console.log(req.body)
  // PAYPAL_OAUTH_API = 'https://api-m.sandbox.paypal.com/v1/oauth2/token/';
  // PAYPAL_ORDER_API = 'https://api-m.sandbox.paypal.com/v2/checkout/orders/';
  const PAYPAL_OAUTH_API = process.env.PAYPAL_OAUTH_API
  const PAYPAL_ORDER_API = process.env.PAYPAL_ORDER_API
  basicAuth = Buffer.from(`${ process.env.PAYPAL_CLIENT }:${ process.env.PAYPAL_SECRET }`).toString('base64')
  // const auth = await axios.post(PAYPAL_OAUTH_API ,{"grant_type": "client_credentials"},{
  //   headers: {
  //     // Accept:        `application/json`,
  //     'Content-Type':'application/x-www-form-urlencoded',
  //     Authorization: `Basic ${ basicAuth }`
  //   },
  //   // data: `grant_type=client_credentials`
  // }).
  
  
  const auth = await axios.post(PAYPAL_OAUTH_API,
    // note the use of querystring
    querystring.stringify({'grant_type':'client_credentials'}),{
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',     
      Authorization: `Basic ${ basicAuth }`
    }
  }).then(res=>res.data).catch(err=>{
    console.log(err)
  })


  // const orderID = req.body.orderID;
  const details = await axios.get(PAYPAL_ORDER_API + orderID, {
    headers: {
      Accept:        `application/json`,
      Authorization: `Bearer ${ auth.access_token }`
    }
  }).then(res=>res.data).catch((err)=>{
    console.log(err)
    return err
  });
// console.log(details)
  // if (details.purchase_units[0].amount.value !== '5.77') {
  if (!details.purchase_units[0].amount.value) {
    console.log(details)
    return res.send(400);
  }
  else{
    const today=new Date()
    const expire_date=plan==="month"?getDays(30):plan==="week"? getDays(7):plan==="year"?getYear():""
      await UserSchema.findByIdAndUpdate(
        { _id: user_id },
        {
          
          expire_date:expire_date,
          purchase_date:today,
          plans:"Premium",
          // payment_response:details
        },
        { new: true, useFindAndModify: false }
      )
        .then((data) => {
          return res.json({
            userData: data,
            status:true,
            message:"success"
          });
        })
        .catch((err) => {
          console.log(err);
          res.status(501).send({ message: "an error occured,unable update post to premiumt",status:false, });
        });
  }

}


exports.handleUpgradeAccount=async(req,res)=>{

  const{user_id,payment_response,plan}= req.body
  if(!user_id || !payment_response|| !plan ){
  console.log(req.body)
    return res.status(501).send({
      status: false,
      message: "An error occured: all parameters not supplied"
    });
  }
  
  const isPaid = await axios.get(
    `https://api.flutterwave.com/v3/transactions/${payment_response.transaction_id}/verify`,
    {
      headers: { Authorization: `Bearer ${process.env.FLUTTER_SECRET_KEY}` },
    }
  );
  if (!isPaid.data.status === "success") {
    return res
      .status(404)
      .json({ message: "payment wasnt successfull, try again",status:false });
  }
  if (isPaid.data.status === "success") {
   
  const today=new Date()
  const expire_date=plan==="month"?getDays(30):plan==="week"? getDays(7):plan==="year"?getYear():""
    await UserSchema.findByIdAndUpdate(
      { _id: user_id },
      {
        // $inc: params,
       
        expire_date:expire_date,
        purchase_date:today,
        plans:"Premium",
        payment_response:payment_response
      },
      { new: true, useFindAndModify: false }
    )
      .then((data) => {
        return res.json({
          userData: data,
          status:true,
          message:"success"
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(501).send({ message: "an error occured,unable update account premiumt",status:false, });
      });
  }
}




exports.sendMessages = async (req, res) => {
  const { body, receiver } = req.body;
  const sender = req.body.id;
  let { title } = req.body;
  if (!receiver || !sender) {
    return res
      .status(501)
      .json({ status:false,message: "receiver  or Sender cant not be blank" });
  }
  if (!title) {
    title = "untitled";
  }
  if (!body) {
    return res.status(501).json({status:false, message: "message body can not be blank" });
  } else {
    const newMessages = new MessagesSchema({ title, body, receiver, sender });
    await newMessages.save((err, success) => {
      if (err) {
        console.log("unable to save", err);
        return res.status(501).json({ message: "unable to save" });
      } else {
        return res.status(200).json({
          message: "sent",
        });
      }
    });
  }
};
exports.FetchSentMessages = async (req, res) => {
  const id = req.body.id;
  MessagesSchema.find({ sender: id })
    .populate("receiver", "-Password").then((items) => {
      res.status(200).json({ userData: items });
    })
    .catch((err) => {
      return res.status(404).json({ message: "empty" });
    });
};
exports.FetchReceivedMessages = async (req, res) => {
  const id = req.body.id;
  MessagesSchema.find({ receiver: id })
    .populate("sender", "-Password")
    .then((items) => {
      res.status(200).json({ userData: items ,status:true});
    })
    .catch((err) => {
      return res.status(404).json({ message: "empty",status:false });
    });
};

exports.deleteItemApartment=async(req,res)=>{
const item=req.query.item
await Apartments.findByIdAndDelete(item).then(response=>{
  return res.status(200).json({ message:"success" ,status:true});
}).catch(error=>{
  console.log(error)
  return res.status(404).json({ message: "Operation not successful",status:false });
})
}
exports.deleteItemRooms=async(req,res)=>{
const item=req.query.item
await Rooms.findByIdAndDelete(item).then(response=>{
  return res.status(200).json({ message:"success" ,status:true});
}).catch(error=>{
  return res.status(404).json({ message: "Operation not successful",status:false });
})
}

exports.getPostApartById= async(req,res)=>{
  
  const id = req.body.id;
  const postId = req.params.postId;
//get user only post
  await Apartments.findOne({_id:postId}).select('-Approved_By_Admin -location -media -building_location').then(item=>{
    return res.status(200).json({userData: item, message:"success" ,status:true});
  }).catch(err=>{
    return res.status(404).json({ message: "Operation not successful",status:false });
  })

  
}
exports.getPostRoomsById= async(req,res)=>{
  
  const id = req.body.id;
  const postId = req.params.postId;
//get user only post
  await Rooms.findOne({_id:postId}).select('-Approved_By_Admin -location -media -building_location').then(item=>{
    return res.status(200).json({userData: item, message:"success" ,status:true});
  }).catch(err=>{
    return res.status(404).json({ message: "Operation not successful",status:false });
  })

  
}


exports.UpdatePostApartById=async(req,res)=>{
const {dataInfo,postId} = req.body

await Apartments.findByIdAndUpdate(postId,dataInfo).then(response=>{
  return res.status(200).json({ message:"success" ,status:true});
}).catch(err=>{
  console.log(err)
  return res.status(404).json({ message: "Operation not successful",status:false });
})
}

exports.UpdatePostRoomsById=async(req,res)=>{
const {dataInfo,postId} = req.body

await Rooms.findByIdAndUpdate(postId,dataInfo).then(response=>{
  return res.status(200).json({ message:"success" ,status:true});
}).catch(err=>{
  console.log(err)
  return res.status(404).json({ message: "Operation not successful",status:false });
})
}