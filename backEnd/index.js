const express=require("express");
const app=express();
var cors = require('cors')
const PORT=8000;
const mongoose=require('mongoose')
const db=require("./config/mongoDB.js");
const passport=require("passport");
const passport_local=require("./config/passport");
const session=require("express-session");
const MongoStore = require('connect-mongo')(session);
 
 
app.use(cors())
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(session({
    name:"Findpath",
    secret:"getsomerawdata",
   store:new MongoStore({ mongooseConnection: mongoose.connection })
  // using store session on MongoDB using express-session + connect
 
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport_local.setAuthenticatedUser);


app.use('/',require("./routes/index.js"));
app.listen(PORT,function(err){
    if(err)
    {
        console.log("######## Error Occured in Starting Server #########");
    }
    else{
        console.log("******* Server Started Successfully ***********");
    }
})