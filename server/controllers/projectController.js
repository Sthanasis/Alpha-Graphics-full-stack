const fs = require("fs");
const Project = require("../Model/Project");

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({
      status: "success",
      results: projects.length,
      data: {
        projects,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        project,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createProject = async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};

exports.deleteProject = async (req, res) => {
  try {
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
  } catch (err) {
    console.log(err);
  }
};
