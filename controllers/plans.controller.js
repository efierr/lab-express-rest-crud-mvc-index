const express = require("express");
const plan = express.Router();
plan.use(express.json());

const plansArray = require("../models/plan.model.js");

plan.get("/", (req, res) => {
    res.json(plansArray);
})


module.exports = plan;