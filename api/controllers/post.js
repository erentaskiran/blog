
const con = require('../database.js');

const loadPosts = async (req, res) => {
    const q = "SELECT * FROM posts ORDER BY id DESC LIMIT 10";
    
    con.query(q, [], (err, data) => {
        if (err) throw err;
        res.json(data)
    });
};

module.exports= loadPosts;
