import React, { Component } from 'react';
import api from '../../service/api';

import './styles.css';

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

    render() {
        const { events } = this.state;
        return (
            <div className="events-list">
                {events.map(event => (
                    <article key={event._id}>
                        <strong>{event.title}</strong>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                        <button>DELETE</button>
                    </article>
                ))}
            </div>
        )
    }
}