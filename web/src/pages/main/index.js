import React, { Component } from 'react';
import Moment from 'moment';
import api from '../../service/api';

import './styles.css';
import moment from 'moment';

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
        let response = await api.delete(`/events/${id}`);

        this.loadEvents();
    }

    render() {
        
        const { events } = this.state;
        return (
            <div className="events-list">
                {events.map(event => (
                    <article key={event._id}>
                        <strong>{event.title}</strong>
                        <p>{event.description}</p>
                        <p>{Moment(event.date).format('YYYY-MM-DD hh:mm:ss')}</p>
                        <button onClick={() => this.deleteEvent(event._id)}>DELETE</button>
                    </article>
                ))}
            </div>
        )
    }
}