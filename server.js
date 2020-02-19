const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
require("./routes/customer.route.js")(app);
require("./routes/mail.routes.js")(app);
require("./routes/address.routes")(app);
require("./routes/files.routes")(app);
require("./routes/pdf.routes")(app);
require("./routes/siren.routes")(app);
require("./controllers/fileDownload")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});