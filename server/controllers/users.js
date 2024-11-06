const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_KEY = require('../config/gen_params').JWT;

async function getAllUsers(req, res, next) {

    let db_promise = db_pool.promise();
    try {
        res.status(200).json(await db_promise.query('SELECT * FROM users'));
    }catch (error){
        return res.status(500).json({message: error});
    }
    next();
}
async function getById(req,res,next) {
    let query = `SELECT * FROM users WHERE user_id = '${req.params.id}'`;
    let db_promise = db_pool.promise();
    try {
        res.status(200).json(await db_promise.query(query));
    }catch (error){
        return res.status(500).json({message: error});
    }
    next();
}
async function addUser(req, res, next) {
    let { email, password } = req.body;
    let query = `SELECT * FROM users WHERE email = '${email}'`;
    db_pool.query(query, async (error, results) => {
        if (error) return res.status(500).json({message: error});;
        if (results.length > 0) return res.status(400).json({ isExists: true }); // move to login page

        let hashedPassword = await bcrypt.hash(password, 10);

        db_pool.query(`INSERT INTO users (email, password) VALUES ('${email}', '${hashedPassword}')`, (error, results) => {
            if (error) throw error;
            res.status(400).json({ affectedRows: results.affectedRows, insertId: results.insertId }); // redirect to login page
        })
    })
    next();    
}
async function login(req, res, next) {
    let { email, password } = req.body;
    let query = `SELECT * FROM users WHERE email = '${email}'`;
    db_pool.query(query, async (error, results) => {
        if (error) res.status(500).json({ invalid:error });

        if (results.length === 0) {
            return res.status(400).json({ invalid:true });
          }
          let user = results[0];
          let isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(400).json({ invalid:true });
          }
          const token = jwt.sign({ email: user.email }, JWT_KEY, { expiresIn: '1h' });
          res.status(200).json({ token });
    })
    next();    
}

module.exports = {
    getAllUsers: getAllUsers,
    getById: getById,
    addUser: addUser,
    login:login
}