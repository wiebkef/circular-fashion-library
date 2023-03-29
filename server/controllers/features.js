const Feature = require("../models/feature");
const ErrorResponse = require("../utils/errorResponse");

const getFeatureNames = async (req, res, next) => {
  try {
    const features = await Feature.findAll({ raw: true });
    res.json(features);
  } catch {
    next(new ErrorResponse(error));
  }
};

const createFeature = async (req, res, next) => {
  try {
    const newFeature = await Feature.create(req.body);
    res.status(201).json(newFeature);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const getAllFeatures = async (req, res) => {
  try {
    const features = await Feature.findAll({ raw: true });
    res.json(features);
  } catch {
    res.status(500).json({ message: error.message });
  }
};

const getFeatureById = async (req, res, next) => {
  res.json(req.reqFeature);
};

const updateFeature = async (req, res, next) => {
  try {
    const updatedFeature = await Feature.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      },
      { returning: true } /*
      {
        new: true,
        runValidators: false,
      } */
    );
    console.log(updatedFeature);
    res.json(updatedFeature);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

const deleteFeature = async (req, res, next) => {
  try {
    const deletedFeature = await Feature.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deletedFeature);
  } catch (error) {
    next(new ErrorResponse(error));
  }
};

module.exports = {
  getAllFeatures,
  getFeatureById,
  createFeature,
  updateFeature,
  deleteFeature,
};
