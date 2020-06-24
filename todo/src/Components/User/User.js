import React, { Component } from 'react';
import './User.css';
import axios from 'axios';

class User extends Component{

    state={
        username: ' '
    };

    postDataHandler = () => {
        const data = {
            username: this.state.username,
        };
        console.log(data)
        axios.post('http://localhost:2701/users/add', data)
            .then(response => {
                console.log(response);
            });
    }


    render(){
        return(
            <div className="NewPost">
                <h1>Create Your Account</h1>
                <label>Username</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({username: event.target.value})} />
                <button onClick={this.postDataHandler} className="btn btn-primary">Add User</button>
            </div>
        )
    }
}

export default User;