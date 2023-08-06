import React, { Component } from 'react';
import {useHistory} from 'react-router-dom'

import axios from 'axios';
function ForgotPassword()  {
    var history=useHistory()
     function onclick()
     {
         history.push("/signin");
     }
        return  <div class="outer-r outer" >
                <div class="container-r container" >
                    <form onSubmit={onsubmit} method='post'>
                        <h2 style={{color:'white'}}>Password Reovery</h2>
                    <p>Password will be sent to following Email:</p>
                    <div class='input'>
                        <i class="fas fa-user"></i><input  class="input_tag" name='email' required type='email' placeholder="Enter Email"/>
                    </div>
                    <div class='input'><button class="btn_">Send Mail</button></div>
                </form>
                </div>
                </div>
        ;
    function onsubmit(e)
    {
        e.preventDefault();
        axios.post('http://localhost:8000/user/forgot_password',{email:e.target.email.value}).then(res=>{
            onclick();
        })
    }
    
}
 
export default ForgotPassword;