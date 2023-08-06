import React, { Component } from 'react';
class BookingBlock extends Component {
    state = {  }
    render() { 
        return ( <div class="booking_list">
        
      
         <img style={{width:"200px",height:"200px"}} src=""/>
        <span class="thick">Ticket Id : </span><span class="thin">{this.props.booking._id}</span><br/>
        <span class="thick">Name : </span><span class="thin">{this.props.booking.user_id.name}</span><br/>
        <span class="thick">Email : </span><span class="thin">{this.props.booking.user_id.email}</span><br/>
        <span class="thick">Mobile : </span><span class="thin">{this.props.booking.user_id.mobile}</span><br/>
        <span class="thick">Journey Path : </span><span class="thin">{this.props.booking.path}</span><br/>
        
        <span  class="thick">Passengers : </span><span class="thin">{this.props.booking.passengers}</span><br/>
        <span class="thick">Travel Date </span><span class="thin">{this.props.booking.date}</span><br/>

        <span class="thick">Journey Start Time : </span><span class="thin">{this.props.booking.start_time}</span><br/>
        <span class="thick">Journey End Time : </span><span class="thin">{this.props.booking.end_time}</span><br/>
        <span class="thick">Total Journey Time : </span><span class="thin">{this.props.booking.journey_time}</span><br/>
        <span class="thick">Total Flying Time : </span><span class="thin">{this.props.booking.travel_time}</span><br/>
        <span class="thick">Total Waiting Time : </span><span class="thin">{this.props.booking.wait_time}</span><br/>


        <span class="thick">Cost : </span><span class="thin">Rs.{this.props.booking.cost}</span><br/>
        <span class="thick">Buy Date : </span ><span class="thin">{this.props.booking.createdAt}</span><br/>  
    </div> );
    }
}
 
export default BookingBlock;