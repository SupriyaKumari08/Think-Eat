const express = require('express');
const bcrypt = require('bcrypt')
const router = express.Router();

require('../db/conn');
const User = require('../model/signUpSchema');


// Registration Route
router.post('/register',async (req,res)=>{
    const {fname,lname , phone, email , dob , password , cpassword , gender} = req.body;
    
    if(!fname || !lname || !phone || !email || !dob || !password || !cpassword || !gender){
        return res.status(422).json({error: `Fill all the values`});
    }
     
    try{
       const userExist = await User.findOne({email:email})
            if(userExist){
                return res.status(422).json({error: `User Already Exists`});
            }
    
        const user = new User({fname,lname , phone, email , dob , password , cpassword , gender});
            
        await user.save();
        
        res.status(201).json({messdob : `User registered successfully`})


    }
    catch(err)
    {
        console.log(err);
    }
});


// Login Route 

router.post('/signin',async (req,res)=>{
    try{
        const {email, password}= req.body;

        if(!email || !password){
            return res.status(400).json({error : `Please fill the Credentials properly`})
        }

        const userLogin =await User.findOne({email:email});

        // console.log(userLogin);
        if(userLogin){
            const isMatch = await bcrypt.compare(password , userLogin.password)

            if(!isMatch){
                res.status(401).json({error: 'Invalid Credentials'})
            }else
            res.status(201).json({messdob: "User Signed In Successfully"})
        }
        else{
            res.status(401).json({error:"Invalid Credentials"})
        }

       


    }
    catch(err){
        console.log(err);
    }
})











router.get('/',(req,res)=>{
    res.send(`Hello from router.js`)
})
router.get('/recipes',(req,res)=>{
    res.send(`Recipes`);
});
router.get('/nutriCalc',(req,res)=>{
    res.send(`Calc`);
});
router.get('/logSign',(req,res)=>{
    res.send(`LoginSignup`);
});
router.get('/about',(req,res)=>{
    res.send(`about`);
});



module.exports = router;