import React, { Component } from 'react';
import "../componentsCss/home.css" 
import SearchBlock from "../components/SearchBlock"
import "../componentJs/search.js"

class Home extends Component {
    state = {  count:0}
    datesetter(e)
    {
      window.localStorage.setItem( 'date', e.target.value);
    }
    render() { 
        return ( 

<main class="full_screen">
  
  <div class='outer outer-r b-r' class='inline' style={{height:'auto'}}>
  
  <div  class='container container-r b-r dd bootstrap-iso'>
   
      <form onSubmit={this.props.searchhandler}>
          <div class='input inline inline-r '> 
            <select required class="input_tag pad" name='source'>
              <option> Agra</option>
              <option>Amaravati</option>
              <option> Amritsar</option>
              <option> Banglore </option>
              <option>Bhopal</option>
              <option>Chennai</option>
              <option> Delhi </option>
              <option>Guwahati</option>
              <option>  Hyderabad</option>
              <option>Jaipur</option>
              <option>Kochi</option>
              <option>Mumbai</option>
              <option>Srinagar</option>
              <option>Vishakhapatanam</option>
  
          </select></div>
          
          <div class='input inline inline-r'> 
          <select required class="input_tag pad" name='destination'>
            <option> Agra</option>
            <option>Amaravati</option>
            <option> Amritsar</option>
            <option> Banglore </option>
            <option>Bhopal</option>
            <option>Chennai</option>
            <option> Delhi </option>
            <option>Guwahati</option>
            <option>  Hyderabad</option>
            <option>Jaipur</option>
            <option>Kochi</option>
            <option>Mumbai</option>
            <option>Srinagar</option>
            <option>Vishakhapatanam</option>
          </select></div>
          <br/>
  
          <div class='input inline inline-r'><span style={{color:"black"}}>Date:</span> <input  required  type="date" name="date" min="2021-03-16" max="2021-11-11" onChange={this.datesetter} id="datepicker"/></div>
  
         <div class='input inline' >
          <button type="submit"  class="btn_ pad">Search</button>
         </div>
      </form>
      
      </div>
      
  
  </div>
  <div>

    <div class="search_details_card sticky">
      <div class="details_table ">
        <div> Start Time         </div>
        <div>  End Time       </div>
        <div>  Travel Time      </div>
        <div>   Distance       </div>
        <div>   Cost       </div>
        <div>No of Passengers</div>
        <div>    Book Now !    </div>
      </div>
    </div>
    
    {this.props.paths.length!=0 &&(  this.props.paths.map((path)=><SearchBlock count={this.state.count++} bookingHandler={this.props.bookingHandler} user={this.props.user} path={path}  />))}
  </div>
  <script>
  {/* var btns=document.getElementsByClassName("submit");
  for(let btn of btns){
    btn.addEventListener("click",function(e){
    e.preventDefault();
    console.log(btn.getAttribute("value"))
    let btnvalue=parseInt(btn.getAttribute("value"));
    console.log(btnvalue);
    console.log("clicked");
   
    let cost=document.getElementById(`cost_${btnvalue}`);
    console.log(cost)
    let passengers=document.getElementById(`passengers_${btnvalue}`)
    cost.value=parseInt(cost.getAttribute("saver"))*parseInt(passengers.value)
    console.log(cost.value,passengers.value)
   var ans=window.confirm("The total amout payable is "+cost.value+ ". Are you sure you want to continue?")
    if(!ans)
    {
      e.preventDefault();
    }
    
  })
 } */}
                </script>
  </main>
         );
    }
}
 
export default Home;