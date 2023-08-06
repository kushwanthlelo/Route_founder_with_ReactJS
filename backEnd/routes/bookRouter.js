const router=require("express").Router();
const bookController=require("../controllers/bookingController.js")
const jwt=require('jsonwebtoken');
const User =require("../models/usermodel");

router.post("/order",authenticationTocken,bookController.orderbook);
router.post('/showbooking',authenticationTocken,bookController.showBookings)
router.post('/allbooking',authenticationTocken,bookController.showAllBookings)

function authenticationTocken(req,res,next){
    console.log(req.body)
    const authHeader=req.body.headers['Authorization']
    // console.log("error cccccccccccccccccccccccccccc",authHeader)
    const token=authHeader 
     if(token==null)return res.sendStatus(401);
    jwt.verify(token,"welcome",(err,user)=>{
        var str = user;
        console.log(user,err,'hhhhhhhhhhhhhhhhhhhhhhhhhh');
        // var obj =  JSON.parse((str));
        // console.log(obj)                
        //  JSON.parse(user);
        // console.log(user.password)
        // console.log(err,JSON.parse(user))
        
        req.user=user[0];
        console.log('caleld',req.user)
         next();
    })}
module.exports=router;