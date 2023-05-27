
const mysql=require('mysql2');
const bcrypt=require('bcrypt');
var jwt = require("jsonwebtoken");

module.exports=(req,res)=>{
	const token = req.cookies.UserToken;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
	connection.query("SELECT * FROM users WHERE id = ?",[decoded.user.id], (err,rows) => {
        if(err) {
            res.json({
                success: false,
                data: null,
                error: err.message,
            });
        } else {
            res.json({
                success: true,
                userId: rows[0].id,
                username:rows[0].username,
                email:rows[0].email,
                error: null,
            });
        }
    });

} 