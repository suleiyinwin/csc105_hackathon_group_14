const mysql=require('mysql2');
module.exports=(req,res)=>{
    const { userId } = res.locals;
    const title=req.body.title;
    const description=req.body.description;
}