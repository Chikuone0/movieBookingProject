const express=require('express');
const router=express.Router();
const {findAllArtists}=require('../controllers/artist.controller');

router.get('/artist',findAllArtists);

module.exports=router;

