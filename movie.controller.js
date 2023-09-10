const {Movie}=require('../models/movie.model');

const findAllMovies=(req,res)=>{
    const status=req.query.status;

console.log("Receving data by status when status is "+status);

 if(status==='PUBLISHED'){
        console.log("Query for findding data with published:true");
        Movie.find({published:true}).then((moviesdetails)=>{
            console.log(moviesdetails);
            res.json(moviesdetails)
        }).catch((err)=>{
            console.log(err);
            res.status(404).send({"Message": "Status not found"})
        })}
 if(status==='RELEASED'){
            console.log("Query for findding data with relealed:true");
            Movie.find({released:true}).then((releaseDetails)=>{
                console.log(releaseDetails);
                res.json(releaseDetails)
            }).catch((err)=>{
                console.log(err);
                res.status(404).send({"Message":"Status not found"})
            })}
};

module.exports={findAllMovies};