import React from 'react';
import GithubCard from './GithubCard';

const GithubCardList = (props) => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Github Demo</h1>
                {props.cards.map(card => <GithubCard key={card.id} {...card}/>)}
            </div>
        </div>
    )
}
export default GithubCardList;