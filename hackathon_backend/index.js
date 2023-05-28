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
// app.use((req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;
//     const token = authHeader && authHeader.split(' ')[1];

//     if (token == null) throw new ErrorResponse('no credential found', 401);

//     const verify = verifyAccessToken(token);

//     if (verify.err) throw new ErrorResponse('access denied', 403);

//     res.locals.userId = verify.id;
//     next();
//   } catch (error) {
//     if (error instanceof ErrorResponse) {
//       return res.status(error.statusCode).json(error);
//     }
//     return res.json(error);
//   }
// });
app.get("/me",require("./getUserById"));
app.post('/post', require('./createPost'));
app.patch('/post',require("./editPost"));
app.get('/post/:postId',require('./getPostById'));
app.delete('/post/:postId',require("./deletePost"));
app.get('/postsByUser',require("./getAllPostsByUser"));
app.get('/publicPosts',require("./getAllPosts"));
app.post('/comment',require("./createComment"));
app.patch('/comment',require('./editComment'));
app.delete('/comment',require("./deleteComment"));
app.get('/commentsOfPost',require('./getAllComments'));
app.post('/emotion',require('./createEmotion'));
app.get('/todaymood',require('./getTodayEmotion'));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});