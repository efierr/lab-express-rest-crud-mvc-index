const express = require("express");

const app = express();
app.use(express.json()); // parse incoming middleware

app.get("/", (req, res) => {
    res.send("Welcome to App");
  });


  const locationController = require("./controllers/locationsController.js");
app.use("/locations", locationController);


const machineController = require("./controllers/machinesController.js");
app.use("/machines", machineController);

const personsController = require("./controllers/personsController.js");
app.use("/persons", personsController);

const plansController = require("./controllers/plansController.js");
app.use("/plans", plansController);

const specialEventController = require("./controllers/special-eventsController.js");
app.use("/specialEvent", specialEventController);

module.exports = app;