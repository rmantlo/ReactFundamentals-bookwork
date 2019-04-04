import React from 'react';
import FormResults from './FormResults';
import styled from 'styled-components';

const SearchInput = styled.input`
    margin-top: 10px;
    width: 250px;
    margin-bottom: 10px;
    padding-left: 10px;
    color: grey;    

    `;

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    handleKeyUp = (e) => {
        const key = '6c981d2f0eb9abcb26bbc5b82ab1e5d4';
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${e.target.value}&page=1&include_adult=false`)
            .then(response => {
                if (response.status !== 200) {
                    console.log("Error:" + response.status);
                    return;
                }
                response.json().then(data => {
                    const results = data.results;
                    this.setState({ results })
                    console.log(data);
                })
            })
            .catch(err => {
                console.log("Fetch Error :-S", err);
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id="form">
                    <SearchInput onKeyUp={this.handleKeyUp} id='searchInput' className='searchBar' type="text" placeholder="Search a Movie" required />
                {this.state.results === [] ? (<div></div>) : (<FormResults results={this.state.results} key={this.state.results.id} />)}
                </form>
            </div>
        )
    }
}