const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    }
})

// Hasing the password 
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,12);
    }
    next();  
})

const User = mongoose.model('USER',userSchema);

module.exports = User;
        