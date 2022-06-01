exports.showmain = (req,res) => {
     res.render("index");
 };

 exports.filterpage = (req,res) => {
     res.render("filter");
 };

 exports.loginpage = (req,res) => {
     res.render("crewpass_login");
 };

 
const db = require("../models/index"),
crew_info = db.crew_info;

