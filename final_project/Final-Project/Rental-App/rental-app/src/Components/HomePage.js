import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

class HomePage extends Component {
constructor(){
    super()
       
}

      




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
            <div className="homepage">
            
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand" >
                            <div className="logo logoDivision">
                        
                           
                         </div>
                        </div>
                        
                    </div>
                    <ul className="nav navbar-nav" style={{'width':'100%'}}>
                        <li ><Link to='/home'>Home</Link></li>
                        <li className="floatRight" style={ style }> <Link to='/Register'>register</Link> </li>
                        <li style={style2}> <p> welcome {currentUser} </p> </li>
                        
                        <li style={style2}> <button> <Link to='/myListings'> my account </Link> </button> </li>
                        <li style={style2}> <button onClick={()=>{this.props.logout()}}> log out </button> </li>
                        
                        <li className="floatRight" style={ style }> <Link to='/Login'>login</Link> </li>
                    </ul>
                </div>
            </nav>
            
        
            

            <div>
                <button><Link to='/CreateListing'>Looking to list</Link> </button>
                <button>  <Link to='/Listings'>Looking to rent </Link></button>
               
            </div>
            </div>
    
            
        )
    }
}

export default HomePage;