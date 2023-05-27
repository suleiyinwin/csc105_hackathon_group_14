module.exports = (req, res) => {
    const postId = req.body.id;

    connection.query("DELETE FROM posts WHERE id = ?", [postId], (err, rows) => {
        if(err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        } else {
            if (rows) {
                res.json({
                    success: true,
                    data: {
                        message: "Post deleted"
                    },
                });
            }
        }
    });
}