import React, { Component } from "react";

class FormFour extends Component{
    render(){
        return(
            <div>
                <div className="form-group">
                    <h5>4. Schedule a call with our tech expert. Get a detailed tech consultation for free!</h5>
                    <p className="float-left"><span class="dot"></span>60 Min Meeting<span id="text">Select a Day</span> </p><br/>
                </div><br/>

                <div class="form-group">
                    <div className="row">
                        <div className="col-md-5">
                            <label for="exampleFormControlSelect1">Example select</label>&nbsp;&nbsp;
                            <select id="inputState" className="form-control option">
                                <option selected>EST </option>
                                <option>CST</option>
                                <option>MST</option>
                                <option>PST</option>
                            </select>
                        </div>
                        <div className="col-md-7">
                        <label for="exampleFormControlSelect1">Schedule Meeting-</label>&nbsp;&nbsp;
                            <select id="inputState" className="form-control options">
                                <option selected>06:00 AM - 07:00 AM</option>
                                <option>07:00 AM - 08:00 AM</option>
                                <option>08:00 AM - 09:00 AM</option>
                                <option>09:00 AM - 10:00 AM</option>
                                <option>10:00 AM - 11:00 AM</option>
                                <option>11:00 AM - 12:00 PM</option>
                                <option>12:00 PM - 01:00 PM</option>
                                <option>01:00 PM - 02:00 PM</option>
                                <option>02:00 PM - 03:00 PM</option>
                                <option>03:00 PM - 04:00 PM</option>
                                <option>04:00 PM - 05:00 PM</option>
                                <option>05:00 PM - 06:00 PM</option>
                                <option>06:00 PM - 07:00 PM</option>
                                <option>07:00 PM - 08:00 PM</option>
                                <option>08:00 PM - 09:00 PM</option>
                                <option>09:00 PM - 10:00 PM</option>
                                <option>10:00 PM - 11:00 PM</option>
                                <option>11:00 PM - 12:00 PM</option>
                            </select>
                        </div>
                    </div>                    
                </div>
                <button type="button" class="btn btn-info submit">Submit</button>
            </div>
        )
    }
};

export default FormFour;