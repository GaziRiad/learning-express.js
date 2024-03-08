const Tour = require("../models/tourModel");

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    res
      .status(200)
      .json({ status: "success", results: tours.length, data: { tours } });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const createTour = async (req, res) => {
  try {
    // const newTour = new Tour({});
    // newTour.save()

    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: "success",
      data: { tour: newTour },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: "Invalid data sent!",
    });
  }
};

const getTour = async (req, res) => {
  try {
    const { tourId } = req.params;
    const tour = await Tour.findById(tourId);
    // Tour.findOne({_id: req.params.id})

    res.status(200).json({
      status: "success",
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const updateTour = async (req, res) => {
  try {
    const { tourId } = req.params;
    // const tour = await Tour.updateOne({ _id: tourId }, { $set: req.body });
    const tour = await Tour.findByIdAndUpdate(tourId, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        tour: tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteTour = async (req, res) => {
  try {
    const { tourId } = req.params;
    await Tour.findByIdAndDelete(tourId);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
};
