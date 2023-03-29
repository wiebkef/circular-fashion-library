const express = require("express");
const featuresRouter = express.Router();
const {
  getAllFeatures,
  getFeatureById,
  createFeature,
  updateFeature,
  deleteFeature,
} = require("../controllers/features");

const featureFinder = require("../middlewares/featureFinder");

featuresRouter.post("/", createFeature);

featuresRouter.get("/", getAllFeatures);
featuresRouter.get("/:id", featureFinder, getFeatureById);

featuresRouter.put("/:id", featureFinder, updateFeature);

featuresRouter.delete("/:id", featureFinder, deleteFeature);

module.exports = featuresRouter;
