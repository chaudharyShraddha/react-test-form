import React, { Component } from "react";

class FormThree extends Component{
    render(){
        return(
            <div>
                <h5>3. What services are you interested in? </h5>
                <form>
                    <div className="row">
                        <div className="col-md-4 form1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                Web or Mobile Apps
                                Development
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 form1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                Hire Dedicated
                                Developers
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 form1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                AI/MLDevelopment Services
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 form1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                Custom Software
                                Development
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 form1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                Software Testing
                                and QA
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4 form1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                <label class="form-check-label" for="defaultCheck1">
                                API Development &
                                Integration
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
};

export default FormThree;