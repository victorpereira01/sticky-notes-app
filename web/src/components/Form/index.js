import React from 'react';
import api from '../../service/api';
import styled from 'styled-components';

import './styles.css'

const Container = styled.div`
    width: 100vw;
    height: 87vh;
    display: flex;
    justify-content: center;
    align-items: center;    
`

const FormContainer = styled.form`
    width: 40%;
    height: 90%;
    display: flex;
    justify-content: baseline;
    align-items: flex-start;
    flex-direction: column;
`

const Title = styled.h2`
    color: #9e579d;
    padding: 10px 95px; 
`

const InputContainer = styled.div`
    margin: 20px 0;
    padding: 0 95px;
`
const InputName = styled.label`
    display: block;
    padding: 5px 0; 
`

const Button = styled.button`
    align-self: flex-end;
    margin-right: 98px;
    margin-top: 20px;
    height: 30px;
`

export default class Form extends React.Component {

    state = {
        title: '',
        description: '',
        date: ''
    }

    handleSubmit = async event => {
        await api.post('/events', {
            title: this.state.title,
            description: this.state.description,
            date: this.state.date,
        });
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <Container className="container">
                <FormContainer onSubmit={this.handleSubmit}>
                    <Title>Create a new note!</Title>

                    <InputContainer className="input-container">
                        <InputName>Nome</InputName>
                        <input name="title" maxLength="30" onChange={this.handleChange} required="true"></input>
                    </InputContainer>

                    <InputContainer className="textarea-container">
                        <InputName>Descrição</InputName>
                        <textarea name="description" maxLength="75" onChange={this.handleChange} required="true"></textarea>
                    </InputContainer>

                    <InputContainer className="input-container">
                        <InputName>Data</InputName>
                        <input name="date" type="date" className="date" onChange={this.handleChange} required="true"></input>
                    </InputContainer>

                    <Button type="submit" className="create">Criar</Button>
                </FormContainer>
            </Container>
        )
    }
}
