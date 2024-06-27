const express = require("express");
const locations = express.Router();
locations.use(express.json());

const locationArray = require("../models/location.model.js")

locations.get("/", (req, res) => {
    res.json(locationArray);
})


module.exports = locations;