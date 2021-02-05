const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const CONNECTION_STRING = process.env.DATABASE_URL;
const local = "mongodb://localhost:27017/memories";
mongoose
  .connect(local, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));
