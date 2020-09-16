const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const Project = require("../Model/Project");
const multer = require("multer");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config({
  path: "../config.env",
});

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWTSECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const logout = (req, res, next) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ status: "success" });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES_COOKIE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  res.cookie("jwt", token, cookieOptions);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

const isAdmin = async (req, res, next) => {
  if (req.cookies.jwt) {
    const admin = {
      username: process.env.LOGIN_USER,
      password: process.env.USERPASSWORD,
    };
    res.locals.user = admin;
    next();
  } else {
    next();
  }
};

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "server/dist/img");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `project-${req.body.title}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new Error(), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const router = express.Router();

router.use(isAdmin);

const updloadUserPhoto = upload.single("photo");

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.status(200).json({
    status: "success",
    results: projects.length,
    data: {
      projects,
    },
  });
});

router.get("/:id", async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      project,
    },
  });
});

router.post("/", updloadUserPhoto, async (req, res) => {
  const newProject = await Project.create({
    title: req.body.title,
    project: req.file.filename,
    date: new Date(),
    description: req.body.description,
    type: req.body.type,
  });

  res.status(201).json({
    status: "success",
    data: {
      newProject,
    },
  });
});

router.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.json({
      message: "No Username or Password",
    });
  }

  if (password === process.env.USERPASSWORD) {
    const user = {
      id: "123",
      username: process.env.LOGIN_USER,
      password: process.env.USERPASSWORD,
    };

    createSendToken(user, 200, res);
  } else {
    res.status(404).json({
      status: "fail",
      message: "incorrect email or password",
    });
  }
});

router.get("/logout", logout);

router.delete("/:id", isAdmin, async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  fs.unlink(`${__dirname}/../dist/img/${project.project}`, (err) => {
    if (err) {
      console.log(err.message);
    }
  });

  res.status(204).json({
    status: "success",
    message: "File deleted",
  });
});

module.exports = router;
