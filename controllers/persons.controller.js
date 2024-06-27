const express = require("express");
const person = express.Router();

const personsArray = require("../models/person.model.js");

person.get("/persons", (req, res) => {
    res.json(personsArray);
})


module.exports = person;