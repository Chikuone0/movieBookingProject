const mongoose=require('mongoose');

const uri="mongodb://localhost:27017/moviesdb";

mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("Successfully connected with database");
}).catch((err)=>{
    console.log(err);
})