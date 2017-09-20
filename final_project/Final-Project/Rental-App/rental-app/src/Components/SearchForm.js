import React, { Component } from 'react';

class SearchForm extends Component {
    render() {

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">RentMe</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>
                    </ul>
                    <form className="navbar-form navbar-left">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-btn">
                                <button className="btn  btn-default" type="submit">
                                     <i className="glyphicon glyphicon-search"></i>
                                     </button>
                                
                            </div>
                        </div>

                    </form>
                </div>
            </nav>

        )
    }
}
export default SearchForm;

