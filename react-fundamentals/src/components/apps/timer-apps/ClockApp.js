import React, { Component } from 'react';

export default class ClockApp extends Component {
    constructor(props) {
        super(props);
        let date = this.getTimeString();
        let date2 = this.getAnotherTimeString();
        this.state = {
            localtime: date,
            hongkongtime: date2
        };
    }

    getTimeString() {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }
    getAnotherTimeString(){
        let d = new Date();
        let utc = d.getTime() + (d.getTimezoneOffset()*60000);
        let date2 = new Date(utc +(3600000*8)).toLocaleTimeString();

        return date2;
    }
    
    componentDidMount(){
        const _this = this;
        this.timer = setInterval(function (){
            var date = _this.getTimeString();
            var date2 = _this.getAnotherTimeString();
            _this.setState({
                time: date,
                hongkongtime: date2
            });
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <h1 className='section-title'>React Clock</h1>
                
                <p>Indianapolis: {this.state.time}</p>
                <p>Hong Kong: {this.state.hongkongtime}</p>
            </div>
        );
    }
}