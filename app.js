const express = require('express');
const path = require('node:path');
const app = express();
const generalRoute = require("./routes/general/general");




// set the view engine to ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));


//HOME PAGE
app.use("/", generalRoute);
app.use("login", generalRoute);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Conneted on port 3000`);
});
