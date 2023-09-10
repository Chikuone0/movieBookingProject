const express=require('express');
const router=express.Router();
const {findAllGenres}=require('../controllers/genre.controller');

router.get('/genre',findAllGenres);

module.exports=router;