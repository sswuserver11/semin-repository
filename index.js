const express = require("express"),
layouts = require("express-ejs-layouts"),
app = express(),
homeController = require("./controllers/homeController"),
errorController = require("./controllers/errorController"),
db = require("./models/index"),
    Sequelize = db.Sequelize;

const router = require('express').Router();

//ejs를 템플릿용으로 사용
app.set("views", __dirname + "/views");
app.set("view engine","ejs");
app.set("port", process.env.PORT || 80);


//url 인코드와 json파라미터 처리를 위한 body-parser사용
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());
//express.js가 이 패키지를 추가 미들웨어로 사용하도록
app.use(layouts);
app.use(express.static(__dirname+"/public"));

app.get("/",homeController.showmain);
app.get("/filter",homeController.filterpage);
app.get("/login",homeController.loginpage);





app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);

});

module.exports = router;
