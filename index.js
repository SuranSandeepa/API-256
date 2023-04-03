import express from "express"; //const express = require('express');
import bodyParser from "body-parser"; //allows to take in incoming post requests bodies

const app = express(); //initialize express
const PORT = 5000;

app.use(bodyParser.json()); //initialize body parser
