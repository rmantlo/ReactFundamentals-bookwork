import React from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyB3H4nCWKbg4v2CkZVLFF7bE61flXuHYOY';
//const URL = `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${API_KEY}
//&part=snippet,contentDetails,statistics,status`;

export default class Video extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('React Tutorials');
    }
    videoSearch = (term) => {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            console.log(videos);
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 1800 )
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <h1 className='section-title'>React Video Search</h1>
                    <h3>Based on Stephen Grider's work on Udemy</h3>
                    <SearchBar onSearchTermChange={videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                </div>
            </div>
        )
    }
}