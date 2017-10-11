import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import DisplaySummary from './DisplaySummary.js';
import GettingStartedGoogleMap from './Maps.js';
import '../App.css';


import { Link } from 'react-router';

class Listings extends Component {
    constructor() {
        super()
        this.state = {
            selectedListing: null
        }

        this.setSelectedMarker = this.setSelectedMarker.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      

    }

     onSubmit(e){
         e.preventDefault
         let text = this.refs.text.value
         if(!text){
             alert('please type a search value');
         }
         this.props.search(text);
         this.refs.text.value = '';
         
     }


    setSelectedMarker(id) {
        this.setState({
            selectedListing: id
        })
    }

    render() {
        console.log('state ', this.state.selectedListing)
        var UserloggedIn = this.props.isUserLoggedIn

        var style = UserloggedIn ? {
            "display": 'none'
        } : null;

        var style2 = UserloggedIn ?
            null
            : { "display": 'none' };
        // console.log(style)
        var currentUser = this.props.currentUser;



        return (
            <div>

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
                        <div className="navbar-header">
                            <div className="logo logoDivision"> </div>
                        </div>
                        {/*
    <!-- Collect the nav links, forms, and other content for toggling -->*/}
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">



                            <p className="company">RentMe</p>

                            <form className="navbar-form navbar-right" onSubmit={this.onSubmit} >
                                <div className="form-group">
                                    <input type="text" className="form-control"  ref="text" placeholder="Search by city" />
                                </div>
                                <button type="submit" className="btn btn-default">Submit</button>
                            </form>

                            <ul className="nav navbar-nav navbar-right">
                                <li > <Link to='/home'>Home </Link> </li>
                                <li className="floatRight" style={style}> <Link to='/Register'>register</Link> </li>
                                {/*<li className="floatRight" style={style2}> <a> welcome </a> </li>*/}
                                <li className="floatRight" style={style}> <Link to='/Login'>login</Link> </li>
                                <li className="dropdown floatRight" style={style2}>
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account<span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#"><Link to='/myListings'>my listings</Link></a></li>
                                        <li> <a onClick={() => { this.props.logout() }}>  log out </a></li>

                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>





                <div className="row">
                    <div className="col-md-7" style={{ height: '1000px' }}>
                        <GettingStartedGoogleMap
                            setSelectedMarker={this.setSelectedMarker}
                            containerElement={<div style={{ height: `100%` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                            listings={this.props.listings}
                            setSelectedMarker={this.setSelectedMarker}
                        />
                    </div>

                    <div className="col-md-5"><DisplaySummary selectedMarker={this.state.selectedListing} listings={this.props.listings} />
                    </div>
                </div>

            </div>
        )
    }
}

export default Listings;