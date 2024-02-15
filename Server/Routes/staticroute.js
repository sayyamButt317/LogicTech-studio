const express = require("express");
const router = express.Router();


// //set a route for admin who can visit all routes
// router.get("/admin/urls",restrictTo(["ADMIN"]),async (req,res) =>{
//     const allurls = await URL.find({});
//     return res.render("home",{
//         urls :allurls,
//     });
// });

// //set a routes for user and admin who can access normal pages
// router.get("/",restrictTo["NORMAL","ADMIN"],async (req,res) =>{
//     const allurls = await URL.find({createdBy:req.user._id});
//     return res.render("home",{
//         urls :allurls,
//     });
// });

router.get("/signup",(req,res)=>{
    return res.render("signup");
});
router.get("/login",(req,res)=>{
    return res.render("login");
});
router.get("/about",(req,res)=>{
    return res.render("about");
});
router.get("/contact",(req,res)=>{
    return res.render("contact");
});
router.get("/services",(req,res)=>{
    return res.render("services");
});
router.get("/",(req,res)=>{
    return res.render("home");
});
module.exports = router;