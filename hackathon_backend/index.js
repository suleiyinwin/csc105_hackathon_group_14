const cors=require('cors');
const express=require('express');
const mysql=require('mysql2');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const connection=mysql.createConnection({
    host:"db.cshack.site",
    port:"3306",
    user:"group14",
    password:"232233236",
    database:"group14"
});
global.connection=connection;

connection.connect();
const port=8000;
const app=express();
app.use(express.json());

app.use(bodyParser.json({type:"application/json"}));
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
  }));
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("Hello World!")
});
app.post("/register", require('./register'));
app.post("/login", require("./login"));
app.get("/me",require("./getUserById"));
app.post('/post', require('./createPost'));
app.patch('/post',require("./editPost"));
app.delete('/post',require("./deletePost"));
app.get('/postsByUser',require("./getAllPostsByUser"));
app.get('/publicPosts',require("./getAllPosts"));
app.post('/comment',require("./createComment"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});