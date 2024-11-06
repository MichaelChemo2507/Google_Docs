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
async function addUser(req, res, next) {
    let { email, password } = req.body;
    db.query(`SELECT * FROM users WHERE email = ${email}`, async (error, results) => {
        if (error) throw error;
        if (results.length > 0) return res.status(400).json({ isExists: true }); // move to login page

        let hashedPassword = await bcrypt.hash(password, 10);

        db.query(`INSERT INTO users (email, password) VALUES (${email}, ${hashedPassword})`, (error, results) => {
            if (error) throw error;
            res.status(400).json({ affectedRows: results.affectedRows, insertId: results.insertId }); // redirect to login page
        })
    })
    next();    
}

module.exports = {
    getAllUsers: getAllUsers,
    getById: getById,
    addUser: addUser
}