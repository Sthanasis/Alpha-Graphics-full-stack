const express = require("express");
const dotenv = require("dotenv");
const adminController = require("../controllers/adminController");
const projectController = require("../controllers/projectController");
const photoUploadController = require("../controllers/photoUploadController");

dotenv.config({
  path: "../config.env",
});

const router = express.Router();

router.use(adminController.isAdmin);

router.get("/", projectController.getAllProjects);
router.get("/conceptArt", projectController.getConceptArtProjects);
router.get("/graphicDesign", projectController.getGraphicDesignProjects);
router.get("/:id", projectController.getProject);
router.post(
  "/",
  photoUploadController.updloadProjectPhoto,
  projectController.createProject
);
router.delete("/:id", projectController.deleteProject);

router.post("/login", adminController.login);
router.get("/admin/logout", adminController.logout);

module.exports = router;
