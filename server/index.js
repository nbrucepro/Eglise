// Import required packages
const express = require('express');
const mongoose = require('mongoose');

// Initialize the Express application
const app = express();
const port = 3000; 

const connectionString = "mongodb+srv://bruce:bruce@cluster0.exmgv.mongodb.net/"

mongoose.connect(connectionString)
.then(() => {
    console.log("Mangodb Connected successfully")
})
.catch(err => {
    console.error('Connection error', err);
  });

app.get("/",(req,res)=>{
    res.send("Hello World!");
})
app.listen(port, () => {
    console.log("App is running on the port ",port);
})