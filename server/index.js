// Import required packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const memberRouter = require("./routes/member.route")

// Initialize the Express application 
const app = express();
const port = 4000;

const connectionString =
  "mongodb+srv://bruce:bruce@cluster0.exmgv.mongodb.net/";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Mangodb Connected successfully");
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/members", memberRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log("App is running on the port ", port);
});
