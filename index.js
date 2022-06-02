const { Router } = require("express");

const express = require("express"),
layouts = require("express-ejs-layouts"),
app = express(),
router = require('express').Router(),
homeController = require("./controllers/homeController"),
crewinfoController = require("./controllers/crewinfoController"),
errorController = require("./controllers/errorController"),
db = require("./models/index"),
    Sequelize = db.Sequelize;

//ejs를 템플릿용으로 사용
app.set("views", __dirname + "/views");
app.set("view engine","ejs");
app.set("port", process.env.PORT || 80);


//url 인코드와 json파라미터 처리를 위한 body-parser사용
router.use(
    express.urlencoded({
        extended: false
    })
);
router.use(express.json());
//express.js가 이 패키지를 추가 미들웨어로 사용하도록
router.use(layouts);
router.use(express.static(__dirname+"/public"));

router.get("/",homeController.showmain);
router.get("/filter",homeController.filterpage);
router.get("/login",homeController.loginpage);
router.get("/login/join",homeController.joinpage);
// router.use(errorController.pageNotFoundError);
// router.use(errorController.internalServerError);

app.use("/",router);//루트로 들어오면 router로 연결시켜줌

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);

});

module.exports = router;
