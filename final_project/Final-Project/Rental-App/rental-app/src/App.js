import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { browserHistory } from 'react-router';

import HomePage from './Components/HomePage.js';
import CreateListing from './Components/CreateListing.js';
import Listings from './Components/Listings.js';
import Register from './Components/Register.js';
import Login from './Components/Login.js';
import Reviews from './Components/Reviews.js';
import MyListings from './Components/myListings.js';
import Tenant from './Components/Tenant.js';
import WriteReview from './Components/WriteReview.js';
import UploadScreen from './Components/UploadScreen.js';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {


      currentUser: '',

      isUserLoggedIn: false,

      listings: this.props.route.listings
    }

    this.showInterest = this.showInterest.bind(this)
    // this.CreateListing = this.CreateListing.bind(this)
    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logout = this.logout.bind(this)


  }

  logout() {
    debugger;
    console.log('LOGOUT RAN!');
    this.setState({
      currentUser: '',
      isUserLoggedIn: false
    })
    browserHistory.push('/home')

  }

  setCurrentUser(username) {
    console.log('hi')
    this.setState({
      isUserLoggedIn: true,
      currentUser: username
    }, () => {

    })

  }


    componentDidUpdate() {

        localStorage.setItem("LogInStatus", JSON.stringify(this.state.isUserLoggedIn))
        localStorage.setItem("UserLoggedIn", JSON.stringify(this.state.currentUser))



    }


  componentWillMount() {
 
        let updatedLoginStatus = localStorage.getItem('LogInStatus')
        let updatedUserLoggedIn = localStorage.getItem('UserLoggedIn')



        this.setState({
            isUserLoggedIn: JSON.parse(updatedLoginStatus) ? JSON.parse(updatedLoginStatus) : this.state.isUserLoggedIn,
            currentUser: JSON.parse(updatedUserLoggedIn) ? JSON.parse(updatedUserLoggedIn) : this.state.currentUser
        })


  }

  showInterest(id) {
    const that = this;
    let listings = this.state.listings.map((listing) => {
      if (listing.id == id && that.state.isUserLoggedIn) {
        listing.interests.push(that.state.currentUser)
      }
      return listing;
    })

    console.log(listings)
    this.setState({
      listings: listings
    })


  }






  render() {

    let listings = this.state.listings

    console.log(this.state)



    return (
      <div className="App">
            

        {React.cloneElement(
          this.props.children, {
            allListings: this.state.listings,
            listings: this.state.listings,
            setCurrentUser: this.setCurrentUser,
            logout: this.logout,
            currentUser: this.state.currentUser,
            isUserLoggedIn: this.state.isUserLoggedIn,
            showInterest: this.showInterest,
            CreateListing: this.CreateListing
          })}

      </div>
    );
  }
}

export default App;
