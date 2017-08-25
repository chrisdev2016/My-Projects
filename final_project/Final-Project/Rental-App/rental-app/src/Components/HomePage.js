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
      let myName = currentUser.first_name;
      console.log
     
        return (
            <div className="homepage">
            
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand " >
                            <div className="logo logoDivision"> </div>
                        
                               <p className="company">RentMe</p>                          
                        </div>
                        
                         </div>
                         <div>
                    <ul className="nav navbar-nav navbar-right" style={{'width':'100%'}}>
                        <li  className="floatRight" ><Link to='/home'>Home</Link></li>
                        <li className="floatRight" style={ style }> <Link to='/Register'>register</Link> </li>
                        

        <li className="dropdown floatRight" style={style2}>
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#"><Link to='/myListings'>my listings</Link></a></li>
            <li> <a  onClick={()=>{this.props.logout()}}>  log out </a></li>
            
          </ul>
        </li>

                        
                    
                        
                        
                        <li className="floatRight" style={ style }> <Link to='/Login'>login</Link> </li>
                    </ul>
                    </div>
                </div>
            </nav>
            
        
            

              <div className="inner">
                    <h1 className='home-search-inner'> Find your way home</h1>
                    <div className="home-search-bar">
                        <button className="inputBtnSearch"><Link to='/CreateListing'> <strong>Looking to list </strong></Link> </button>
                        <button className="inputBtnSearch" ><Link to='/Listings'> <strong>BROWSE LISTINGS </strong></Link></button>
                   </div>
                </div>
            </div>
    
            
        )
    }
}

export default HomePage;