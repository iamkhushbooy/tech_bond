import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,  
    },
    email: {
        type: String,
        required: true,
        unique: true,   
    },
    image: {
        type: String
    },
    password: {
        type: String,
    },
    provider: {
        type: String,
        enum: ['GOOGLE', 'CREDENTIAL'], 
        required: true,
    },
    verified:{
        type:Boolean,
        default:false,
       
    }
}, { timestamps: true });
 const Users = mongoose.models?.Users || mongoose.model("Users", userSchema);

 export default Users;