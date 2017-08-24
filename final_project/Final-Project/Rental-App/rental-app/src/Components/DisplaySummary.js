import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router';







class DisplaySummary extends Component {
    constructor(props) {
        super(props)
    }
    render() {
         console.log('prop', this.props.selectedMarker)
        let imageArray = this.props.listings.map((item, i)=>{
            if(this.props.selectedMarker === item.id){
                return ( <div className="col-sm-6 adjustPadding activeDiv">
                
                    <Link to={'/listings/' + item.id}>
                        <article className="thumbnail">
                             <img className="img-responsive" src={item.images[0]}/>
                            <div className="caption">
                                
                                <p> <span>{item.formNumberOfBedrooms} bedroom</span> 
                                <span> {item.formNumberOfBathrooms} bathroom</span>
                                <span> ${item.formRentAmount} </span>
                                </p>
                                <p>{item.formAddress} {item.formUnit} {item.formCity}</p>

                                
                            </div>
                        </article>
                    </Link>
                
            </div>
                )
            } else{
                return (  
            <div className="col-sm-6 adjustPadding">
                
                    <Link to={'/listings/' + item.id}>
                        <article className="thumbnail">
                             <img className="img-responsive" src={item.images[0]}/>
                            <div className="caption">
                                
                                <p> <span>{item.formNumberOfBedrooms} bedroom</span> 
                                <span> {item.formNumberOfBathrooms} bathroom</span>
                                <span> ${item.formRentAmount} </span>
                                </p>
                                <p>{item.formAddress} {item.formUnit} {item.formCity}</p>

                                
                            </div>
                        </article>
                    </Link>
                
            </div>
        )
            }
            })



return(
    <div className="row">
        {imageArray}
    </div>
)

      

        // <img src={item.images[0]}/>





    }

}

export default DisplaySummary;

