const express=require('express');
const router=express.Router();

const {findAllMovies}=require('../controllers/movie.controller');
// const {findMovieById}=require('../controllers/movie.controller')

router.get('/movie',findAllMovies);
// router.get('/movie/:movieID',findMovieById);

module.exports=router;