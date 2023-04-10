import express from "express"; //const express = require('express');
import bodyParser from "body-parser"; //allows to take in incoming post requests bodies

import usersRoutes from "./routes/users.js"; //importing the users.js file from routes folder

const app = express(); //initialize express
const PORT = 5000;

app.use(bodyParser.json()); //initialize body parser

app.use("/users", usersRoutes); //use the usersRoutes file for all routes starting with /users

app.get("/", (req, res) => res.send("Hello from Homepage"));

app.listen(PORT, () =>
  console.log(`Server Running on PORT : http://localhost:${PORT}`)
);
