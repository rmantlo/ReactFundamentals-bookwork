import React from 'react';
import axios from 'axios';

export default class GithubCardForm extends React.Component {
    state = { username: 'jpauloconnor' }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.github.com/users/${this.state.username}`)
            .then(resp => {
                this.props.onSubmit(resp.data);
                this.setState({ userName: '' });
            });
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} placeholder='Github Username' />
                <button type='submit'>Add Card</button>
            </form>
        )
    }
}