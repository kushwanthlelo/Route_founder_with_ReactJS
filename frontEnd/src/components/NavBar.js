import React, { Component } from 'react';
import "../componentsCss/NavBar.css" 
import {BrowserRouter as Router,Link,useHistory} from 'react-router-dom'
import "../componentJs/header.js"
function NavBar(props)  {
   var state = {  }
   var history=useHistory();
   function logout(e)
   {
       
       history.push("/signin");
   }
   
        return (  
            <React.Fragment >
            <nav class="header_nav">
                <span ><b class="nav_text" style={{padding:'3px',border:'2px double white',borderRadius:"10px"}}>AeroBook</b></span>
                
                    <span class="left_nav" id="left_nv">
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                        </a>
                        <a class="nav_link" href="/user/routesearch"> 
                            <span ><Link className="hover_span nav_text"  to={'/'}>Home</Link></span> </a>
                            {props.user[0]!=null  && props.user[0]!='null' ?
                           <span>  <Link className="hover_span nav_text" to={"/dashboard/booking"}>Bookings</Link> 
                                                      {(props.user[0]!=null  && props.user[0]!='null' && props.user[0].email=="pkushwanthreddy@gmail.com") && <a class="nav_link"><span class="hover_span btn_link_red"><Link style={{textDecoration:'none'}} className="hover_span nav_text" to={'/dashboard'} >Dashboard</Link></span></a>}

  
                            <a class="nav_link"  >  <span class="hover_span"><Link className="hover_span nav_text" to={'/user/userprofile'}>{props.user[0]!=null && props.user[0]!='null'  ?props.user[0].name:"false"} Profile </Link> </span></a>
                             <a class="nav_link" type="button" ><span class="hover_span btn_link_red" type="button"   ><button class="btn-danger" onClick={()=>{props.logout(logout)}}>Log Out</button></span></a>
                              </span>      :<span>
                            <a class="nav_link"><span class="hover_span btn_link_red"><Link className="hover_span" to={'/signin'} >Sign In</Link></span></a>

                            <a class="nav_link"><span class="hover_span btn_link_red"><Link className="hover_span" to={'/signup'} >Sign Up</Link></span></a>
                            </span>}
                        
                    </span>
                 
            </nav>
            </React.Fragment>
        );
        function callme()
        {
           
        }
}
export default NavBar;