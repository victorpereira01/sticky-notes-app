import React, { Component } from 'react';
import Moment from 'moment';
import api from '../../service/api';
import { FiTrash, FiEdit } from 'react-icons/fi'
import styled from 'styled-components';

import './styles.css';

import Header from '../../components/Header'

const Container = styled.div`
    padding: 0px 20px;
    margin: 20px auto 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;
    justify-content: center; 
`

const NoteContainer = styled.article`
    background: #fff98c;
    box-shadow: 1px 1px 5px #292626;
    border-radius: 5px;
    height: 210px;
    padding: 20px;
    margin: 20px;
`

const Text = styled.p`
    padding-top: 2px;
    font-size: 12px;
    color: #292626;
    margin-top: 10px;
    line-height: 24px;
    min-height: 32px;
    line-height: 1.4;
`

export default class Main extends Component {

    state = {
        events: []
    }

    componentDidMount() {
        this.loadEvents();
    };

    loadEvents = async () => {
        const response = await api.get("/events");

        this.setState({ events: response.data });
    };

    deleteEvent = async (id) => {
        await api.delete(`/events/${id}`);
        this.loadEvents();
    }

    render() {
        const { events } = this.state;
        
        return (
            <div>
                <Header />
                <Container>
                    {events.map(event => (
                        <NoteContainer key={event._id}>
                            <strong>{event.title}</strong>
                            <Text>{event.description}</Text>
                            <Text>{Moment(event.date).format('YYYY-MM-DD')}</Text>
                            <Text className="createdAtDate">Criado em: {Moment(event.createdAt).format('YYYY-MM-DD')}</Text>
                            <FiEdit
                                className="edit"
                            />
                            <FiTrash
                                className="trashcan"
                                onClick={() => this.deleteEvent(event._id)}
                            />
                        </NoteContainer>
                    ))}
                </Container>
            </div>
        )
    }
}