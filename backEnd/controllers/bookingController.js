//import required modules
var User=require("../models/usermodel");
var Booking=require("../models/bookingmodel");
var nodemailer=require("../mailer/nodemailer");




//funciton to return all boookings 
module.exports.showBookings=function(req,res)
{   
    if(req.user){
       
        Booking.find({user_id:req.user._id}).sort({createdAt:-1}).exec(function(err,bookings)
        {
            if(err)
            {
                console.log("Error in bookingcontroller->showBookings",err);
            }
            // console.log(bookings)
            res.json({bookings:bookings})
        })
        

    }
    else
    {
        res.json({bookings:[]})
    }
}
module.exports.showAllBookings=function(req,res)
{              
     

    if(req.user){
        Booking.find({}).populate('user_id').sort({createdAt:-1}).exec(function(err,bookings)
        {
            
            if(err)
            {
                console.log("Error in bookingcontroller->showBookings",err);
            }
            
            res.json({bookings:bookings})
        })
        

    }
    else
    {
        res.json({bookings:[]})
    }
}


//function to create booking in te database;
module.exports.orderbook=function(req,res)
{    
    if(req.user)
    {
        // req.body.booking.date=req.cookies.chosenDate
    //create booking with given details
    Booking.create(req.body.booking,function(err,book)
    {   
        //if booking is not successful the throw an error and redirect to error page;
        if(err)
        {   
            console.log("Error in bookingcontroller->orderbook",err);
            // res.redirect("/404");
            // return 
        }
        //if booking is successfully created in database
        //then we have to add this booking into the booking list of the user who created it
        if(book)
        {   
            
            //finding the user using authentication id
            User.findById(req.user._id,function(err,user)
            {
                
               
                //pushing the booking into his booking records
                user.bookings.push(book);
                //saving the database
                user.save();
                // req.flash("success","Successfully Booked! Ticket sent to your Email!!");
                // if(user)
                // {
                nodemailer.booking_done({user:{path:book.path,email:req.user.email,name:req.user.name,ticket:book.id,passengers:book.passengers,cost:book.cost}});
                // }
            });

        }
        

        res.json({isbooked:true})   ;     
    });
    }
    else
    {
        res.json({isbooked:false});
    }

}