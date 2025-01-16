import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    username : String,
    name : String,
    email : String,
    password : String,
    age : Number,
    profilepic:{
        type : String,
        default : 'default.webp'
    },
    posts : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'post'
        }
    ],
    savePost : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'post'
        }
    ],

})

const userModel = mongoose.model('user',userSchema);
export default userModel;