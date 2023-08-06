import React, { Component } from 'react';
import './App.css';

import NavBar from "./components/NavBar"
// import background from "/aeroplane2.jpg"
import {BrowserRouter, BrowserRouter as Router,Link,Redirect,useHistory} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import SignIn from "./components/SignIn.js"
import SignUp from "./components/SignUp.js"
import Home from "./components/Home.js"
import Dashboard from "./components/dashboard.js"
import axios from 'axios';
import AllFlights from './components/dashboardPaths';
import AddPath from "./components/addpath";
import BookingDashboard from "./components/bookingDashboard.js"
import DashboardBooking from "./components/dashboardBooking.js"
import UserDashboard from "./components/dashboardUsers.js"
import UserProfile from "./components/userprofile.js"
import ForgotPassword from "./components/forgotPassword.js"
// import { checkAuth } from '../../backEnd/controllers/userController';
class App extends Component {
       state={
         token:null,
      user: null,
      paths:[]
    }
   
   
 render(){


  return (
   
    <React.Fragment >

      <Router>
      <NavBar   user={[this.state.user]} logout={this.logoutHandler} />
         <Route path="/"  exact={true} render={
           ()=>{
             if(this.state.user==null  )
             {
              
               return  <Redirect to={"/signin"}/>
             }
             console.log(this.state.user,this.state.user==null,"098",typeof(this.state.user))
             return <Home user={[this.state.user]}  bookingHandler={this.bookingHandler} searchhandler={this.searchhandler} paths={this.state.paths} />
                }} />
         <Route path="/dashboard" strict exact={true} render={
           ()=>{
             if(this.state.user==null)
             {
               return <Redirect to={"/signin"}/>
             }
             return <Dashboard  searchhandler={this.searchhandler} paths={this.state.paths} />
                }} />
         <Route path="/signin" exact={true} render={
            ()=>{
              if(this.state.user!=null ){
                return <Redirect to={"/"}/>
              }
             return <SignIn checkC={this.checkCredentials}/>}
            }/>

         <Route path="/signup" exact={true} render={
            ()=>{
              if(this.state.user!=null  ){
                return <Redirect to={"/"}/>
              }
              return <SignUp createU={this.createUser}/>
              }
              }/>


  <Route path="/dashboard/booking" exact={true} render={
            ()=>{
          //  return <h1>Bookings</h1>
          
              return <BookingDashboard token={this.state.token} createU={this.createUser}/>
              }
              }/>
  <Route path="/dashboard/allbooking" exact={true} render={
            ()=>{
          //  return <h1>Bookings</h1>
          
              return <DashboardBooking token={this.state.token} />
              }
              }/>

  <Route path="/dashboard/flightpaths" exact={true} render={
            ()=>{
              return <AllFlights  />
              // return <h1>Welcome</h1>
              }

              }/>
  
  <Route path="/dashboard/addpath" exact={true} render={
            ()=>{
              // return <h1>add paths</h1>
              return <AddPath callback={this.addPathHandler}/>
              }

              }/>
 <Route path="/dashboard/users" strict exact={true} render={
           ()=>{
              return <UserDashboard/>

} } />
  <Route path="/dashboard/updateflightpath" exact={true} render={
            ()=>{
               return <AllFlights createU={this.createUser}/>
              }

              }/>
<Route path="/user/userprofile" exact={true} render={
            ()=>{
               return <UserProfile createU={this.state.user}/>
              }

              }/>

<Route path="/user/forgot_password" exact={true} render={
            ()=>{
               return <ForgotPassword createU={this.state.user}/>
              }

              }/>
      </Router>
    </React.Fragment>
  )
 }
 componentDidMount=()=>{
   this.getInitialState();
  }


 checkCredentials=(e,cb)=>
 {
   e.preventDefault();   
  //  console.log(e.target.email.value);
    axios.post("http://localhost:8000/user/signin",{email:e.target.email.value,password:e.target.password.value}).then(res=>{
      this.state.token=res.data.token;
      this.setSelectedOption(this.state.token)
       axios.post("http://localhost:8000/user/getuser",{ headers: {
        'Authorization':this.state.token
      }}).then(res=>{
        this.state.user=res.data.user;
        this.setState({})
      }).catch(err=>{console.log(err)})
     // cb();
    }).catch(err=>{
      console.log("error occured",err);
      return false;
    })  
}


  


createUser=(e,cb)=>
 {
   e.preventDefault();
    axios.post("http://localhost:8000/user/signup",{email:e.target.email.value,
   password:e.target.password.value,
   name:e.target.name.value,
   mobile:e.target.mobile.value,
   re_password:e.target.re_password.value})
   .then(res=>{
     console.log(res.data)
    if(res.data.isavailable==true)
    {
     console.log('createduser');
       cb()
    }
    console.log("unable to create user");
  })
 }


 searchhandler=(e)=>
 {
  e.preventDefault();
   axios.post("http://localhost:8000/algo/path",{source:e.target.source.value,destination:e.target.destination.value}).then(res=>{
  this.state.paths=res.data
  this.setState({})
  console.log(this.state.paths.length)
  })
}
 
 logoutHandler=(cb)=>
 {
   this.setSelectedOption(null);
  this.getInitialState();
  cb()
  this.state.token=null;
  this.state.user=null;
  window.localStorage.setItem( 'token', null);
  this.setState({});
 }

addPathHandler=(e)=>{
e.preventDefault();
var req={source:e.target.source.value,destination:e.target.destination.value,start_time:e.target.start_time.value,end_time:e.target.end_time.value,cost:e.target.cost.value,distance:e.target.distance.value}
  console.log(req);
  axios.post("http://localhost:8000/algo/addpath",req).then(res=>{
    console.log(res.data);
    this.setState({})
  })}

 

 getInitialState= () =>{
  this.state.token = JSON.parse(window.localStorage.getItem( 'token' )) || null;
  console.log(this.state.token,this.state.user,"getInitialState")
  axios.post("http://localhost:8000/user/getuser",{ headers: {
    'Authorization':this.state.token
  }}).then(res=>{
    this.state.user=res.data.user;
    this.setState({})
  }).catch(err=>{console.log(err)})
}

setSelectedOption=function( option ){
  window.localStorage.setItem( 'token', JSON.stringify(option));
  this.setState({});
}



bookingHandler=(e,cb)=>{
  e.preventDefault();
 var book={user_id:e.target.user_id.value
    ,
    cost:e.target.cost.value,
    passengers:e.target.passengers.value,
    path:e.target.path.value,
   
    start_time:e.target.start_time.value,
    end_time:e.target.end_time.value,
    journey_time:e.target.journey_time.value,
    wait_time:e.target.wait_time.value,
    travel_time:e.target.travel_time.value,
    date:window.localStorage.getItem( 'date' ),
    order_time:new Date()
  }
  
  // console.log(book,this.state.user)
  console.log("enered handler",window.localStorage.getItem( 'date' ))
  // console.log("booking clicked",e.target)
  axios.post("http://localhost:8000/book/order",{headers: {
    'Authorization':this.state.token},booking:book}).then(res=>{
      console.log("redirecting")
      cb()
  })
}





}





export default App;