const express = require("express");
const specialEvent = express.Router();
specialEvent.use(express.json());

const specialEventsArray = require("../models/special-event.model.js")

specialEvent.get("/special-events", (req, res) => {
    res.json(specialEventsArray);
})

module.exports = specialEvent;