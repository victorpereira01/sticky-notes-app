import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Header() {
    return (
        <header id="main-header">
            <Link to="/" style={{textDecoration: 'none'}}>
                <span>My Notes</span>
            </Link>
            <Link to="/cadastro"><button>+ Criar</button></Link>
        </header>
    )
}

export default Header;
