import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login';
 
class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
    this.handleClick = this.handleClick.bind(this)

  }

handleClick(e){
    var apiBaseUrl = "http://localhost:8080";
    // console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
    // //To be done:check for empty values before hitting submit
    var self = this;
    var payload={
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password
     }

    axios.post(apiBaseUrl+'/register', payload)
   .then( (response)=>{   
       console.log(response) 
     if(response.status == 200){
        // this.props.setCurrentUser(this.state.first_name)
    
        // let currentUser = this.props.currentUser
        // console.log(currentUser)


       console.log("registration successfull");
       browserHistory.push('/login')
 
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }




  
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
            <TextField
             hintText="Enter your LinkedIn profile"
             floatingLabelText="LinkedIn profile"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleClick }/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};

export default Register;