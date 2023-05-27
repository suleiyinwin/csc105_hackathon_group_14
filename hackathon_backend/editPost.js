module.exports = (req, res) => {
   const postId=req.body.id;
   const title=req.body.title;
   const description=req.body.description;
   const visibility=req.body.visibility;

    connection.query("UPDATE posts SET title=?,description=?,visibility=? WHERE id = ?", [title,description,visibility,postId], (err, rows) => {
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
                        message: "Post updated"
                    },
                });
            }
        }
    });
}