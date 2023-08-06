import React, { Component } from 'react';
// import "../componentsCss/all_flight_paths.css"
import 'bootstrap/dist/css/bootstrap.min.css';

class AddPath  extends Component {
    state = {  }
    render() { 
        return ( <div style={{display: "flex" ,flexDirection:"row" ,justifyContent:"center"}}>
    
        <div style={{width:"60vw"}}>
            <h1>Add New Path +</h1>
            <form onSubmit={(e)=>{
                this.props.callback(e);
                e.preventDefault()
                var allinputs=document.getElementsByClassName("clean");
                for(let i=0;i<allinputs.length;i++)
                {
                    allinputs[i].value=""
                   
                }
                document.getElementById("pathadded_flash").style.visibility='visible';
            }} > 
    
                <div class="form-group" >
                    <label for="formGroupExampleInput">Source Name</label>
                    <input name='source' type="text" class="form-control clean" onChange={this.onchange} id="formGroupExampleInput" placeholder="Source Name"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Destination Name</label>
                    <input name='destination' type="text" class="form-control clean" onChange={this.onchange}  id="formGroupExampleInput" placeholder="Destination Name"/>
                </div>
    
                <div class="form-group">
                    <label for="formGroupExampleInput">Cost:</label>
                    <input name='cost' type="number" class="form-control clean" onChange={this.onchange}  id="formGroupExampleInput" placeholder="Journey Cost"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Distance:</label>
                    <input name='distance' type="number" class="form-control clean" onChange={this.onchange} id="formGroupExampleInput" placeholder="Distance between Source and Destination"/>
                </div>
    
                <div class="form-group">
                    <label for="formGroupExampleInput">Start Time:</label>
                    <input name='start_time' type="text" class="form-control clean" onChange={this.onchange}  id="formGroupExampleInput" placeholder="Start Time of Journey"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">end_time:</label>
                    <input name='end_time' type="text" class="form-control clean" onChange={this.onchange} id="formGroupExampleInput" placeholder="End Time of Journey"/>
                </div>
                <button class="btn-warning"  type="submit">Submit</button><h3 id="pathadded_flash" style={{visibility:'hidden'}}>Path Added</h3>
            </form>
    
        </div>
    
    
    
    </div> );
    }
    onchange=()=>{
        document.getElementById("pathadded_flash").style.visibility='hidden';
    }
}
 
export default AddPath;