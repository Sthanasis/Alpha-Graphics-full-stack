const multer = require("multer");
const fs = require("fs");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) cb(null, "server/assets/img");
    else cb(null, "server/assets/");
  },
  filename: (req, file, cb) => {
    if (file.mimetype.startsWith("image")) {
      const ext = file.mimetype.split("/")[1];
      cb(null, `project-${req.body.title.split(" ").join("")}.${ext}`);
    } else {
      const ext = file.mimetype.split("/")[1];
      cb(null, `alphaGraphicsCV.${ext}`);
    }
  },
});

const multerFilter = (req, file, cb) => {
  if (
    file.mimetype.startsWith("image") ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error(), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.updateCV = (req, res, next) => {
  if (req.body.file !== null) {
    if (fs.existsSync(`${__dirname}/../assets/alphaGraphicsCV.pdf`)) {
      fs.unlink(`${__dirname}/../assets/alphaGraphicsCV.pdf`, (err) => {
        if (err) {
          console.log(err.message);
        }
      });
    }
    next();
  } else {
    next();
  }
};

exports.updloadProjectPhoto = upload.single("photo");

exports.updloadCV = upload.single("cv");

exports.validateFileUpload = (req, res) => {
  if (req.body.file !== null) {
    res.status(200).json({
      status: "success",
    });
  } else {
    res.status(500).json({
      status: "fail",
    });
  }
};

exports.downloadCV = (req, res) => {
  const file = `${__dirname}/../assets/alphaGraphicsCV.pdf`;
  res.download(file);
};
