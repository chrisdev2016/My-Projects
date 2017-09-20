import React, { Component } from 'react';

class Tenant extends Component {
    render() {

        let tenant = {
            user_id: 4,
            name: "ab",
            email: "ab@hotmail.com",
            tel: 4165435678,
            listings: [],
            linkedIn: 'url',
            reviews_from_previous_owners: []
        }
        let foundUser = this.props.users.filter(el=>{
            return el.name === this.props.routeParams.id
        })
        console.log(foundUser)
        return (
            <ul>
                <li>{foundUser[0].name}</li>
                <li>{tenant.name}</li>
                <li>{tenant.email}</li>
                <li>{tenant.tel}</li>
                <li>{tenant.linkedIn}</li>
                <li>{tenant.reviews_from_previous_owners}</li>

            </ul>
        )
    }
}

export default Tenant;
