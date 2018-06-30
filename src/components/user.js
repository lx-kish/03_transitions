import React, { Component } from 'react';
import UserTemplate from './user_template';

class User extends Component {
    state = {
        name:'James',
        lastname:'Bond',
        age:43,
        hobbies:['shooting','quickie'],
        spanish:false,
        message(){console.log('hey')},
        car:{brand:"Ford",model:"Focus"},
        mother:'Martha'
    }

    render() {
        return (
            <div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default User;