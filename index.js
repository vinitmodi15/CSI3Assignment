const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
const port = 8080;


app.get("/",(req,res)=>{
    res.send("Welcome to the home page");
})

app.post("/",(req,res)=>{
    let data = req.body;
    console.log(data);
    res.send(`Recieved the data was ${JSON.stringify(req.body)}`);
    // res.send("this was the post request");
})

app.listen(port,()=>{
    console.log(`listening to the ${port}`);
})