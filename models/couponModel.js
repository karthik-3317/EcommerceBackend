import mongoose  from "mongoose";
var couponSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,    
        uppercase:true
    },
    expiry:{
        type:Date,
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    },
});

const Coupon = mongoose.model('coupon',couponSchema)

export default Coupon