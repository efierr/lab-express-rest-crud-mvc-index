const express = require("express");

const app = express();
app.use(express.json()); // parse incoming middleware

app.get("/", (req, res) => {
    res.send("Hello, world!");
  });


  const locationController = require("./controllers/locations.controller.js");
app.use("/locations", locationController);


const machineController = require("./controllers/machines.controller.js");
app.use("/equipment", machineController);

const personsController = require("./controllers/persons.controller.js");
app.use("/people", personsController);

const plansController = require("./controllers/plans.controller.js");
app.use("/plans", plansController);

const specialEventController = require("./controllers/special-events.controller.js");
app.use("/specialEvent", specialEventController);


  


module.exports = app;