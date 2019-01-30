const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path")
// var
// app.get("/",(req,res)=>{
    
// })
//  { maxAge: oneDay }
app.use(express.static(__dirname + '/dist'));

app.get("/",(req,res)=>{
    var html_path=path.join(__dirname,"dist/index.html");
    res.set('Content-Type', 'text/html');
    if(fs.existsSync( html_path)){
        res.send(fs.readFileSync(html_path))
    }else{
        res.send("没找到文件！");
    }
});

var listen_port=process.env.PORT||3000;
app.listen(listen_port,()=>{
    console.log("listening port:",listen_port);
});
