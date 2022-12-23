const { homePageGet } = require("../../controllers/general/home");
const generalRoute = require("express").Router();



//HOMEPAGE
generalRoute.route("/").get(homePageGet)


module.exports = generalRoute