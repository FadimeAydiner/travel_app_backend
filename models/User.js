const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    profile:{type:String,default:'https://isobarscience.com/default-profile-picture1/'},
},{timestamps:true});

module.exports=mongoose.model('User',UserSchema)