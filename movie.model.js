const mongoose=require('mongoose');

const artistSchema= new mongoose.Schema({
    artistid:{
        type:Number,
        required :true
    },
    first_name:{
        type:String,
        required :true
},
last_name:{
    type:String,
    required :true
},
wiki_url:{
    type:String,
    required :true 
},
profile_url:{
    type:String,
    required :true

},
movies:{
    type:Array,
    required:true

}

});



const genreSchema= new mongoose.Schema({
    genreid:{
        type:Number,
        required: true
    },
    genre:{
        type:String,
        required:true
    }
});


const showSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    theatre:{
        name:{
            type:String,
            required:true
        },
        city:{
            type:String,
            required:true
        }
    },
    language:{
        type:String,
        required:true
    },
    show_timing:{
        type:Date,
        required:true
    },
    available_seats:{
        type:Number,
        required:true,
    }
})



const movieSchema=new mongoose.Schema({
    movieid:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true

 },
    published:{
        type:Boolean,
        required:true
    },
    released:{
        type:Boolean,
        required:true
    },
    poster_url:{
        type:Boolean,
        required:true
    },
    release_date:{
        type:Date,
        required:true
    },
    publish_date:{
        type:Date,
        required:true
    },
    artists:[artistSchema],
    genres:[genreSchema],
    duration:{
        type:Number,
        required:true

    },
    critic_rating:{
        type:Number,
        required:true
    },
    trailer_url:{
        type:String,
        required:true

    },
    wiki_url:{
        type:String,
        required:true
    },
    story_line:{
        type:String,
        required:true
},
shows:[showSchema]
});

const Movie=mongoose.model('Movie',movieSchema);

module.exports={Movie};