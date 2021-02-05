require("./database/database");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const { json } = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

//app middlewares
app.use(bodyParser.json({type:json}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/posts', routes);

app.get("/", (req, res) => {
  res.send("memories project");
});

app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
