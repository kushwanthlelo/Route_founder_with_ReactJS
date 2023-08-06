import React, { Component } from 'react';
import "../componentsCss/dashboard.css"
import {BrowserRouter as Router,Link,useHistory} from 'react-router-dom'

class Dashboard extends Component {
    state = {  }
    render() { 
        return (
            <div id="outer_screen">
 
 <Link to={"/dashboard/allbooking"}  > <div class="dashboard_control" ><a  > <img class="dash_image"  src="/bookings.png"/><div class="middle"> <div class="text">Bookings</div> </div>  </a>    </div></Link>
 <Link to={"/dashboard/flightpaths"}><div class="dashboard_control">   <a > <img class="dash_image" src="/road.png" />       <div class="middle"> <div class="text">Show Flight Paths</div> </div>         </a>   </div></Link>
 <Link to={"/dashboard/users"}>    <div class="dashboard_control">  <a  > <img class="dash_image" src="/users.png"/ >          <div class="middle"> <div class="text">Users Controller </div> </div>          </a></div></Link>
 <Link to={"/dashboard/addpath"}><div class="dashboard_control">  <a ><img class="dash_image" src="/more.png"/ >         <div class="middle"> <div class="text">Add New Flight Path</div> </div>                   </a></div></Link>
 <Link to={'/dashboard/updateflightpath'}><div class="dashboard_control">  <a  ><img class="dash_image" src="/loop.png" ></img>          <div class="middle"> <div class="text">Update Flight Path</div> </div></a>            </div></Link>

            </div>
          );
    }
}
 
export default Dashboard;