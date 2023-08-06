import React, { Component } from 'react';
class Chatbox extends Component {
    state = {user:null  }
    render() { 
        return (
    <React.Fragment>
           {this.state.user!=null && 
<div class="outer_screen">




<section class="msger">
  <header class="msger-header">
    <div class="msger-header-title">
      <i class="fas fa-comment-alt"></i> CustomerCare Service
    </div>
    <div class="msger-header-options">
      <span><i class="fas fa-cog"></i></span>
    </div>
  </header>

  <main id="chat_messages"  class="msger-chat">
    <div class="msg left-msg">
      <div
       class="msg-img"
       style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/327/327779.svg)"}}
      ></div>

      <div   class="msg-bubble">

        <div class="msg-info">
          <div class="msg-info-name">CustomerCare</div>
          <div class="msg-info-time">12:45</div>
        </div>

        <div class="msg-text other-message">
          Hi, welcome to CustomerCare Service ! Please wait until our representative joins and initiates the conservation. 
        </div>
      </div>
    </div>

    <div class="self-message msg right-msg">
      <div         class="msg-img"
       >
       <img  width="100%" style={{borderRadius:'50%', height:"100%"}}/>
      </div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">{this.state.user.name}</div>
          <div class="msg-info-time">12:46</div>
        </div>

        <div class="msg-text ">
          Your messages!
        </div>
      </div>
    </div>
  </main>

  <form class="msger-inputarea">
    <input type="text" id="input_text" class="msger-input" placeholder="Enter your message..."/>
    <button type="submit" id="message_send" class="msger-send-btn">Send</button>
  </form>
</section>



{/* <!-- 



  <div class="inner_screen height_10">
      <div> <h3>Chat With CustomerCare Service</h1> </div>
  </div>
  <div id="chat_messages" class="inner_screen height_90 ">
   <div class="self-message"> <p> Self-message  </p></div>
   <div class="other-message"><p> Other-message   hi hello nameasets</p></div>
   
   
 
  </div>
  <div>
      <form>
          
          <div class="input-group mb-3">
            <input type="text" id="input_text" class="form-control" placeholder="Type Message Here......." aria-label="Recipient's username" aria-describedby="button-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button"  id="message_send">Send Message</button>
            </div>
          </div>
      </form>
  </div>
</div> --> */}
<script
src="https://code.jquery.com/jquery-3.4.1.min.js"
integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js"></script>
 </div>
     } </React.Fragment> );
    }
}
export default Chatbox;