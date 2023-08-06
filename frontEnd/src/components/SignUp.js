import React, { Component } from 'react';
import { useHistory } from 'react-router';
import "../componentsCss/SignInUp.css"


function SignUp(props){
    var state = {  }
    var history=useHistory();
    function callhandler()
    {
        history.push("/signin")
    }
        return ( <React.Fragment>

            <div   class="outer outer-r">
            <div  class='container container-r'>
                <form onSubmit={(e)=>{props.createU(e,callhandler)}} >
                    <h2 style={{color:"white"}}>Sign Up</h2>
                    <div class='input'>
                       
                        <input class="input_tag" name='name' placeholder="Username" type='text' />
                    </div>
                <div class='input'>
                   
                    <input name='email' class="input_tag" placeholder="Email" type='email'/ >
                </div>
                <div class='input'>
                    
                    <input name='mobile' class="input_tag" placeholder="Mobile Number" type='text'/ >
                </div>
                <div class='input'>
                     
                   <input class="input_tag" type='password' placeholder="Password"  name='password'/>
                </div> 
                <div class='input'>
                     
                    <input type='password' class="input_tag" placeholder="Confirm-password" name='re_password'/>
                </div> 
              
                <div><small>Already have an Account?<a style={{color:"yellow"}}> click here</a>                </small></div>
                <div class='input'>
		<button class="submit" type="submit"   class="btn_">Signin</button>
	</div>            </form>
            </div>
            </div>
            
            
                    </React.Fragment>);
  
}
 
export default SignUp;