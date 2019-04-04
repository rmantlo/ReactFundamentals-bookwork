import React from 'react';
import JSXCompiler from '../JSXCompiler';

const MakeTable = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>It's not HTML, Closer to JS</dd>
                    <dt>React.createElement()</dt>
                    <dd>Used to construct and update the DOM</dd>
                    <dt>Not required</dt>
                    <dd>Developers dont have to use JSX</dd>
                </dl>
                <h4>Egghead.io's JSX Compiler</h4>
                <JSXCompiler />
            </div>
        </div>
    )
}

export default MakeTable;