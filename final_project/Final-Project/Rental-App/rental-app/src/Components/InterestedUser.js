import React, { Component } from 'react';
import { Link } from 'react-router';



class InterestedUser extends Component {
    render() {

        // send a get request to api server with the useremail address, find matching one
        return (
            <div className="w3-half w3-grey-blue w3-container" style={{'height':'100%'}} >
                <div className="w3-padding-64 w3-center">
                    <h1>Chris Thamo</h1>
                    <img src="https://www.watsonmartin.com/wp-content/uploads/2016/03/default-profile-picture.jpg " 
                    className="w3-margin w3-circle" alt="Person" style={{"width":"50%"}} />
                    <div className="w3-left-align w3-padding-large">
                         <h4><strong>Contact details</strong></h4>
                    <div class="w3-row w3-large">
                        <div class="w3-col s6">
                            
                            <p><i className="fa fa-phone"></i> 4166132915</p>
                            <p><i className="fa fa-envelope"></i> chris@hotmail.com </p>
                            <p><i className="fa fa-linkedin-square"> </i>  <a href="https://www.linkedin.com/in/christine-thamotharam-20b069136/">view my linkedin profile</a> </p>
                            <p><i className="fa fa-facebook-official"> </i> <a href="https://www.linkedin.com/in/christine-thamotharam-20b069136/">view my facebook profile</a> </p>
                        </div>
                     </div>
                    
                    </div>
                </div>
            </div>
        )
    }
}

export default InterestedUser