import React, { Component } from 'react';
import axios from'axios'
class UserProfile extends Component {
    state = { token:null,
    user:null }
 
    render() { 
        return ( 
            <React.Fragment>
  
<div class='outer outer-r margin-high'>
    <div class='container container-r'>
        <form onSubmit={this.formsubmitted} >
          
           {this.state.user!=null && <span>
            <h2 style={{color:'white'}}>Update Profile</h2>
             <div class='input'>
                <i class="fas fa-user"></i>
                <label style={{color:"red"}} for='name'>Name</label>
                <input class="input_tag" name='name' onChange={this.onchange} placeholder="Username" defaultValue={this.state.user.name} type='text'/>
            </div>
            <div class='input'>
            <i class="fas fa-phone"></i>
            <label style={{color:"red"}} for='mobile'>Email</label>
            <input name='email' class="input_tag"  placeholder="Email" value={this.state.user.email} type='text'/ >
        </div>
      
        <div class='input'>
            <i class="fas fa-phone"></i>
            <label style={{color:"red"}} for='mobile'>Mobile</label>
            <input name='mobile' class="input_tag" onChange={this.onchange} placeholder="Mobile Number" defaultValue={this.state.user.mobile} type='text'/ >
        </div>
        <div class='input'>
        <label style={{color:"red"}} for='password'>Password</label>
            <i class="fas fa-key"></i>  <input  class="input_tag" onChange={this.onchange} type='password' placeholder="Password"  name='password'/>
        </div> 
        <div class='input'>
        <label style={{color:"red"}} for='re_password'>Re-Password</label>
            <i class="fas fa-key"></i><input class="input_tag"  onChange={this.onchange} type='password' placeholder="Confirm-password" name='re_password'/>
        </div> 

        <div class='input inline'><button class='btn_' type="submit">Update</button></div></span>}
            <h5 id="update_flash" style={{visibility:"hidden"}}>Update successful</h5>
    </form>
    </div>
    </div>
    
    
            
                    </React.Fragment>
         );
    }
    componentDidMount=()=>{
            this.getInitialState();
            }

    getInitialState= () =>{
        this.state.token = JSON.parse(window.localStorage.getItem( 'token' )) || null;
    
        axios.post("http://localhost:8000/user/getuser",{ headers: {
            'Authorization':this.state.token
        }}).then(res=>{
            this.state.user=res.data.user;
            this.setState({})
        }).catch(err=>{console.log(err)})
        }
    formsubmitted=(e)=>{
         e.preventDefault();
         axios.post("http://localhost:8000/user/update_user",{ 
        password:e.target.password.value,
        name:e.target.name.value,
        mobile:e.target.mobile.value,
        id:this.state.user._id,
        re_password:e.target.re_password.value, headers: {
            'Authorization':this.state.token
        }})
        .then(res=>{
           document.getElementById("update_flash").style.visibility='visible';
          axios.post("http://localhost:8000/user/signin",{email:this.state.user.email,password:e.target.password.value}).then(res=>{
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
         
 
       })
    
    }
       setSelectedOption=( option )=>{
        window.localStorage.setItem( 'token', JSON.stringify(option));
        this.setState({});
      }
        onchange=()=>{
        document.getElementById("update_flash").style.visibility='hidden';
    }
}
 
export default UserProfile;