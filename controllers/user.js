const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserSchema = require("../models/userMoodel");
const Rooms = require("../models/rooms");
const Apartments = require("../models/apartments");

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
  console.log(firstName, lastName, email, Password, Password2);
  if (!Password2 || !Password || !lastName || !firstName || !Email) {
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
  console.log("file is", req.files.length);
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
        usadData: DataInfo,
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
    ? {
        "building_location.address": {
          $regex: req.params.state,
          $options: "i",
        },
      }
    : {};

  let total = await Rooms.countDocuments({});
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
  let total = await Apartments.countDocuments({});

  const limit = 15;
  // const params = {}
  const params = req.params.state
    ? {
        "building_location.address": {
          $regex: req.params.state,
          $options: "i",
        },
      }
    : {};
  var pageNo = req.query.pageNo || 0;

  var skip = pageNo * limit;

  await Apartments.find(params)
    .populate("posted_by", "-Password")
    .limit(limit)
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
  console.log(DataInfo);
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
        usadData: DataInfo,
      });
    }
  });
};

exports.ListRoomsByLocation = async (req, res) => {
  const params = req.query.location
    ? {
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

//list apartments when a user search by address string
exports.ListApartByLocation = async (req, res) => {
  const params = req.query.location
    ? {
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
            maxDistance: 1200000, //meters if search result disatcne
            key: "location",
            distanceField: "distance",
          },
        },
        { $limit: limit },
        { $unset: "Password" },
        { $skip: skip },

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
            maxDistance: 1200000, //meters if search result disatcne
            key: "location",
            distanceField: "distance",
          },
        },
        { $limit: 7 },
        { $unset: "Password" },
        { $count: "total" },
      ]
    : [];
  // console.log(req.query.location)
  let total = await Rooms.aggregate(paramCount);
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
            maxDistance: 1200000, //meters if search result disatcne
            key: "location",
            distanceField: "distance",
          },
        },
        { $limit: 7 },
        { $unset: "Password" },
        { $skip: skip },

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
            maxDistance: 1200000, //meters if search result disatcne
            key: "location",
            distanceField: "distance",
          },
        },
        { $limit: 7 },
        { $unset: "Password" },
        { $count: "total" },
      ]
    : [];
  // console.log(req.query.location)
  let total = await Apartments.aggregate(paramCount);
  totalCount = total[0] ? total[0]["total"] : 0;

  await Apartments.aggregate(params)
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
    // console.log(req.files);
    for (const file of req.files) {
      let img = {
        uri: `${process.env.WEB_URL}` + "/api/v1/media/" + file.filename,
      };
      Banners.push(img);
    }
    // console.log(Banners);
    const isHomeExist = await HomepageModels.findOne({ name: "home" });
    if (isHomeExist) {
      // console.log(isHomeExist)
      await HomepageModels.findOneAndUpdate(
        { name: "home" },
        { Banners: Banners },
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
      const newhomepageModel = new HomepageModels({
        Banners: Banners,
      });
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
