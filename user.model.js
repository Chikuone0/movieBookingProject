const mongoose=require('mongoose');

const coupensSchema=new mongoose.Schema({
    id:{
        type:Number,
        required:true
 },
 discountValue:{
    type:Number,
    required:true,
 },
});

const bookingRequestsSchema=new mongoose.Schema({
    reference_number:{
        type:Number,
        required:true

    },
    coupon_code:{
        type:Number,
        required:true
    },
    show_id:{
        type:Number,
        required:true
    },
    tickets:{
        type:[Number],
        required:true
    }
})

const userSchema=new mongoose.Schema({
    userid:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true

    },
    username:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:String,
        required:true
    },
    isLoggedIn:{
        type:Boolean,
        required:true
    },
    uuid:{
        type:String,
        required:true
    },
    accesstoken:{
        type:String,
        required:true
    },
    coupens:[coupensSchema],
    bookingRequests:[bookingRequestsSchema]
})

const User=mongoose.model('User',userSchema);

module.exports=User;