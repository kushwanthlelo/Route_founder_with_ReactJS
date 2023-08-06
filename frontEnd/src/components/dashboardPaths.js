import React, { Component } from 'react';
import axios from 'axios'
import "../componentsCss/all_flight_paths.css"
import "../componentsCss/home.css"
import PathBlock from "./pathBlock.js"
class AllFlights extends Component {
    state = { paths:[] }
    render() { 
        return ( 
            
<React.Fragment>
        <main class="full_screen">
        <div class='outer outer-r b-r' class='inline' style={{height:'auto'}}>

<div class='container container-r b-r dd'>

    <form onSubmit={this.callsearch} method='post'>
        <div class='input inline inline-r '> 
          <input type="text" name="source" placeholder="Source Search"/>
        </div>
          
        <div class='input inline inline-r'>
          <input type="text" name="destination" placeholder="Destination Search"/>
        </div>
      <div class='input inline' >
        <button  class="btn_ pad">Search</button>
      </div>
    </form>
    
    </div>
    

</div>
        </main>

        <div class="card_background">
          {/* <%for(path of paths){%> */}
           {this.state.paths.map(path=><PathBlock path={path}/>)}
          {/* <%}%> */}
        </div>
</React.Fragment>

         );
    }

    
componentDidMount=()=>{
 
  axios.post("http://localhost:8000/dashboard/allpaths",{}).then(res=>{
        
      this.state.paths=res.data.paths;
      this.setState({})
  })
}

callsearch=(e)=>{
  e.preventDefault();
  var details={source:e.target.source.value,destination:e.target.destination.value}
 
  axios.post("http://localhost:8000/dashboard/specificpath",details).then(res=>{
 
  this.state.paths=res.data.paths;
      this.setState({})
  })
}
}
 
export default AllFlights;