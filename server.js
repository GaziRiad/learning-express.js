const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB Connection successfull!"));

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
