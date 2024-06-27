const express = require("express");

const app = express();
app.use(express.json()); // parse incoming middleware
const locationController = require("./controllers/locations.controller.js");
app.use(locationController);


const machineController = require("./controllers/machines.controller.js");
app.use( machineController);

const personsController = require("./controllers/persons.controller.js");
app.use(personsController);

const plansController = require("./controllers/plans.controller.js");
app.use( plansController);

const specialEventController = require("./controllers/special-events.controller.js");
app.use( specialEventController);

app.get("/", (req, res) => {
    res.send("Hello, world!");
  });


  app.get("*", (req, res) => {
    res.status(404).send("Sorry, no page found")
  })



  


module.exports = app;