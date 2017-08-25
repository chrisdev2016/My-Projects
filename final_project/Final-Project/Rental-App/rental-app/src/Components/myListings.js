
import React, { Component } from 'react';
import { Link } from 'react-router';

class MyListings extends Component {
    render() {
















        let useremail = this.props.currentUser
        console.log(useremail)

        let listings = this.props.listings



        let myListings = listings.filter((listing) => {
            return listing.formEmail == useremail;
        })

        console.log(myListings)

        let myListingsArray = myListings.map((item, i) => {
            return (


                           <tr>
                                <td> {item.formAddress}  </td>
                                <td> <Link to='/interestedUser'>{item.interests}</Link> </td>
                                
                            </tr>

                

            )
        })



        

        var UserloggedIn = this.props.isUserLoggedIn

        var style = UserloggedIn ? {
            "display": 'none'
        } : null;



        var style2 = UserloggedIn ?
            null : { "display": 'none' };

        var currentUser = this.props.currentUser;
        let myName = currentUser.first_name;


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
                            <ul className="nav navbar-nav navbar-right" style={{ 'width': '100%' }}>
                                <li className="floatRight" ><Link to='/home'>Home</Link></li>
                                <li className="floatRight" style={style}> <Link to='/Register'>register</Link> </li>


                                <li className="dropdown floatRight" style={style2}>
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">My Account<span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#"><Link to='/myListings'>my listings</Link></a></li>
                                        <li> <a onClick={() => { this.props.logout() }}>  log out </a></li>

                                    </ul>
                                </li>
                                <li className="floatRight" style={style}> <Link to='/Login'>login</Link> </li>
                            </ul>
                        </div>
                    </div>
                </nav>


                <div className="panel panel-default">

                    <div className="panel-heading">

                        My Listings

                </div>


                    <table className="table">
                        <thead>
                            <tr>
                                <th>Address </th>
                                
                                <th>Interested people</th>
                            </tr>
                        </thead>
                        <tbody>
                         {myListingsArray  }
                         </tbody>
                    </table>
                </div>


                </div>





                )



    }

}

export default MyListings;


