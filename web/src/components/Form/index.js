import React from 'react';
import api from '../../service/api';

import './styles.css';

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
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h2>Create a new note!</h2>
                    <div className="input-container">
                        <label>Nome</label>
                        <input name="title" maxLength="30" onChange={this.handleChange} required="true"></input>
                    </div>
                    <div className="textarea-container">
                        <label>Descrição</label>
                        <textarea name="description" maxLength="85" onChange={this.handleChange} required="true"></textarea>
                    </div>
                    <div className="input-container">
                        <label>Data</label>
                        <input name="date" type="date" className="date" onChange={this.handleChange} required="true"></input>
                    </div>
                    <button type="submit" className="create">Criar</button>
                </form>
            </div>
        )
    }
}
