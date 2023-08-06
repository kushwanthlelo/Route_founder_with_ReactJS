import { PromiseProvider } from 'mongoose';
import React, { Component } from 'react';
import {Redirect,useHistory} from 'react-router-dom'


var SearchBlock=(propss) => {
    
    var  props=propss
    var  state = { visibility:false }
    var history=useHistory()
    function callhandler()
	{
		// history.push("/book/booking")

       
	}
    return (  
            <div class="">
                <span id={"message_"+props.count} style={{textAlign:"center",color:"yellow",fontWeight:"bolder",fontSize:"20px",visibility:"hidden"}}>Order placed! Thank you for buying . View your order in booking menu</span>
                <div class="search_details_card container container-r">
                <div ><h5 style={{color:"red",textEmphasisPosition:'center'}}>{props.path.paths}</h5></div>
                <div class="details_table"> 
                <div>{props.path.start_time}</div>
                <div>{props.path.end_time}</div>
                <div>{props.path.journey_time}<br/>(
               {props.path.waiting_time}+<br/>
               {props.path.travelling_time})<br/>
               (wait+travel)
               </div>
                <div>{props.path.totaldistance}</div>
                <div>Rs.{props.path.totalprice}</div>
                {/* <div> <select ><option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                </select> </div> */}
                <form  onSubmit={(e)=>{
                        e.preventDefault();
                       var saver=document.getElementById("cost_"+props.count).getAttribute('saver');
                        var cost=document.getElementById("cost_"+props.count).getAttribute('value');
                        var pass=document.getElementById("passengers_"+props.count) ;
                        var cost=parseInt(saver)*parseInt(pass.value);
                       
                        e.target.totalprice=cost
                        
                        var ans=window.confirm("The total amout payable is "+cost+ ". Are you sure you want to continue?")
                        
                        if(!ans)
                        {
                            return;
                        }        
                        document.getElementById("cost_"+props.count).setAttribute('value',cost)
                        
        
                        props.bookingHandler(e,callhandler)

                    var cost=document.getElementById("message_"+props.count).setAttribute('style','textAlign:"center";color:"yellow";fontWeight:"bolder";fontSize:"20px";visibility:visible');
                    }} method='post'>
                 
                <select  class="input_tag pad" style={{backgroundColor:'white'}}   id={"passengers_"+props.count} name='passengers'>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
              </select>
              
              ---------
                <input hidden required name="start_time" value={props.path.start_time}/>
                <input hidden required name="end_time" value={props.path.end_time}/>
                <input hidden required name="journey_time" value={props.path.journey_time}/>
                <input hidden required name="wait_time" value={props.path.waiting_time}/>
                <input hidden requied name="travel_time" value={props.path.travelling_time}/>
                <input hidden required name="user_id" value={props.user[0]._id}/>
                <input hidden required  name="path" value={props.path.paths}/>
                <input hidden required name="cost" saver={props.path.totalprice}   id={"cost_"+props.count}  value={props.path.totalprice}/>
                <button  type='submit' value={props.count} id={props.user[0]._id} class="btn btn-danger submit">Book Now!</button> 
                </form>
 
                {/* {this.props.path.waiting_time} */}
                
               
                
                
                </div>
                </div>
               
            </div>
           
        );
    
}
 
export default SearchBlock;