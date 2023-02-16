const express = require("express")
const app =express()
const path= require("path")



// PORT
const port = process.env.PORT||3000
// public static paht
const indexPath= path.join(__dirname, "../public")
// statsic path
// view engine
// app.set("views", "")
app.set('view engine', "hbs");
app.set("views",path.join(__dirname,"../views"))
app.use(express.static(indexPath))
// routing
app.get("",(req,res)=>{
    res.render("index")
});
app.get("/about",(req,res)=>{
    res.render("about")
});
app.get("/weather",(req,res)=>{
    res.render("weather")
});
app.get("*",(req,res)=>{
    // res.render("error")
    res.sendFile("index.html", { indexPath });
});
app.listen(port)
