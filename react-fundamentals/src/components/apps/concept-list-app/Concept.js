import React from 'react';

const Concept = ({concept, toggle, removeToggle}) => {
    const done = (event) => {
        event.preventDefault();
        toggle(concept);
        console.log('props:',concept,toggle);
    }
    const deleteC = (event) => {
        event.preventDefault();
        removeToggle(concept)

    }

    return(
        <li>
            {concept.done ? (<del>{concept.text}</del>) : (concept.text)}
            <a href="" onClick={done}>✓  </a><a href="" onClick={deleteC}>X</a>
        </li>
    )


}
export default Concept;

