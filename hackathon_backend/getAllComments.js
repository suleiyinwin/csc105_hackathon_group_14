
module.exports = (req, res) => {
    const postId=req.body.postId;
    connection.query("SELECT * FROM comments WHERE postId =?",[postId], ( err, rows) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                message: err.message,
            }); 
        } else {
            res.json({
                success: true,
                items: rows,
                message: 'All comments related to a post are fetched.',
            });
        }
    });
};