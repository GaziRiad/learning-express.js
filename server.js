const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);
mongoose.connect(DB).then(() => console.log("DB Connection successfull!"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
