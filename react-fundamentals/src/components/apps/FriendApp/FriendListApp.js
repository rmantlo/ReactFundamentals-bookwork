import React, { Component } from 'react';
import Friend from './Friend';

const API_BASE = "http://rest.learncode.academy/api/efa/friends";

class FriendListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
        };
    }

    didComponentMount() {
        fetch(API_BASE)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                this.setState({ friends: response })
            })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        var name = this.refs.name.value;
        var age = this.refs.age.value;
        var friendsTemp = this.state.friends;

        fetch(API_BASE, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name:name, age:age })
        })
            .then(res => res.json())
            .then(response => {
                friendsTemp.push(response)
                this.setState({ friends: friendsTemp });
                this.refs.name.value = "";
                this.refs.age.value = "";
                console.log(response);
            })
    };
    handleRemove = (e, friend) => {

        fetch(`${API_BASE}/${friend.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((res) => {
                let tempFriends = this.state.friends.filter(fr => fr !== friend)
                this.setState({ friends: tempFriends })
                
            })
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>

                    <form onSubmit={this.handleSubmit}>
                        <h3>Enter a Friend!</h3>
                        <fieldset className='form-group'>
                            <label>Friend's Name:</label>
                            <input
                                type='text'
                                ref='name'
                                name='name'
                                className='form-control'
                            />
                        </fieldset>
                        <fieldset className='form-group'>
                            <label>Friend's Age:</label>
                            <input
                                type='text'
                                ref='age'
                                name='age'
                                className='form-control'
                            />
                        </fieldset>
                        <button className='btn btn-success' type='submit'>
                            Save Friend
                        </button>
                    </form>
                    {this.state.friends.map(friend => <Friend friend={friend} key={friend.id} removeFriend={this.handleRemove} />)}

                </div>
            </div>
        )
    }
}

export default FriendListApp;