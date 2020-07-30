import React, { Component } from 'react';
import api from '../../service/api';

import './styles.css';

export default class Events extends Component {
    state = {
        events: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/events/${id}`);

        this.setState({ events: response.data });
    }

    render() {
        const { event } = this.state;

        return (
            <div className="events-list">
                {events.map(event => (
                    <article key={event._id}>
                        <strong>{event.title}</strong>
                        <p>{event.description}</p>
                        <p>{event.date}</p>
                    </article>
                ))}
            </div>
        )
    }

}