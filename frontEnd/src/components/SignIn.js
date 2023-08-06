import React, { Component, useImperativeHandle } from 'react';
import "../componentsCss/SignInUp.css"
import {BrowserRouter as Router,Link,Redirect,useHistory} from 'react-router-dom'


function SignIn (props) {
    var state = {  };	 
	var	history= useHistory()
	function callhandler()
	{
		history.push("/home")
	}
        return (<React.Fragment>

<div class="outer-r outer" >
<div class="container-r container" >
	<form  onSubmit={(e)=>{props.checkC(e,callhandler) }}>
		<h2 style={{color:'white'}}>Sign In</h2>
	<div class='input'>
		<b style={{color: "black"}}></b><input class="input_tag" name='email' placeholder="Username" type='email' />
	</div>
	<div class='input'>		 
		<b style={{color: "black"}}></b><input class="input_tag" type='password' placeholder="Password" name='password'/>
	</div>
	<div><small>Forgot Password?<a   style={{color:"yellow"}}> <Link to={'/user/forgot_password'}>click here</Link></a>                </small></div>

	<div><small>Don't have an account?<a  style={{color:"yellow"}}><Link style={{color:"yellow"}} to={"/signup"}>click here</Link> </a>                </small></div>
	<div class='input'>
		<button class="submit" type='submit' class="btn_" > SignIn   </button>
	</div>
 </form>
</div>
</div>
        </React.Fragment> );
}
 
export default SignIn;