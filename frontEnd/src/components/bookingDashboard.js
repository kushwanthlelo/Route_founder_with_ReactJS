import axios from 'axios';
import React, { Component } from 'react';
import BookingBlock from "./bookingBlock.js";
import "../componentsCss/orderDashboard.css"
class BookingDashboard extends Component {
    state = {bookings:[ ],
    token:null  }
    render() {

        return ( <div class="booking_background">
       
             {/* {this.state.bookings[0].createdAt} */}
        {this.state.bookings.map(booking=>{return <BookingBlock booking={booking}/>})}
             
    </div> );
    }
    componentDidMount=()=>{
        this.state.token = JSON.parse(window.localStorage.getItem( 'token' )) || null;
         
        axios.post("http://localhost:8000/book/showbooking",{ headers: {
            'Authorization':this.state.token
          }}).then(res=>{
              
                this.state.bookings=res.data.bookings;
                // console.log(this.state.bookings)
                this.setState({})
          })
          
          
    }
}

export default BookingDashboard;