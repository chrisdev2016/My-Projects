import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route,IndexRoute, browserHistory } from 'react-router';
import { Link } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './Components/HomePage.js'
import Listings from './Components/Listings.js';
import ListDetails from './Components/ListDetails.js';
import CreateListing from './Components/CreateListing.js';
import Register from './Components/Register.js';
import Login from './Components/Login.js';
import MyListings from './Components/myListings.js';
import Tenant from './Components/Tenant.js';
import Reviews from './Components/Reviews.js';
import InterestedUser from './Components/InterestedUser.js'



var listings = [{
            id:1,
            formAddress:" 477 Broadgreen street",
            formUnit: " ",
            formCity: "Pickering",
            formProvince:"ON",
            formPostalCode: "l1w3h6",
            formNumberOfBedrooms: 3,
            formNumberOfBathrooms: 2,
            formContactName: "Christine Thamo",
            formContactNumber:4166132915,
            formRentAmount: 1500,
            formEmail: "chris@hotmail.com",
            images:["https://photos.zillowstatic.com/p_h/ISi36m11r7xeb50000000000.jpg"],
            interests:[ ],
            reviews:["great place, but too faraway from highway 400 -anil", " no maintenance from owner-doreen" ],
            marker: {
   
                position: {
                lat: 43.659243,
                lng: -79.408531,
                },
                key: `Pickering`,
                defaultAnimation: 2,
                address: '477 broadview st'
            }
},{
            id:2,
            formAddress: "40 Bissland drive",
            formUnit: "2",
            formCity: "Ajax",
            formProvince: "ON",
            formPostalCode: "l1z0c9",
            formNumberOfBedrooms: 2,
            formNumberOfBathrooms: 1,
            formContactName:"Anita William",
            formContactNumber:9052398448,
            formRentAmount: 1000,
            formEmail: "gini@hotmail.com",
            images:["https://photos.zillowstatic.com/p_h/ISad80f1gpzln10000000000.jpg"],
              interests:[ ],
              reviews:[ ],
                marker: {
   position: {
       lat: 43.893888,
       lng: -79.018542,
     },
     key: `Ajax`,
     defaultAnimation: 2,
     address: '477 broadview st'
              
            }
},{
            id:3,
            formAddress: "100 Leeward Glenway",
            formUnit: 801,
            formCity:"north york",
            formProvince: "ON",
            formPostalCode: "m3c2z2",
            formNumberOfBedrooms: 1,
            formNumberOfBathrooms: 1,
            formContactName: "Lesly Lee",
            formContactNumber:4169161012 ,
            formRentAmount: 800,
            formEmail:"lesly@hotmail.com",
            images:["https://photos.zillowstatic.com/p_h/ISekcjbnpcsja70000000000.jpg"],
              interests:[ ],
              reviews:[ ],
                marker: {
   
             position: {
       lat: 43.711562,
       lng: -79.329379,
     },
     key: `North York`,
     defaultAnimation: 2,
     address: '477 broadview st'
            }
},{
            id:4,
            formAddress:" 477 Broadgreen street",
            formUnit: " ",
            formCity: "Pickering",
            formProvince:"ON",
            formPostalCode: "l1w3h6",
            formNumberOfBedrooms: 3,
            formNumberOfBathrooms: 2,
            formContactName: "Christine Thamo",
            formContactNumber:4166132915,
            formRentAmount: 1500,
            formEmail: "test@123.com",
            images:["https://photos.zillowstatic.com/p_h/ISijur22ikrdls1000000000.jpg"],
              interests:[ ],
              reviews:[ ],

      marker: {
   
                position: {
                lat: 43.805835,
                lng: -79.106468,
                },
                key: `kat`,
                defaultAnimation: 2,
                address: '477 broadview st'
            }
},{
            id:5,
            formAddress: "40 Bissland drive",
            formUnit: "2",
            formCity: "Ajax",
            formProvince: "ON",
            formPostalCode: "l1z0c9",
            formNumberOfBedrooms: 2,
            formNumberOfBathrooms: 1,
            formContactName:"Anita William",
            formContactNumber:9052398448,
            formRentAmount: 1000,
            formEmail: "gini@hotmail.com",
            images:["https://photos.zillowstatic.com/p_h/ISukvuykxfbl5w0000000000.jpg"],
              interests:[ ],
              reviews:[ ],
                marker: {
   
                position: {
                lat: 43.654953,
                lng: -79.414223,
                },
                key: `johg`,
                defaultAnimation: 2,
                address: '477 broadview st'
            }
},{
    id:6,
    formAddress: "100 Leeward Glenway",
            formUnit: 801,
            formCity:"north york",
            formProvince: "ON",
            formPostalCode: "m3c2z2",
            formNumberOfBedrooms: 1,
            formNumberOfBathrooms: 1,
            formContactName: "Lesly Lee",
            formContactNumber:4169161012 ,
            formRentAmount: 800,
            formEmail:"lesly@hotmail.com",
            images:["https://photos.zillowstatic.com/p_h/ISin9e1xxctvjl1000000000.jpg"],
            interests:[ ],
            reviews:[ ],
              marker: {
   
                position: {
                lat: 43.645553,
                lng: -79.395393,
                },
                key: `what`,
                defaultAnimation: 2,
                address: '477 broadview st'
            }
}]



ReactDOM.render(
    <Router history={browserHistory} >
        <Route path='/' component={App} listings={listings}>
         <IndexRoute component={HomePage} />
              <Route path='home' component={HomePage} />
             <Route path='listings' component={Listings} />
             <Route path='listings/:id' component ={ListDetails}/>
             <Route path='createListing' component={CreateListing}/>
             <Route path ='register' component={Register}/>
             <Route path ='login' component={Login}/>
             <Route path ='myListings' component = {MyListings} />
             <Route path = 'tenant/:id' component={Tenant}/>
             <Route path = 'listings/:id/reviews' component={Reviews}/>
             <Route path = 'interestedUser' component={InterestedUser}/>
             
            
        </Route>
    </Router>, document.getElementById('root'));

