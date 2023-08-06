import React, { Component } from 'react';
 import "../componentsCss/all_flight_paths.css"
 import axios from 'axios';

 class SingleBlock extends Component {
    state = {  }
    render() { 
        return ( <React.Fragment>
             {/* <table class="card_list">
            <h1 class="welome">gelo</h1>
            <form  method='post'    method='post' enctype="multipart/form-data"    action="/dashboard/updateUser/">
              <tr><td><img width='100px' height='100px' src="asfasd"/></td><td></td></tr>
              <tr><td class="thick">Name</td> <td class="thin"> <input type="text" name="name" value={this.props.user.name} /></td></tr>
              <tr><td class="thick">Id:</td>             <td class="thin">  <input type='text' name='user_id' readonly value={this.props.user._id}/> </td></tr>
              <tr><td class="thick">Email:</td>        <td class="thin">  <input type='text' name='email' readonly value={this.props.user.email}/> </td></tr>
              <tr><td class="thick">Password:</td> 	            <td class="thin">   <input type='text' name='password' required value={this.props.user.password}/>  </td></tr>
              <tr><td class="thick">Mobile:</td>           <td class="thin">  <input type='text' name='mobile' required value={this.props.user.mobile}/> </td></tr> 
              <tr><td class="thick">Avatar:</td>         <td class="thin" width='50px' style={{width:'20px',overflow:" hidden"}}>  <input   name='avatar'  type="file"/ >  </td></tr>
              <tr><td colspan="1"><button class="btn btn-Info" type="submit">Update Path</button></td>
             
             <td><a href="/dashboard/deleteUser/<%=user._id%>">
              <button id="delete_btn"  class='btn btn-Danger'>  Delete User </button>
            </a>  </td></tr></form>
           </table> */}








            {/* <!-- <img width=100 height=100 src=<%=user.avatar%>> */}
            
            <form method='post' id={this.props.user._id} onSubmit={(e)=>{this.updateUser(e);    
          
               document.getElementById("message_"+e.target.user_id.value).setAttribute('style','visibility:visible');}}
                enctype="multipart/form-data"    >
                  <span style={{visibility:'hidden'}} id={"message_"+this.props.user._id}>Updated Successful</span>
            <table class="table table-striped card_list">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name:</th>
                    <th scope="col" ><input type='text' name='name'  defaultValue={this.props.user.name}/></th>
                    <input type="text" name="user_id" hidden value={this.props.user._id}/>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Email:</td>
                    <td><input type='text' name='email' value={this.props.user.email}/></td>
                   
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Password:</td>
                    <td><input type='text' name='password' placeholder={this.props.user.password}/></td>
                    
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Mobile:</td>
                    <td><input type='text' name='mobile' placeholder={this.props.user.mobile}/></td>
                  </tr>
                
                  {/* <tr>
                    <th scope="row">3</th>
                    <td>Avatar:</td>
                    <td><input class='input_tag' name='avatar' type="file"  placeholder="file" / ></td>
                    
                  </tr> */}
                  <tr>
                  <td></td>
                    <th scope='row'>         
                     <button class='btn btn-info'>Update User</button>     
                          </th>
                    
                    <td>   <button id="delete_btn" class='btn btn-danger' value={this.props.user._id} onClick={this.deleteclicked}   >  Delete User </button>
              </td>
                  </tr>
                </tbody>
                
             
              </table>
              <br/>

            </form>
            
           
            <br/>
            <hr/>
            <br/>
 


        </React.Fragment> );
      
        }
      deleteclicked=(e)=>{
        document.getElementById(e.target.value).setAttribute('style','visibility:hidden');

        e.preventDefault();

        axios.post("http://localhost:8000/dashboard/deleteuser",{id:e.target.value}).then(res=>{
         
        })

        
      }
     refreshPage() {
    // window.location.reload(false);
  }

     updateUser=(e)=>{
       e.preventDefault();
     
       axios.post("http://localhost:8000/dashboard/updateuser",{name:e.target.name.value,mobile:e.target.mobile.value,password:e.target.password.value,email:e.target.email.value,user_id:e.target.user_id.value}).then(res=>{
         
      })
    }

    
}
 
export default SingleBlock;