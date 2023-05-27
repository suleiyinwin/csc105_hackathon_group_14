const mysql=require('mysql2');
var jwt = require("jsonwebtoken");

module.exports=(req,res)=>{
    const token = req.cookies.UserToken;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    const emotions=req.body.emotions;
    connection.query("Insert into emotions (userId,emotions) values (?,?)",[decoded.user.id,emotions],(err,rows)=>{
        if(err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        }
        else{
                res.json({
                    success: true,
                    data: emotions,
                    message: "Emotion for today is added.",
                });
        }
    })
}