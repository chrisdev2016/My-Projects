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
import InterestedUser from './Components/InterestedUser.js';
import SearchResults from './Components/SearchResults.js';
import axios from 'axios';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {


      currentUser: '',

      isUserLoggedIn: false,

      listings: this.props.route.listings,

      input: '',

      interested: false


    }

    this.showInterest = this.showInterest.bind(this)

    this.setCurrentUser = this.setCurrentUser.bind(this)
    this.logout = this.logout.bind(this)
    this.search = this.search.bind(this)



  }




  logout() {

    console.log('LOGOUT RAN!');
    this.setState({
      currentUser: '',
      isUserLoggedIn: false,

    })
    browserHistory.push('/home')

  }

  setCurrentUser(username) {

    this.setState({
      isUserLoggedIn: true,
      currentUser: username
    }, () => {

    })

  }

  search(text) {


    alert(text)

    var filteredListings = this.state.listings.filter(listing => {
      return listing.formCity.toLowerCase() == text.toLowerCase()
    })



    this.setState({
      listings: filteredListings
    })



    if (!filteredListings) {
      alert('no listings found')
    }

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
      listings: listings,
      interested: true
    })



  }

  render() {

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
            CreateListing: this.CreateListing,
            search: this.search,
            input: this.state.input,
            interested: this.state.interested

          })}

      </div>
    );
  }
}

export default App;
