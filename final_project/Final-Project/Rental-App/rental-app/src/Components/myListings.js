
import React, { Component } from 'react';
import { Link } from 'react-router';

class MyListings extends Component {
    render() {

// let useremail = this.props.currentUser
// 	// axios.get('http://localhost:8080/:useremail')
// 	// 		.then((result) => {
// 	// 			console.log(result.data)

// 	// 			

// 	// 		})














        let useremail = this.props.currentUser
        console.log(useremail)

        let listings = this.props.listings



        let myListings = listings.filter((listing) => {
            return listing.formEmail = useremail;
        })

        console.log(myListings)

        let myListingsArray = myListings.map((item, i) => {
            return (
                 <div>
                <li>{item.formAddress} </li>
                <li><ul>{item.reviews.map((item) => {
                    <li>{item}</li>
                })}</ul> </li>
                    
                </div>
            )
        })



        return (
            <ul>
                {myListingsArray}
            </ul>
        )



    }

}

export default MyListings;


