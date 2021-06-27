const express = require("express");
const app = express();
/*const Post = require("./api/post");
const postData = new Post();*/

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});


app.get("/",(req,res) =>{
  res.status(200).send("hello world");
})

/*app.get("/api/posts",(req,res)=>{
  res.Status(200).send(postData.get());
})*/

app.listen(5000, () =>{
  console.log("app listening on port:5000")
});