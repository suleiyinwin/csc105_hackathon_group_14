var jwt = require("jsonwebtoken");

module.exports = (req, res) => {
    var date_time = new Date();
    let date = ("0" + date_time.getDate()).slice(-2);

    // get current month
    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

    // get current year
    let year = date_time.getFullYear();
    var today= year + "-" + month + "-" + date;
    // console.log(today);
    const token = req.cookies.UserToken;
	var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
    connection.query("SELECT emotions FROM emotions WHERE userId =? AND createdAt=?",[decoded.user.id,today], ( err, rows) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                message: err.message,
            }); 
        } else {
            var mood="";
            // console.log(rows[0].emotions);
            if(rows[0].emotions==1){
                mood="It's okay to not be okay, but never give up";
            }
            else if(rows[0].emotions==2){
                mood="Tough time don't lost, but tough people do."
            }
            else if(rows[0].emotions==3){
                mood="Everyday is a fresh start. Make the most of it."
            }
            else if(rows[0].emotions==4){
                mood="Today is a perfect day to be happy."
            }
            else{
                mood="Cherish the moment of happiness."
            }
            res.json({
                success: true,
                data: mood,
                message: 'Today emotion is fetched',
            });
        }
    });
};