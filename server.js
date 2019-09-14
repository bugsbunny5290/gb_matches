const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const matches = require("./routes/api/matches");
const addmatch = require("./routes/api/addmatch");
const updatematch = require("./routes/api/updatematch");
const showadded = require("./routes/api/showadded");

require("dotenv").config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/matches", matches);
app.use("/api/matches/role", matches);
app.use("/api/matches/add", addmatch);
app.use("/api/matches/update", updatematch);
app.use("/api/matches/delete", updatematch);
app.use("/api/matches/fetch/newdata", showadded);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port: ${PORT}`));
