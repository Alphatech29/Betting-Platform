const asyncHandler = require("../../helpers/asyncHandler");


exports.homePageGet = asyncHandler(async (req, res, next) => {
    res.render("general/page/home", {
        title: "Home",
        message: "Welcome to the home page!"
    })
})
