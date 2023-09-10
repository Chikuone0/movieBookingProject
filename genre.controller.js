const {Genre}=require('../models/genre.model');

const  findAllGenres=(req,res)=>{
   Genre.find().then((genres)=>{
        res.json(genres)
        }).catch((err)=>{
            res.status(404).send(err)
    })
}


module.exports={findAllGenres};