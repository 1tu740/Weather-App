const express = require('express');
const hbs = require('hbs')
const path = require('path');
const app = express();
const port = process.env.port || 8000; 


const staticpath = path.join(__dirname,"../public");
const viewspath = path.join(__dirname,"../views");
const partials_path = path.join(__dirname,"../partials"); 

app.use(express.static(staticpath));
app.set('view engine', 'hbs');
app.set('views', viewspath);
hbs.registerPartials(partials_path);



// routing
app.get("" , (req , res)=>{
    res.render('index')
})

app.get("/about" , (req , res)=>{
    res.render('about')
})

app.get("/weather" , (req , res)=>{
    res.render('weather')
})

app.get("*" , (req , res)=>{
    res.render('404errorpage')
})


app.listen(port , (req , res)=>{

    console.log(`listening from the port at ${port}`)
})

