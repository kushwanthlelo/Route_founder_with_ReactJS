import React, { Component } from 'react';
import axios from 'axios'
class PathBlock extends Component {
    state = this.props.path
  
    render() { 
        return ( 
        
        
         <form id={this.props.path._id} onSubmit={this.updateClicked} >
         <span style={{visibility:'hidden'}} id={"message_"+this.props.path._id}>Updated Successful</span>
 
         <table class="card_list">
          <tr><td class="thick">Path_id</td> <td class="thin"> <input type="text" name="id" value={this.props.path._id} readOnly/></td></tr>  
          <tr><td class="thick">Source:</td>             <td class="thin">  <input type='text' name='source' readOnly value={this.props.path.source}     /> </td></tr>
          <tr><td class="thick">Destination:</td>        <td class="thin">  <input type='text' name='destination' readOnly  value={this.props.path.destination}  /> </td></tr>
          <tr><td class="thick">Cost:</td> 	            <td class="thin">   <input type='number' name='cost' required placeholder={this.props.path.cost}  />  </td></tr>
          <tr><td class="thick">Distance:</td>           <td class="thin">  <input type='number' name='distance' required placeholder={this.props.path.distance}  /> </td></tr> 
          <tr><td class="thick">Start Time:</td>         <td class="thin">  <input   name='start_time' required type="text"  placeholder={this.props.path.start_time} / >  </td></tr>
          <tr><td class="thick">End Time:</td>           <td class="thin">   <input   name='end_time' required type="text"  placeholder={this.props.path.end_time}  /></td></tr>
          <tr><td class="thin" colspan="1">
            <button  class="btn btn-info" type="submit">Update Path</button>
            </td> 
          <td class="thin"><a href="/dashboard/deletePath/<%=path.id%>">
            <button id="delete_btn" onClick={this.deleteclicked} value={this.props.path._id} class='btn btn-danger'>  Delete Path </button>
          </a> </td></tr>
        </table>
        
        </form> );
    }

    deleteclicked=(e)=>{
        document.getElementById(e.target.value).setAttribute('style','visibility:hidden');
        e.preventDefault();
        axios.post("http://localhost:8000/dashboard/deletepath",{id:e.target.value}).then(res=>{
        })

       
      }


  refreshPage() {
    // window.location.reload(false);
  }

     updateClicked=(e)=>{
       e.preventDefault();
      //  console.log(e.target.user_id.value) 
       document.getElementById("message_"+e.target.id.value).setAttribute('style','visibility:visible');
       
       axios.post("http://localhost:8000/dashboard/updatepath",{id:e.target.id.value,source:e.target.source.value,destination:e.target.destination.value,cost:e.target.cost.value,distance:e.target.distance.value,start_time:e.target.start_time.value,end_time:e.target.end_time.value}).then(res=>{
        

      })
    }


    
}
 
export default PathBlock;