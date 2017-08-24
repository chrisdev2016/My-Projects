import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import DisplaySummary from './DisplaySummary.js';
import GettingStartedGoogleMap from './Maps.js'

import { Link } from 'react-router';

class Listings extends Component {
    constructor(){
        super()
       this.state= {
           selectedListing:null
       } 

       this.setSelectedMarker= this.setSelectedMarker.bind(this)   
        
    }

    setSelectedMarker(id){
        this.setState({
            selectedListing:id
        })
    }

    render() {
        var UserloggedIn = this.props.isUserLoggedIn

        var style = UserloggedIn ? {
            "display": 'none'
        } : null;
        console.log(style)
        var currentUser = this.props.currentUser;



        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">RentMe</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li style={style}> <Link to='/Register'>register</Link> </li>
                            <li> {currentUser} </li>
                            <li style={style}> <Link to='/Login'>login</Link> </li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-7" style={{height: '500px'}}> 
                        <GettingStartedGoogleMap  setSelectedMarker={this.setSelectedMarker} containerElement={
                            <div style={{ height: `100%` }} />
                        }
                        mapElement={
                            <div style={{ height: `100%` }} />
                        }
                    
                        listings={this.props.listings}
                        /> 
                    </div>

                    <div className="col-md-5"><DisplaySummary selectedMarker={this.state.selectedListing} listings={this.props.listings} /></div>
                </div>

            </div>
        )
    }
}

export default Listings;