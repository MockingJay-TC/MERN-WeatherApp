const mongoose = require("mongoose");
const User = require("./models/user");

mongoose.connect(
  "mongodb+srv://weather:weather@cluster0.fvkfg.mongodb.net/WeatherData"
);

const createUser = async () => {
  const user = new User({
    email: "victoraremu123@gmail.com",
    password: "Admin123",
  });
  user
    .save()
    .then((result) => {
      console.log(result);
      process.exit(0);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

createUser();
