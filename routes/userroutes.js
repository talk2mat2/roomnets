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
  Subscribers,
  updateProfile,
  UpdateHomepageModels,
  ListRoomsByLnglat,
  addInsurer,
  fetchHomepageModels,
  isUserRegistered,
  MediaImage,
  countDocuments,
  BlogById,
  postComment,
  ListApartByLocation,
  ListApartByLnglat,
  media,
  uploadBanners,
  PostAddRooms,
  ListRoomsByState,
  PostAddApart,
  LikeAPost,
  SyncronizeUserData,
  ListApartByState,
  updatePrivacy,
  contactForm,
  updateFaq,
  updateAboutUs,
  CreateBlog,
  createPartner,
  BlogPostAllRecent,
  BlogPostAll,
  handleUpgradeRooms,
  handleUpgradeApart,
  getPricesRates,
  handleUpgradesRoomPayPal,
  handleUpgradesApartPayPal,
  handleUpgradeAccount,
  handleUpgradesAccountPayPal,
  sendMessages,
  FetchReceivedMessages,
  FetchSentMessages,
  ListRoomsByMe,
  deleteItemApartment,
  ListApartByMe,
  deleteItemRooms,
  getPostApartById,
  UpdatePostApartById,
  UpdatePostRoomsById,
  getPostRoomsById,
  updateMyProfile
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
Router.get("/BlogPostAll/:country", BlogPostAll);
Router.get("/BlogById/:id", BlogById);
Router.get("/ListApartByState/:state", ListApartByState);
Router.get("/ListRoomsByLocation", ListRoomsByLocation);
Router.get("/ListApartByLocation", ListApartByLocation);
Router.get("/ListRoomsByLnglat", ListRoomsByLnglat);
Router.get("/BlogPostAllRecent/:country", BlogPostAllRecent);
Router.get("/getPricesRates/:country", getPricesRates);
Router.get("/LikeAPost/:postId",LoginbyJWT, LikeAPost);
Router.get("/getPostApartById/:postId",LoginbyJWT, getPostApartById);
Router.get("/getPostRoomsById/:postId",LoginbyJWT, getPostRoomsById);
Router.get("/ListApartByLnglat", ListApartByLnglat);
Router.get("/countDocuments", countDocuments);
Router.post("/uploadBanners",multerUpload.array('file'), uploadBanners);
Router.post("/createBlog",multerUpload.array('file'), CreateBlog);
Router.post("/createPartner",multerUpload.array('file'), createPartner);
Router.post("/updatePrivacy",updatePrivacy );
Router.post("/contactForm",contactForm);
Router.post("/updateFaq",updateFaq);
Router.post("/updateAboutUs", updateAboutUs);
Router.post("/postComment",postComment);
Router.post("/updateMyProfile",LoginbyJWT,multerUpload.single('file'),LoginbyJWT,updateMyProfile);
Router.post("/handleUpgradeRooms",handleUpgradeRooms);
Router.post("/handleUpgradeApart",handleUpgradeApart);
Router.post("/handleUpgradesRoomPayPal",handleUpgradesRoomPayPal);
Router.post("/handleUpgradesApartPayPal",handleUpgradesApartPayPal);
Router.post("/handleUpgradeAccount",handleUpgradeAccount);
Router.post("/handleUpgradesAccountPayPal",handleUpgradesAccountPayPal);
Router.post("/sendMessages",LoginbyJWT,sendMessages);
Router.get("/FetchReceivedMessages",LoginbyJWT,FetchReceivedMessages);
Router.get("/FetchSentMessages",LoginbyJWT,FetchSentMessages);
Router.get("/ListRoomsByMe",LoginbyJWT,ListRoomsByMe);
Router.get("/ListApartByMe",LoginbyJWT,ListApartByMe);
Router.get("/deleteItemApartment",LoginbyJWT,deleteItemApartment);
Router.get("/deleteItemRooms",LoginbyJWT,deleteItemRooms);
Router.put("/UpdatePostApartById",LoginbyJWT,UpdatePostApartById);
Router.put("/UpdatePostRoomsById",LoginbyJWT,UpdatePostRoomsById);
Router.post("/Subscribers",Subscribers);


module.exports = Router;
