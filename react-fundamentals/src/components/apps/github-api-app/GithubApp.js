import React from 'react';
import GithubCardList from './GithubCardList';
import { GithubUserData } from './github_users';

const GithubApp = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <GithubCardList cards={GithubUserData} />
            </div>
        </div>
    )
}
export default GithubApp;