async function getAllUsers(req,res,next) {
    let Query = `SELECT * FROM users`;
    let db_promise = db_pool.promise();
    try {
        res.status(200).json(await db_promise.query(Query));
    }catch (err){
        return res.status(500).json({message: err});
    }
    next();
}
async function getById(req,res,next) {
    let Query = `SELECT * FROM users WHERE user_id = ${req.params.id}`;
    let db_promise = db_pool.promise();
    try {
        res.status(200).json(await db_promise.query(Query));
    }catch (err){
        return res.status(500).json({message: err});
    }
    next();
}



module.exports = {
    getAllUsers: getAllUsers,
    getById: getById
}