const express = require("express");
const dotenv = require("dotenv");
const adminController = require("../controllers/adminController");
const projectController = require("../controllers/projectController");
const fileUploadController = require("../controllers/fileUploadController");

dotenv.config({
  path: "../config.env",
});

const router = express.Router();

router.use(adminController.isAdmin);

//Get all projects route
router.get("/", projectController.getAllProjects);
//Get concept Art route
router.get("/conceptArt", projectController.getConceptArtProjects);
//Get graphic Design route
router.get("/graphicDesign", projectController.getGraphicDesignProjects);
//Get a single project route
router.get("/:id", projectController.getProject);
//Create project route
router.post(
  "/",
  fileUploadController.updloadProjectPhoto,
  projectController.createProject
);
//Update cv route
router.post(
  "/cv",
  fileUploadController.updateCV,
  fileUploadController.updloadCV
);
//delete project route
router.delete("/:id", projectController.deleteProject);

router.post("/login", adminController.login);
router.get("/admin/logout", adminController.logout);

module.exports = router;
