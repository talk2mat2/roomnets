const { v4: uuidv4 } = require("uuid");

const { LoginbyJWT } = require("../middlewares/auth");
const express = require("express");
const multer = require("multer");
const path = require("path");
const {multerUpload} = require('../middlewares/multerUpload')
const Router = express.Router();
const uploadImage = require("../middlewares/grfsUpload");

const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEYS_CLOUD,
  api_secret: process.env.API_SECRET_CLOUD,
});
const fs = require("fs");

const UserSchema = require("../models/userMoodel");
const {
  Login,
  ListRoomsByLocation,
  Register,
  updateProfile,
  UpdateHomepageModels,
  ListRoomsByLnglat,
  addInsurer,
  fetchHomepageModels,
  isUserRegistered,
  MediaImage,
  ListApartByLocation,
  ListApartByLnglat,
  media,
  PostAddRooms,
  ListRoomsByState,
  PostAddApart,
  SyncronizeUserData,
  ListApartByState
} = require("../controllers/user");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      "./upload"
      //  path.join(__dirname, "../public/image")
    );
  },
  filename: function (req, file, cb) {
    cb(
      null,

      file.fieldname + "-" + `${uuidv4()}` + path.extname(file.originalname)
    );
  },
});

const fileFilter = async (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  // dest: "public/image/uploaded",
  storage: storage,

  fileFilter: fileFilter,
});

Router.post("/login", Login);
Router.post("/Register", Register);
Router.post("/updateProfile", LoginbyJWT, updateProfile);
Router.get("/upload/:filename", MediaImage);
Router.post("/UpdateHomepageModels", LoginbyJWT, UpdateHomepageModels);
Router.post("/PostAddRoms", LoginbyJWT,multerUpload.array('file'),LoginbyJWT, PostAddRooms);
Router.post("/PostAddApart", LoginbyJWT,multerUpload.array('file'),LoginbyJWT, PostAddApart);
Router.get("/fetchHomepageModels", fetchHomepageModels);
Router.get("/isUserRegistered/:email", isUserRegistered);
Router.get("/media/:fileName", media);
Router.get("/ListRoomsByState/:state", ListRoomsByState);
Router.get("/ListApartByState/:state", ListApartByState);
Router.get("/ListRoomsByLocation", ListRoomsByLocation);
Router.get("/ListApartByLocation", ListApartByLocation);
Router.get("/ListRoomsByLnglat", ListRoomsByLnglat);
Router.get("/ListApartByLnglat", ListApartByLnglat);

module.exports = Router;
