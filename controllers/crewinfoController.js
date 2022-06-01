const db = require("../models/index"),
Crew_info = db.crew_info;

modules.exports = {
    index: (req,res,next) => {
        res.render("index");
    },
    showcrew: (req,res) => {
        let crewinfos = Crew_info.findAll();
        res.locals.crewinfos = crewinfos;
    }
};