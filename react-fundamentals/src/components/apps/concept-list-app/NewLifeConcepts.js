import React from 'react';

export default class NewLifeConcepts extends React.Component{
    create(e){
        e.preventDefault();
        let text = this.refs.newlifeConceptText.value;
        if(text){
            this.props.createLifeConcept(text);
            this.refs.newlifeConceptText.value='';
        }
    }

    render(){
        return(
            <form onSubmit={this.create.bind(this)}>
            <label>New Life Cycle Concepts: </label><input type='text' ref='newlifeConceptText' />
            <button className='button' type='submit'>+</button>
            </form>
        )
    }
}