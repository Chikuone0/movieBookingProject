const express=require('express');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app=express();
const movieRoutes=require('./routes/movie.routes');
const artistRoutes=require('./routes/artist.routes');
const genreRoutes=require('./routes/genre.routes');
const userRoutes=require('./routes/user.routes');
app.use(express.json());
const port=8085;

app.listen(port,()=>{
    console.log(`My server lis listning on ${port} http://localhost:8085`);
})

const uri="mongodb://localhost:27017/moviesdb";

mongoose.connect(uri,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("Successfully connected with database");
}).catch((err)=>{
    console.log(err);
});

app.get('/',(req,res)=>{
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
});

app.get('/movies',(req,res)=>{
    res.send("All Movies Data in JSON format from Mongo DB");
});

app.get('/genres',(req,res)=>{
    res.send("All Genres Data in JSON format from Mongo DB");
});

app.get('/artists',(req,res)=>{
    res.send("All Artist Data in JSON format from Mongo DB");
});

app.use(movieRoutes);
app.use(artistRoutes);
app.use(genreRoutes);
app.use(userRoutes);


