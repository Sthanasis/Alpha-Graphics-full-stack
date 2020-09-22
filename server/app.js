const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const router = require("./routes/router");

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

dotenv.config({
  path: "./config.env",
});

app.use("/api/router", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(`${__dirname}/dist`));

  app.get(/.*/, (req, res) => {
    res.status(200).sendFile(`${__dirname}/dist/index.html`);
  });
}
app.use(express.static(`${__dirname}/dist`));

app.get(/.*/, (req, res) => {
  res.status(200).sendFile(`${__dirname}/dist/index.html`);
});

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("uncaught Exception! SHUTTING DOWN NOW");
  process.exit(1);
});

const DB =
  "mongodb+srv://sakis:10921092@cluster0.bkeog.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
