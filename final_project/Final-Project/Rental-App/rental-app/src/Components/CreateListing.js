

import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';
import '../App.css';

import '../Form.css';


class ReactFormLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
        )
    }
}



class CreateListing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            address: '',
            unit: '',
            city: '',
            province: '',
            postal_code: '',
            number_of_bedrooms: '',
            number_of_bathrooms: '',
            rent_amount: '',
            contact_name: '',
            contact_number: '',
            email: ''


        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(e) {
        e.preventDefault;

        this.setState({

            [e.target.name]: e.target.value


        })

    };


    



    handleSubmit = (e) => {
        e.preventDefault();


        let formData = {

            formAddress: this.state.address,
            formUnit: this.state.unit,
            formCity: this.state.unit,
            formProvince: this.state.province,
            formPostalCode: this.state.postal_code,
            formNumberOfBedrooms: this.state.number_of_bedrooms,
            formNumberOfBathrooms: this.state.number_of_bathrooms,
            formContactName: this.state.contact_name,
            formContactNumber: this.state.contact_number,
            formRentAmount: this.state.rent_amount,
            formEmail: this.state.email



        }


        if (formData.formAddress.length < 1 || formData.formCity.length < 1
            || formData.formProvince.length < 1 || formData.formPostalCode.length < 1 || formData.formContactName.length < 1 || formData.formContactNumber.length < 1) {
            return false;
        }



        var apiBaseUrl = "http://localhost:8080";

        axios.post(apiBaseUrl + '/createListing', formData)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {



                    console.log("creation successful");
                      browserHistory.push('/home')
                      alert("success")

                }
            })
            .catch(function (error) {
                console.log(error);
                alert ("error")

            });






          this.setState({
              address:'',
              unit:'',
              city:'',
              province: '',
              postal_code:'',
              number_of_bedrooms:'',
              number_of_bathrooms:'',
              rent_amount:'',
              contact_name:'',
              contact_number:'',
              email:'',


          });
    };

    render() {

       var UserloggedIn =this.props.isUserLoggedIn

        var style = UserloggedIn ? {
           "display": 'none'
        } : null;

        console.log(style)

 var style2 = UserloggedIn ?
           null
        :{"display": 'none'} ;

      var currentUser = this.props.currentUser;


        return (

           <div>
                       
         <div className="container-form">

            <form id="createListing" className='react-form' style={{ 'width': '75%','height':'100%' }}  onSubmit={this.handleSubmit}>
               
               
                <h1>Tell us about your property</h1>


                
                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formAddress' title='Address:' />

                    <input id='formAddress' className='form-input' name='address' type='text' required onChange={this.handleChange} value={this.state.address} />
                </fieldset>

                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formUnit' title='Unit#:' />

                    <input id='formUnit' className='form-input' name='unit' type='text' required onChange={this.handleChange} value={this.state.unit} />
                </fieldset>

                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formCity' title='City:' />

                    <input id='formCity' className='form-input' name='city' type='text' required onChange={this.handleChange} value={this.state.city} />
                </fieldset>

                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formProvince' title='Province:' />

                    <input id='formProvince' className='form-input' name='province' type='text' required onChange={this.handleChange} value={this.state.province} />
                </fieldset>

                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formPostalCode' title='postal code:' />

                    <input id='formPostalCode' className='form-input' name='postal_code' type='text' required onChange={this.handleChange} value={this.state.postal_code} />
                </fieldset>

                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formNumberOfBedrooms' title='number of bedrooms:' />

                    <input id='formNumberOfBedrooms' className='form-input' name='number_of_bedrooms' type='text' required onChange={this.handleChange} value={this.state.number_of_bedrooms} />
                </fieldset>


                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formNumberOfBathrooms' title='number of bathrooms:' />

                    <input id='formNumberOfBathrooms' className='form-input' name='number_of_bathrooms' type='text' required onChange={this.handleChange} value={this.state.number_of_bathrooms} />
                </fieldset>

                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formRentAmount' title='Rent(cad):' />

                    <input id='formRentAmount' className='form-input' name='rent_amount' type='text' required onChange={this.handleChange} value={this.state.rent_amount} />
                </fieldset>

                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formContactName' title='contact name:' />

                    <input id='formContactName' className='form-input' name='contact_name' type='text' required onChange={this.handleChange} value={this.state.contact_name} />
                </fieldset>


                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formContactNumber' title='contact number:' />

                    <input id='formContactNumber' className='form-input' name='contact_number' type='tel' required onChange={this.handleChange} value={this.state.contact_number} />
                </fieldset>

                <fieldset className='form-group'>
                    <ReactFormLabel htmlFor='formEmail' title='Email:' />

                    <input id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
                </fieldset>

                

                <div className='form-group'>
                    <input id='formButton' className='btn' type='submit' placeholder='Save' />
                </div>
                

            </form>
            </div>
            
            </div>
        
        )
    }
};
export default CreateListing;