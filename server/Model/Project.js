const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: { type: String },
  project: { type: String },
  date: { type: String },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
