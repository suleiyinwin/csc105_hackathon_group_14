module.exports = (req, res) => {
    connection.query("SELECT * FROM posts WHERE visibility =1", ( err, rows) => {
        if (err) {
            return res.json({
                success: false,
                data: null,
                message: err.message,
            }); 
        } else {
            res.json({
                success: true,
                data: rows,
                message: 'All public posts are fetched.',
            });
        }
    });
};