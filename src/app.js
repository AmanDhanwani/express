const path = require("path");
const requests = require("requests");
const hbs = require("hbs");
const express = require("express");
const { log } = require("util");
const app = express();

const staticPath = path.join(__dirname,"../public/css");

const templatePath = path.join(__dirname,"../template/views");
const partialPath = path.join(__dirname,"../template/partials");

// set the template engine 
app.set('view engine', 'hbs');
// the directory where the template files are located
app.set('views', templatePath)
// set the partial folder path 
hbs.registerPartials(partialPath);

// add middleware
app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/about",(req,res)=>{
    // console.log(req.query);
    // res.render("about",{
    //     name : req.query.name,
    //     age : req.query.age
    // });
    requests(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=a75782c2fd3bf864a791037958d8f0cc`)
        .on('data', function (chunk) {
            const objChunk = JSON.parse(chunk)
            const arrobj = [objChunk] 
            console.log(`city name is ${arrobj[0].name} and temp is ${arrobj[0].main.temp}`);           
            res.write(arrobj[0].name);
        })
        .on('end', function (err) {
          if (err) return console.log('connection closed due to errors', err);
         res.end();
        });
});

app.get("/",(req,res)=>{
    res.send("hello express form the home page");
})

app.get("/about",(req,res)=>{
    res.send("hello express form the about page");
})
// app.get("/about/*",(req,res)=>{
//     res.render("404",{errorComment:"this about page is not found"})
// })

// app.get("*",(req,res)=>{
//     res.render("404",{errorComment:"not found"})
// })

app.listen(8000,()=>{
    console.log("app listening at port 8000");
})