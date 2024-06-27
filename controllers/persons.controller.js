const express = require("express");
const person = express.Router();
person.use(express.json());

const personsArray = require("../models/person.model.js");

person.get("/", (req, res) => {
    res.json(personsArray);
})


module.exports = person;