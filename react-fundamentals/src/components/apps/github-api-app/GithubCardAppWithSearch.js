import React from 'react';
import GithubCardList from './GithubCardList';
import GithubCardForm from './GithubCardForm';

export default class GithubCardAppWithSearch extends React.Component{
    state = {
        cards: []
    }
    addNewCard = (cardInfo) => {
        this.setState(prevState => ({cards: prevState.cards.concat(cardInfo)}))
    }
    render(){
        return(
            <div className='main'>
                <div className='mainDiv'>
                    <GithubCardForm onSubmit={this.addNewCard} />
                    <GithubCardList cards={this.state.cards} />
                </div>
            </div>
        )
    }
}