import React, { Component } from "react";

class FormOne extends Component{
    render(){
        return(
            <div>
                <h5>1. Tell us about your company</h5>
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Your Name *"/>
                        {/* <small className="form-text text-muted">Name is Required.</small> */}
                    </div>
                    <div className="row form-group">
                        <div className="col">
                        <input type="email" className="form-control" placeholder="Your Email *" />
                        {/* <small className="form-text text-muted">Please enter a valid email address.</small> */}
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Your Phone Number" />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Company Website"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="What's Your Company's Biggest Challenge Today?"/>
                    </div>
                </form>
            </div>
        )
    }
}
export default FormOne;