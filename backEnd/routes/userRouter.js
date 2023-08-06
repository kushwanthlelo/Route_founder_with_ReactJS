

const router=require("express").Router();
const userConroller=require("../controllers/userController.js")
const dashboardController=require("../controllers/dashboardController.js")
const passport=require("../config/passport")
const jwt=require('jsonwebtoken');
const User =require("../models/usermodel");
const multer=require('multer')
const { json } = require("body-parser");
router.post("/signup",userConroller.createuser);
router.post("/logout",userConroller.logout);
router.get("/checkauth",userConroller.checkAuth)
router.post("/update_user",userConroller.update_user)
router.post("/forgot_password",userConroller.password_recovery)
// router.post("/signin",passport.authenticate('local',{
//     failureRedirect:"back"
// }),userConroller.checkAuth)
 
router.get('/getallusers',dashboardController.showUsers)

router.post('/getuser',authenticationTocken)
router.post('/signin',(req,res)=>{
 
    const username=req.body.username;
    const password=req.body.password;
     User.findOne(req.body,(err,user)=>{
        
        if(user!=null)
        { 
             accessToken= jwt.sign(JSON.stringify([user]),"welcome")
              
          return res.json({token:accessToken})
        }
    })
    
})



  function authenticationTocken(req,res){
    const authHeader=req.body.headers['Authorization']
     const token=authHeader 
     if(token==null)return res.sendStatus(401);
    jwt.verify(token,"welcome",(err,user)=>{
        var str = user;
        // console.log(user,err,'hhhhhhhhhhhhhhhhhhhhhhhhhh');
        // var obj =  JSON.parse((str));
        // console.log(obj)                
        //  JSON.parse(user);
        // console.log(user.password)
        // console.log(err,JSON.parse(user))
        
        req.user=user[0];
        // console.log('caleld',req.user)
        return res.json({user:req.user})
    })
}
function authenticationTocken2(req,res,next){
   const authHeader=req.body.headers['Authorization']
   const token=authHeader 
   if(token==null)return res.sendStatus(401);
  jwt.verify(token,"welcome",(err,user)=>{
      var str = user;
      // console.log(user,err,'hhhhhhhhhhhhhhhhhhhhhhhhhh');
      // var obj =  JSON.parse((str));
      // console.log(obj)                
      //  JSON.parse(user);
      // console.log(user.password)
      // console.log(err,JSON.parse(user))
      
      req.user=user[0];
      // console.log('caleld',req.user)
     next();
  })
 
}

module.exports=router;

