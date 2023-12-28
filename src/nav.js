const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello express form the home page change");
})
app.get("/about",(req,res)=>{
    res.send("hello express form the about page");
})
app.get("/contact",(req,res)=>{
    res.send("hello express form the contact page");
})
app.get("/temp",(req,res)=>{
    res.send("hello express form the temp page");
})
app.get("/html",(req,res)=>{
    res.send("<h1>hello express form the temp page</h1>");
})
app.get("/json",(req,res)=>{
    // res.send({
    //     name : "aman",
    //     age : 90
    // });
    res.json([{
        name : "aman",
            age : 90
    },{
        name : "aman",
            age : 90
    },{
        name : "aman",
            age : 90
    },{
        name : "aman",
            age : 90
    },{
        name : "aman",
            age : 90
    },])
})

app.listen(8000,()=>{
    console.log("app listening at port 8000");
})