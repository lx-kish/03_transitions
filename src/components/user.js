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
        mother:'Martha',
        color:'red'
    }

    changeColor(){
        // this.setState({
        //     color:'blue'
        // })
        this.refs.myColor.style.color = 'blue'
    }

    render() {
        const style = {
            color: this.state.color
        }
        return (
            <div>
                <h4 style={style} ref="myColor">{this.state.mother}</h4>
                <div onClick={()=>this.changeColor()}>Change color</div>
                <UserTemplate {...this.state}/>
            </div>
        );
    }
}

export default User;