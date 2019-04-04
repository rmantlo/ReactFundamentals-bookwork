import React from 'react';
import ClassComponentDemo from '../ClassComponentDemo';

import {
    Route,
    Link,
    Switch,
} from 'react-router-dom';

import Home from './Home'
import Resources from './Resources'
import FunctionalComponentDemo from '../concepts/FunctionalComponentsDemo'
import JSXRules from '../concepts/JSXRules';
import PropsDemo from '../concepts/PropsDemo';
import LifeCycleDiagram from '../concepts/LifeCycleCodepen';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import ReactConcepts from '../apps/concept-list-app/ReactConceptsApp';
import NytApp from '../apps/nyt-app/NytApp';
import FriendListApp from '../apps/FriendApp/FriendListApp';
import MovieApp from '../apps/movie-search-app/MovieApp';
import Video from '../apps/youtube-api/Video';
import GithubApi from '../apps/github-api-app/GithubApi';
import Dicking from '../concepts/dickingaround';


const Sidebar = () => (

    <div className='sidebar'>
        <div className='sidebar-list-styling'>
            <ul className='sidebar-list list-unstyled'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rationale">Rationale</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to='/JSXRules'>JSXRules</Link></li>
                <li><Link to='/classcomponents'>Class Components</Link></li>
                <li><Link to='/propsdemo'>Props Demo</Link></li>
                <li><Link to='/lifecyclediagram'>Life Cycle Diagram</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to='/timer'>Timers</Link></li>
                <li><Link to='/reactconceptslist'>React Concepts Checklist</Link></li>
                <li><Link to='/nytapp'>NYT App</Link></li>
                <li><Link to='/friendlistapp'>Friend List</Link></li>
                <li><Link to='/moviesearch'>Movie Search</Link></li>
                <li><Link to='/ytsearch'>Youtube Video Search</Link></li>
                <li><Link to='/githubsimpleapi'>Github Simple Api</Link></li>
                <li><Link to ='/idk'>Messing around with object functions in states</Link></li>
            </ul>
        </div>
        <div className='sidebar-route'>
            <Switch>
                <Route exact path='/home'><Home /></Route>
                <Route exact path='/resources'><Resources /></Route>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/functionalcomponent'><FunctionalComponentDemo /></Route>
                <Route exact path='/JSXRules'><JSXRules /></Route>
                <Route exact path='/classcomponents'><ClassComponentDemo /></Route>
                <Route exact path='/propsdemo'><PropsDemo /></Route>
                <Route exact path='/lifecyclediagram'><LifeCycleDiagram /></Route>
                <Route exact path='/timer'><TimePiecesApp /></Route>
                <Route exact path='/reactconceptslist'><ReactConcepts /></Route>
                <Route exact path='/nytapp'><NytApp /></Route>
                <Route exact path='/friendlistapp'><FriendListApp /></Route>
                <Route exact path='/moviesearch'><MovieApp /></Route>
                <Route exact path='/ytsearch'><Video /></Route>
                <Route exact path='/githubsimpleapi'><GithubApi/></Route>
                <Route exact path='/idk'><Dicking /></Route>
            </Switch>
        </div>
    </div>

)

export default Sidebar;