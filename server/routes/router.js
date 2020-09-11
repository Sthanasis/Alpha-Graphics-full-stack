const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const Project = require("../Model/Project");
const multer = require("multer");

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

router.post("/", updloadUserPhoto, async (req, res) => {
  const newProject = await Project.create({
    title: req.body.title,
    project: req.file.filename,
    date: new Date(),
    description: req.body.description,
  });

  res.status(201).json({
    status: "success",
    data: {
      newProject,
    },
  });
});

module.exports = router;
