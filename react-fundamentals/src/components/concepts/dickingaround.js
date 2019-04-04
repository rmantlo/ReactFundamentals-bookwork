import React from 'react';

export default class Dicking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 0,
            add: () => {
                console.log('add');
                console.log(this.state.pageNumber);
                this.setState({
                    pageNumber: this.state.pageNumber + 1
                })
            },
            subtract: () => {
                console.log('minus');
                this.setState({ pageNumber: this.state.pageNumber - 1 })
            },
        }
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <button onClick={(e) => {
                        e.preventDefault();
                        this.state.subtract()
                    }}>Previous</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        this.state.add()
                    }}>Next</button>
                    <button onClick={e => this.setState({ pageNumber: 0 })}>Reset</button>
                    <div>{this.state.pageNumber}</div>
                </div>
            </div>
        )
    }
}