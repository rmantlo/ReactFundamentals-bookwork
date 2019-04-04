import React from 'react';
import _ from 'lodash';
import Concept from './Concept';


const ConceptList = ({ concepts, toggle, removeToggle }) => {
    let conceptsSorted = _.sortBy(concepts, 'done');
    let items = conceptsSorted.map((concept) => 
        concept.remove ? null : (<Concept concept={concept} key={concept.text} toggle={toggle} removeToggle={removeToggle}/>));



    return (
        <ul>
            {items}
        </ul>
    )

}

export default ConceptList;

