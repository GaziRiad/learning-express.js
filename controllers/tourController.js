const Tour = require("../models/tourModel");

const checkBody = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price)
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price.",
    });

  next();
};

const getAllTours = (req, res) => {
  // res
  //   .status(200)
  //   .json({ status: "success", results: tours.length, data: { tours } });
};

const createTour = (req, res) => {
  res.status(201).json({
    status: "success",
    // data: { newTour }
  });
};

const getTour = (req, res) => {
  let { tourId } = req.params;
  tourId = Number(tourId);

  // const tour = tours.find((tour) => tour.id === tourId);

  // res.status(200).json({
  //   status: "success",
  //   data: {
  //     tour,
  //   },
  // });
};

const updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "Updated toor",
    },
  });
};

const deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};

module.exports = {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkBody,
};
