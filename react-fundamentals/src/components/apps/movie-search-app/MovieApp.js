import React from 'react';
import Form from './Form';
import styled from 'styled-components';

const Wrapper = styled.div`background: #dbdbdb;`;

export default class MovieApp extends React.Component{
    render(){
        return(
            <Wrapper className='main'>
                <div className='mainDiv'>
                    <Form />
                </div>
            </Wrapper>
        )
    }
}