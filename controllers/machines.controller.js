const express = require("express");
const machine = express.Router();
machine.use(express.json());

const machinesArray = require("../models/machine.model.js");

machine.get("/machines", (req, res) => {
    res.json(machinesArray);
})

module.exports = machine;
