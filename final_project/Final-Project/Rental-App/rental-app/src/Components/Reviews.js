import React, {Component} from 'react'; 

class Reviews extends Component{
    render(){
       let iD = this.props.routeParams.id;
       let  listings = this.props.allListings; 

        let selectedListing = listings.find((listing)=>{
         return listing.id = iD;
        })

        return(
            <div>
            {selectedListing.reviews}
            
            </div>
        )
    }
}
export default Reviews;