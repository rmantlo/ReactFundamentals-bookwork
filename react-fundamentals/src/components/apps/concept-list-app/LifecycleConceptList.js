import React from 'react';
import _ from 'lodash';
import LifeConcept from './LifecycleConcept';

const LifecycleConceptList = ({ lifeconcepts, toggle, removeToggle }) => {
    let lifeConceptsSorted = _.sortBy(lifeconcepts, 'done');
    let item = lifeConceptsSorted.map((lifeconcept) =>
        lifeconcept.remove ? null : (<LifeConcept lifeconcept={lifeconcept} key={lifeconcept.text} toggle={toggle} removeToggle={removeToggle} />));
    return (
        <ul>
            {item}
        </ul>
    )
}
export default LifecycleConceptList;