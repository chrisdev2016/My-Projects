import React, {Component} from 'react';

class SearchResults extends Component{
    render(){

       let filteredlistings = this.props.listings

        return(
            <ul>
                {filteredlistings}
            </ul>
        )
    }
}
export default SearchResults;