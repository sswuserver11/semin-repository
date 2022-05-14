const express = require("express"),
app = express(),
layouts = require("express-ejs-layouts");

app.set("view engine","ejs");
app.set("port", process.env.PORT || 80);

//url 인코드와 json파라미터 처리를 위한 body-parser사용
app.use(
    express.urlencoded({
        extended: false
    })
);
app.use(express.json());

app.use(layouts);
app.use(express.static(__dirname+"/public"));


//홈페이지를 위한 라우트 생성
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
});

app.get("/filter",(req,res)=>{
    res.sendFile(__dirname + "/views/filtering.html")
});

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);

});
