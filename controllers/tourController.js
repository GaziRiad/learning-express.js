const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`, "utf-8")
);

const checkId = (req, res, next, val) => {
  console.log(`Tour id is: ${val}`);
  const tourId = Number(val);

  if (tourId > tours.length)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  next();
};

const checkBody = (req, res, next) => {
  const { name, price } = req.body;
  console.log(name, price);
  if (!name || !price)
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price.",
    });

  next();
};

const getAllTours = (req, res) => {
  res
    .status(200)
    .json({ status: "success", results: tours.length, data: { tours } });
};

const createTour = (req, res) => {
  const newId = tours.at(-1).id + 1;
  const newTour = { id: newId, ...req.body };

  tours.push(newTour);
  const output = fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({ status: "success", data: { newTour } });
      if (err) console.log("ERROR");
    }
  );
};

const getTour = (req, res) => {
  let { tourId } = req.params;
  tourId = Number(tourId);

  const tour = tours.find((tour) => tour.id === tourId);

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
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
  checkId,
  checkBody,
};
