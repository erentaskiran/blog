const express = require('express');
const loadPosts = require('../controllers/post.js');


const router = express.Router()
router.get("/",loadPosts)


module.exports= router;