module.exports = (req, res) => {
    const commentId=req.body.id;
    const comment=req.body.commentText;
     connection.query("UPDATE comments SET commentText=? WHERE id = ?", [comment,commentId], (err, rows) => {
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
                         message: "Comment updated"
                     },
                 });
             }
         }
     });
 }