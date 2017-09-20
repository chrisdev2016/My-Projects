
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(event) {
    var apiBaseUrl = "http://localhost:8080/";
    var self = this;
    var payload = {
      "email": this.state.username,
      "password": this.state.password
    }
    axios.post(apiBaseUrl + 'login', payload)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          console.log("Login successfull");
          browserHistory.push('/home')

          this.props.setCurrentUser(this.state.username)


        }
        else if (response.data.code == 204) {
          console.log("Username password do not match");
          alert("username password do not match")
        }
        else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="login-page">
        <div className="container-form-login">
          <div>
            <MuiThemeProvider>
              <div>
                <AppBar
                  title="Login"
                />
                <TextField
                  hintText="Enter your Username"
                  floatingLabelText="Username"
                  onChange={(event, newValue) => this.setState({ username: newValue })}
                />
                <br />
                <TextField
                  type="password"
                  hintText="Enter your Password"
                  floatingLabelText="Password"
                  onChange={(event, newValue) => this.setState({ password: newValue })}
                />
                <br />
                <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}
                />
              </div>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default Login;