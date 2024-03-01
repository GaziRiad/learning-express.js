const fs = require("fs");
const express = require("express");

const app = express();
const port = 3000;
app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, "utf-8")
);

const getAllTours = (req, res) => {
  res
    .status(200)
    .json({ status: "success", results: tours.length, data: { tours } });
};

const createTour = (req, res) => {
  const newId = tours.at(-1).id + 1;
  const newTour = { id: newId, ...req.body };
  console.log(newTour);

  tours.push(newTour);
  const output = fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
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

  if (tourId > tours.length)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

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

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", createTour);
// app.get("/api/v1/tours/:tourId", getTour);
// app.patch("/api/v1/tours/:tourId", updateTour);
// app.delete("/api/v1/tours/:tourId", deleteTour);

app.route("/api/v1/tours").get(getAllTours).post(createTour);
app
  .route("/api/v1/tours/:tourId")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
