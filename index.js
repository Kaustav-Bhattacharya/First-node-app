const express = require("express");
require('dotenv')
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

//importing routes
const postRoute = require("./routes/posts");

app.use("/posts", postRoute);

//routes
app.get("/", (req, res) => {
  res.send("Welcome please use /posts to get all the posts and other operations can be achieved using the id of the posts");
});

app.listen(process.env.PORT || 3000,()=>{console.log(`process Running on localhost:${process.env.PORT||3000}`);});
