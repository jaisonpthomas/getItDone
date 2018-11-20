const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  items = require("./routes/api/items");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());
//Routing
app.use("/api/items", items);

// DB Setup
const dbURI = require("./config/keys").mongoURI;
mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//Port Setup
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
