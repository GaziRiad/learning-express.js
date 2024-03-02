const express = require("express");
const morgan = require("morgan");

const tourRouter = require("./routes/tourRoute");
const userRouter = require("./routes/userRoute");

const app = express();

// 1) MIDDLEWARES
app.use(morgan("dev"));

app.use(express.json());

// app.use((req, res, next) => {
//   console.log("Hello from the middleware 😎");
//   next();
// });

// 3) ROUTES

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
