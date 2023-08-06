import axios from 'axios';
import React, { Component } from 'react';
import SingleBlock from "../components/singleBlock.js"
import "../componentsCss/all_flight_paths.css"
class UsersDashboard extends Component {
    state = { users:[] }
    render() { 
        return ( <React.Fragment>
            
            <main class="full_screen">

<div class='outer outer-r b-r' class='inline' style={{height:'auto'}}>
 
  <div class='container container-r b-r dd bootstrap-iso'>

      <form onSubmit={this.callsearch} method='post'>
          <div class='input inline inline-r '> 
            <input type="text" name="name" placeholder="Name Search"/>
          </div>
          <div class='input inline inline-r'>
            <input type="text" name="email" placeholder="Email Search"/>
          </div>
         <div class='input inline' >
          <button  class="btn_ pad">Search</button>
         </div>
      </form>
      </div>
      
  
  </div>

<div>
    
    <div class="card_background">
                {this.state.users.map(user=><SingleBlock componentDidMount={this.componentDidMount} user={user}/>)}
    </div>

</div>
 
   </main>     </React.Fragment> );
    }

componentDidMount=()=>{
    axios.get("http://localhost:8000/user/getallusers").then(res=>{
         this.state.users=res.data.users;
        this.setState({})
    })
}

callsearch=(e)=>{
    e.preventDefault();
    var details={name:e.target.name.value,email:e.target.email.value}
    
    axios.post("http://localhost:8000/dashboard/specificuser",details).then(res=>{
        this.state.users=res.data.users;
        this.setState({})
    })
}

}
 
export default UsersDashboard;