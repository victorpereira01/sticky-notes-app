import React, { Component } from 'react';
import Moment from 'moment';
import api from '../../service/api';
import { FiTrash, FiEdit } from 'react-icons/fi'

import './styles.css';

import Header from '../../components/Header'

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
                <div className="events-list">
                    {events.map(event => (
                        <article key={event._id}>
                            <strong>{event.title}</strong>
                            <p>{event.description}</p>
                            <p>{Moment(event.date).format('YYYY-MM-DD')}</p>
                            <p className="createdAtDate">Criado em: {Moment(event.createdAt).format('YYYY-MM-DD')}</p>
                            <FiEdit
                                className="edit"
                            />
                            <FiTrash
                                className="trashcan"
                                onClick={() => this.deleteEvent(event._id)}
                            />
                        </article>
                    ))}
                </div>
            </div>
        )
    }
}