import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class ListDetails extends Component {
    constructor(props) {
        super(props)
       
    }

    render() {
        let listings = this.props.listings;
        let iD = this.props.routeParams.id;

        let selectedListing = listings.find((listing) => {
            return listing.id === parseInt(iD);

        })

               var UserloggedIn =this.props.isUserLoggedIn

        var style = UserloggedIn ? {
           "display": 'none'
        } : null;

        console.log(style)

 var style2 = UserloggedIn ?
           null
        :{"display": 'none'} ;

      var currentUser = this.props.currentUser;



        console.log(selectedListing)

        return (
         <div >

            <nav className="navbar navbar-default" style={{'background-color':'blue'}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand " >
                            <div className="logo logoDivision"> </div>
                        
                               <p className="company">RentMe</p>                          
                        </div>
                        
                         </div>
                         <div>
                    <ul className="nav navbar-nav" style={{'width':'100%'}}>
                        <li  className="floatRight" ><Link to='/home'>Home</Link></li>
                        <li className="floatRight" style={ style }> <Link to='/Register'>register</Link> </li>
                        
                        
                        <li className="floatRight" style={style2}> <a> welcome </a> </li>
                         <li  className="floatRight" style={style2}> <a onClick={()=>{this.props.logout()}}>  log out </a></li>
                        
                        <li className="floatRight" style={ style }> <Link to='/Login'>login</Link> </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className="col-sm-6"><img className="img-responsive" src={selectedListing.images[0]} alt="" /></div>
            <div className="col-sm-6">
                 <h4><strong>Property Details</strong></h4>
                    <div className="w3-row w3-large">
                        <div className="w3-col s12">
                            <p><i className="fa fa-envelope"></i> {selectedListing.formAddress} {selectedListing.formUnit}
                                {selectedListing.formCity}  {selectedListing.formProvince}  {selectedListing.formPostalCode}</p>
                            <p><i className="fa fa-fw fa-bath"></i> {selectedListing.formNumberOfBedrooms}</p>
                            <p><i className="fa fa-fw fa-bed"></i> {selectedListing.formNumberOfBedrooms} </p>
                        </div>
                    </div>

                    <br/>
                    
                    

                    <h4><strong>Contact details</strong></h4>
                    <div class="w3-row w3-large">
                        <div class="w3-col s6">
                            <p><i class="fa fa-user-o"></i>{selectedListing.formContactName} </p>
                            <p><i className="fa fa-phone"></i> {selectedListing.formContactNumber}</p>
                            <p><i className="fa fa-envelope"></i> {selectedListing.formEmail} </p>
                        </div>
                     </div>
                     

                        
                        <button className="showInterestButton" disabled={this.props.isUserLoggedIn==false ||this.props.interested==true}  
                        onClick={() => { this.props.showInterest(selectedListing.id) }} >show interest</button>
                        
                        <div>
                        <p> {this.props.isUserLoggedIn ? null : 'please login to post interest on this property'}</p>
                        </div>
                     
                        <div>
                        <p> {this.props.interested ? 'You posted an interest on this property':null}</p>
                        </div>
                    

                    
            
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