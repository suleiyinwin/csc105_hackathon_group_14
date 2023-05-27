module.exports = (req, res) => {
    const commentId = req.body.id;

    connection.query("DELETE FROM comments WHERE id = ?", [commentId], (err, rows) => {
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
                        message: "Comment deleted"
                    },
                });
            }
        }
    });
}