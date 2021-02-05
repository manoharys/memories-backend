const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const CONNECTION_STRING = process.env.DATABASE_URL;

mongoose
  .connect(CONNECTION_STRING,{useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));
