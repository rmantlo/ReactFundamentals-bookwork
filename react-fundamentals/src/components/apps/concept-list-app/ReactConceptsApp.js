import React from 'react';
import _ from 'lodash';
import {concepts, lifecycleMethods} from './Concepts';
import ConceptList from './ConceptList';
import LifecycleConceptList from './LifecycleConceptList';
import NewConcepts from './NewConcept';
import NewLifeConcepts from './NewLifeConcepts';

export default class ReactConcepts extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            methods: concepts,
            lifeMethods: lifecycleMethods
        };
        //console.log(this.state.concepts);
    }

    toggleConcept= (concepts)=> { //if you use fat arrow here like this, then in the return you done have to bind the toggleConcept
        let concept = _.find(this.state.methods, concepts);
        concept.done = !concept.done;
        this.setState({methods: this.state.methods});
    }
    toggleLifeConcept = (lifeconcepts) => {
        let concept2 = _.find(this.state.lifeMethods, lifeconcepts);
        concept2.done = !concept2.done;
        this.setState({lifeMethods: this.state.lifeMethods});
    }

    createConcepts(text) {
        this.state.methods.push({
            text,
            done: false,
            remove: false,
        });
        this.setState({methods: this.state.methods});
    }
    createLifeConcept(text) {
        this.state.lifeMethods.push({
            text,
            done: false,
            remove: false,
        })
        this.setState({lifeMethods: this.state.lifeMethods});
    }
    deleteConcept(concept){
        let deleted = _.find(this.state.methods, concept);
        deleted.remove = !deleted.remove;
        this.setState({methods: this.state.methods})
    }
    deletelifeConcept(lifeconcept){
        let deleted = _.find(this.state.lifeMethods, lifeconcept);
        deleted.remove = !deleted.remove;
        this.setState({lifeMethods: this.state.lifeMethods})
    }

    render() {
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <h1>Concept List App</h1>
                    <p>Use the list below to toggle concepts that you do or do not understand.</p>
                    <NewConcepts createConcept={this.createConcepts.bind(this)} />
                    <h2>General Concepts</h2>
                    <ConceptList concepts={this.state.methods} toggle={this.toggleConcept.bind(this)} removeToggle={this.deleteConcept.bind(this)} />
                    <hr />
                    <NewLifeConcepts createLifeConcept={this.createLifeConcept.bind(this)} />
                    <h2>Life Cycle Methods</h2>
                    <LifecycleConceptList lifeconcepts={this.state.lifeMethods} toggle={this.toggleLifeConcept} removeToggle={this.deletelifeConcept.bind(this)} />
                </div>
            </div>
        )
    }
}