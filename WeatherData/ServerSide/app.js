const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://weather:weather@cluster0.fvkfg.mongodb.net/WeatherData"
);

const usersRouter = require("./controllers/users/user");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", usersRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
