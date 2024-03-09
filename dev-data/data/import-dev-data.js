const fs = require("fs");
const mongoose = require("mongoose");
const Tour = require("../../models/tourModel");
require("dotenv").config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB).then(() => console.log("DB Connection successfull!"));

// READ JSON FILE
const tours = fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8");

// IMPORTING DATA TO DB
const importData = async () => {
  try {
    await Tour.create(JSON.parse(tours));
    console.log("Created successfuly");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Deleted successfuly");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") importData();
if (process.argv[2] === "--delete") deleteData();
