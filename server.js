require("dotenv").config({ path: "./config.env" });

const app = require("./app");

// console.log(process.env.PORT);
// console.log(process.env.USER);
// console.log(process.env.NODE_ENV);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}`);
});
