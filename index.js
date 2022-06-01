const express = require("express"),
layouts = require("express-ejs-layouts"),
app = express(),
router = express.Router(),
homeController = require("./controllers/homeController"),
errorController = require("./controllers/errorController"),
crewinfoController = require("./controllers/crewinfoController.js"),
db = require("./models/index");

db.sequelize.sync();
const Crew_info = db.crewinfo;

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

//메인홈페이지를 위한 라우트 생성
// app.get("/",(req,res)=>{
//     res.render("index");
// });

router.get("/",crewinfoController.index,crewinfoController.showcrew);

//필터링페이지를 위한 라우트 생성
app.get("/filter",(req,res)=>{
    res.render("filter")
});

app.get("/login", (req,res)=>{
    res.render("crewpass_login")
});

app.use("/", router);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);

});
