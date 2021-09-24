const { v4: uuidv4 } = require("uuid");
const path = require("path");
const multer = require("multer");







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
      file.mimetype === "image/png" ||
      file.mimetype === "image/gif"
      
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

exports.multerUpload = multer({
  // dest: "public/image/uploaded",
  storage: storage,

  fileFilter: fileFilter,
});

