import React from 'react';
import {Button} from 'reactstrap';


const FunctionalComponentDemo = () => {

    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Functional Component</h1>
                <p>Functional components allow you to render information to the web without having to use or change state.</p>
                <dl>
                    <DataTable />
                </dl>
                <h2>Challenge</h2>
                <NoArrow />
                <FatArrow />

            </div>
        </div>
    );
};

let DataTable = () => {
    return (
    <div>
        <dt>Presentational</dt>
            <dd>Often used for simply rendering a smalle chunck of code</dd>
        <dt>No 'this' Keyword</dt>
            <dd>Unlike class components, functional ones dont use 'this'.</dd>
        <dt>No State</dt>
            <dd>These are 'dumb' components for UI.</dd>
        <dt>return()</dt>
            <dd>Must return a single element.</dd>
    </div>
    );
}

let NoArrow = function() {
    return(
        <div className='noarrow'>
            <h6>Regular no arrow Function</h6>
            <p>const HelloWorld = function()</p>
            <Button href='https://www.google.com'>to google</Button>
        </div>
    );
}
let FatArrow = () => {
    return(
        <div className='fatarrow'>
            <h6>Fat arrow Function</h6>
            <p>const HelloWorld = () =></p>
        </div> 

    );
}

export default FunctionalComponentDemo;