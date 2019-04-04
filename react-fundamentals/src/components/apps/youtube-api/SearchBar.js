import React from 'react';

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            term: ' '
        }
    }

    render(){
        return(
            <div className='search-bar'>
                <label className='videoSearchLbl'>
                    Search for React Tutorials
                </label>
                <input value={this.state.term} onChange={ (e) => this.onInputChange(e.target.value)} />
            </div>
        )
    }

    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}