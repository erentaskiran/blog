// postDetails.js
const express = require('express');
const con = require('../database.js');

const router = express.Router();

router.get("/api/postdetail/:id", async (req, res) => {
    const id = req.params.id;
    const q = "SELECT * FROM posts WHERE id = ?";
    con.query(q, [id], (err, data) => {
        if (err) console.error(err);
        res.json(data);
    });
});
router.get("/api/post/:id", async (req, res) => {
    const id = req.params.id || 5;
    const q = `SELECT * FROM posts ORDER BY id DESC LIMIT ${id}`;
    con.query(q, [], (err, data) => {
        if (err) console.error(err);
        res.json(data);
        
    });
});

module.exports= router;
