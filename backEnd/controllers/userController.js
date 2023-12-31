//requiring the required models
const User=require("../models/usermodel");

const mailer=require("../mailer/nodemailer")
// 
//FUNCTIONS ARE WRITTEN IN THE FOLLOWING ORDER
//1->signin
//2->signup
//3->createuser
//4->logout
//5->authenticate
//6->routesearch
//7->update
//8->update_user
//9->password_recovery
//signin controller 

 

module.exports.checkAuth=function(req,res)
{
     if(req.isAuthenticated())
    {
         return res.json({isavailable:true,user:req.user});
    }
    else{
        return res.json({isavailable:false,user:null});
    }
}

module.exports.signin=function(req,res){
    // info={reciver:"pkushwanthreddy@gmail.com","subject":"welcome",text:"text"}
    //if user is already signed in then don't show sign in page
    if(req.isAuthenticated())
    {
        // req.flash("info","You have already logged in ");
        return true;
    }else
    {
        return false
    }
}






//signup controller
module.exports.signup=function(req,res){
    //if user is already signed in then don't show signup page
    if(req.isAuthenticated())
    {
        // req.flash("info","You have already logged in ");
        // res.redirect("/user/routesearch");
    }
    else
    {
        // res.render("signup");
    }
   
}






//CREATING USER :: geting user details checking already user exists or not and 
//checking password and repassword are equal or not
// if it details satisfy the above conditions then creating user in database
module.exports.createuser=async function(req,res){
    try
    {
         
        user=await User.findOne({email:req.body.email});
        //checking whether user with email already present in database
        
        if(user){
           
            // req.flash("error","Email Already Exists")
            // res.redirect("back");
            return res.json({isavailable:false});
        }

        //checking password and re_password are equal or not
        if(req.body.password!=req.body.re_password){
            // req.flash("error","Password and Re_password does not match!!")
            // res.redirect("back")
            return res.json({isavailable:false});
        }

        //create user in database
        var user=await User.create(req.body)
            
 
        if(user!=null)
        {
            mailer.signup_done({user:req.body});
            
            // req.flash("success","User added successfully!!");
            return res.json({isavailable:true});
        }
        else
        {
            // req.flash("error","Error in creating the user account");
            return res.json({isavailable:false});
        }
    
        // res.redirect("/user/signin")
    }
    catch(err){
        console.log("Error in usercontroller->createuser",err);
        return res.json({isavailable:false});
    }

}




//function to logout
module.exports.logout=function(req,res){
  try{
    if(req.isAuthenticated())
    {
        // req.flash("success","You have logged out!!");
        req.logout();
    }
    else{
        //  req.flash("info","Not signed in yett!!");
    }
        return true;
  }
  catch(err){
      console.log("Error in usercontroller->logout",err);
  }
}




//function to authenticate
module.exports.authenticate=function(req,res){
    // req.flash("success","Authentication Successfull")
    return true;
}




//function to render search page
// module.exports.routesearch=function(req,res){
// //if user is authenticated only then show him search page
//    if(req.isAuthenticated())
//    {
//     res.render("search");
//    }
//    else
//    {
//     res.redirect("/user/signin");
//    }
// }






//function to send information to update user page
// module.exports.update=async function(req,res){
     
//    try
//    {    //fetching the user
//         var user=await User.findById(req.user.id);

//         if(user)
//         {       
//                 return res.render("update",{user:user});
//         }
//         else
//         {
//             res.redirect("/user/routesearch");
//         }

//    }
//    catch(err)
//    {
//        if("Error in usercontroller->update",err);

//    }
    
// }



//function to update user
module.exports.update_user= async function(req,res){
     
    try{
        //since our form is multi-part data so it could not be read by 
        //normal req.body so we have to add this function to load multipart data
        // await  User.uploadedAvatar(req,res,async function(err)
        // {
 
            //returning if password and re-password does not match
            if(req.body.password!=req.body.re_password){
                req.flash("error","Password and Re_password does not match!!!")
                res.redirect("/user/update");
                return ;
            }          
            
            //finding the user in database
            var user=await User.findById(req.body.id)

            //updating the user details
            user.name=req.body.name;
            user.password=req.body.password;
            user.mobile=req.body.mobile;

            //if file is present then update the avatar else keep previous avatar
            if(req.file)
            {
                         user.avatar=User.avatarPath+'\\'+Date.now()+req.file.originalname;
                                       
            }
           
            //save the changes of user in database 
            user.save();
         
            // req.flash('success','Profile Updated Succesfully');
            // return res.redirect('back');
            return res.json({isupdated:true})
         
        // })
         
     }
    catch(err)
    {
        console.log("Error in usercontroller->update_user",err);
        return res.json({isupdated:false});
    }
     
}


//function to send password when clicked on forgot password to entered email address
module.exports.password_recovery=async function(req,res)
{   
    var user=await User.findOne({email:req.body.email});
    await mailer.password_recovery({user:user});
    console.log('passwrod recovery called',user,)
    // req.flash("success","Password sent to your email ; Please Check");
    return res.json({sent:true});
}