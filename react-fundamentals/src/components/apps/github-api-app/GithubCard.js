import React from 'react';

const GithubCard = (props) => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <img width='75' src={props.avatar_url} alt='card'/>
                <div style={{ display: 'inline-block', marginLeft: 10 }}>
                    <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                        {props.name}
                    </div>
                    <div>{props.company}</div>
                </div>
            </div>
        </div>
    )
}
export default GithubCard;