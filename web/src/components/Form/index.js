import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Form() {

    return (
        <div className="container">
            <form>
                <h2>Create a new note!</h2>
                <div className="input-container">
                    <label>Nome</label>
                    <input maxLength="30"></input>
                </div>
                <div className="textarea-container">
                    <label>Descrição</label>
                    <textarea maxLength="85"></textarea>
                </div>
                <div className="input-container">
                    <label>Data</label>
                    <input type="date" class="date"></input>
                </div>
                <button type="submit" className="create">Criar</button>
            </form>
        </div>
    )
}

export default Form;
