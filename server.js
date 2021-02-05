const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("./database/database");
const routes = require("./routes/routes")

const app = express();
const PORT = process.env.PORT || 3001;

//middlewares
app.use(bodyParser.json({ urlEncoded: true }));
app.use(cors());
app.use('/posts', routes);

app.get("/", (req, res) => {
  res.send("memories project");
});

app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
