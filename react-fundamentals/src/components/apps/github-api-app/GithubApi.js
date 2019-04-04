import React from 'react';
import GithubApp from './GithubApp';
import GithubCardAppWithSearch from './GithubCardAppWithSearch';

const GithubApi = function () {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <GithubCardAppWithSearch />
                <br />
                {/* <GithubApp /> */}
            </div>
        </div>
    )
}

export default GithubApi;


// {
//     path: '/githubsimpleapi',
//     exact: true,
//     main: () = > <div><GithubCardApp /> <br /> <GithubCardAppWithSearch /> </div>
// }