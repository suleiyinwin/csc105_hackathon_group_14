const mysql=require('mysql2');
var jwt = require("jsonwebtoken");

module.exports=(req,res)=>{
    const token = req.cookies.UserToken;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    const comment=req.body.commentText;
    const postId=req.body.postId;
    connection.query("Insert into comments (userId,commentText,postId) values (?,?,?)",[decoded.user.id,comment,postId],(err,rows)=>{
        if(err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }
        else{
            const newComment = {
                commentText:comment,
                postId:postId,
                userId:decoded.user.id,
            }
                res.json({
                    success: true,
                    data: newComment,
                    message: "Comment created",
                });
        }
    })
}