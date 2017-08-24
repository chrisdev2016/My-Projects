import React, { Component } from 'react';
import { Link } from 'react-router';
import '../ListDetails.css';

class ListDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let listings = this.props.listings;
        let iD = this.props.routeParams.id;

        let selectedListing = listings.find((listing) => {
            return listing.id ===parseInt(iD) ;

        })

        // var reviews = selectedListing.reviews.map((item) => {
        //     <li>item</li>
        // })

        // console.log(reviews)

        console.log(selectedListing)

        return (
     


                                                        
       <div className="thumbnail">

        <div>
               <img className="image-responsive center-block"  src={selectedListing.images[0]} alt=""/>
        </div>
        <div className="text-center caption">
         <p>address: {selectedListing.formAddress} {selectedListing.formUnit}
         {selectedListing.formCity}
         {selectedListing.formProvince}
          {selectedListing.formPostalCode}
         </p>
         <p> number of bedrooms: {selectedListing.formNumberOfBedrooms}</p>
         <p> number of bathrooms:{selectedListing.formNumberOfBathrooms}</p>
         <p> rent: {selectedListing.formRentAmount}</p>
          <p> contact details:{selectedListing.formContactName}
          {selectedListing.formContactNumber}
            {selectedListing.formEmail}
          </p>
         <p>{selectedListing.formRentAmount}</p>
            <p>{selectedListing.interests}</p>
               {/*<ul>{reviews}</ul>    */}
                  
                {/*<Link to='/reviews'>Reviews </Link>*/}
                  
                
      
              <button onClick={()=>{this.props.showInterest(selectedListing.id)}} >show interest</button>
    </div>
    </div>
    





        )
    }
}

export default ListDetails;










//      <div className="w3-container" id="apartment">
//                 <h2 className="w3-text-green">The Apartment</h2>
//                 <div className="w3-display-container mySlides">
//                     <img src={selectedListing.images[0]} style="width:100%;margin-bottom:-6px"/>
                       
//              </div>

             
//   <div class="w3-container">
//     <h4><strong>The space</strong></h4>
//     <div class="w3-row w3-large">
//       <div class="w3-col s6">
        
//         <p><i class="fa fa-fw fa-bath"></i> Bathrooms: 2</p>
//         <p><i class="fa fa-fw fa-bed"></i> Bedrooms: 1</p>
//       </div>
      
//     </div>
//     <hr>