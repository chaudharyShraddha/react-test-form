import React, { Component } from "react";

class FormTwo extends Component{
    render(){
        
        return(
            <div>
                <h5>2. What are you looking to work on ?</h5>
                <form>
                <div className="form-group">
                    <textarea id="textarea" className="form-control" placeholder="Describe Your Project Briefly."></textarea>
                     {/* <small className="form-text text-muted">Project Description is Required.</small> */}
                </div>
                <div className="form-group" id="budget">
                    <label class="head">What's Your Budget?</label>
                    <input   
                    data-min="5000"       
                    data-role="doubleslider"
                    data-min="5000"
                    data-max="500000"  
                    data-hint-always="true" 
                    data-value-min="72423"
                    data-value-max="377290" />
                    <label className="float-left">$5000</label>
                    <label className="float-right">$500000</label>
                </div>
                <div className="form-group" id="upload">
                    <label className="float-left">
                        <i class="fa fa-upload" aria-hidden="true"></i>&nbsp;&nbsp;  
                        Drag or Browse Your Project Brief.
                    </label>
                    <div className="upload-btn-wrapper float-right">
                        <button className="btn btn-info">UPLOAD</button>
                        <input type="file" name="myfile" />
                    </div>
                </div>
                <br/>
                </form>
            </div>
        )
    }
};

export default FormTwo;