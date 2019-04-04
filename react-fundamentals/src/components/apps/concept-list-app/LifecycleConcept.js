import React from 'react';

const LifeConcept = ({lifeconcept, toggle, removeToggle}) => {
    const done2 = (e) => {
        e.preventDefault();
        toggle(lifeconcept);

    }
    const deleteC = (event) => {
        event.preventDefault();
        removeToggle(lifeconcept);
    }
    return(
        <li>
            {lifeconcept.done ? (<del>{lifeconcept.text}</del>) : (lifeconcept.text)}
            <a href="" onClick={done2}>✓  </a><a href="" onClick={deleteC}>X</a>
        </li>
    )
}
export default LifeConcept;