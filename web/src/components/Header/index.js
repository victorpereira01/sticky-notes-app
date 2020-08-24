import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = styled.header`
    width: 100%;
    height: 80px;

    background: #9e579d;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: space-between; 
`

const Span = styled.span`
    color: #fff;
    font-size: 22px;
    margin-left: 40px;
`

const Button = styled.button`
    height: 30px;
    border: 1px solid white;
    margin-right: 40px;
`

function Header() {
    return (
        <MainHeader id="main-header">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Span>My Notes</Span>
            </Link>
            <Link to="/cadastro"><Button>+ Criar</Button></Link>
        </MainHeader>
    )
}

export default Header;
