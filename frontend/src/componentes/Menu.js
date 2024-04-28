import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from './Img/logo.png';

const StyledMenu = styled.div`
    background: #ffffff;
    color: black;
    font-family: 'Montserrat', sans-serif;
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;

    ul {
        list-style: none;
        display: flex;
    }

    li {
        padding-left: 2rem;
    }

    a {
        font-weight: bold;
        color: #000d05;
        text-decoration: none;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        box-shadow: 0 0 0 rgba(0, 0, 0, 0); 
        display: inline-block; 
    }

    a:hover {
        transform: translateY(-5px) scale(1.05); 
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    }

    .logo {
        max-width: 90px; /* Defina o tamanho máximo da logo */
        height: auto; /* Mantenha a proporção original */
        margin-right: 20px; /* Adicione uma margem à direita para separar a logo dos links */
    }
`;

const Menu = () => {
    return (
        <StyledMenu>
            <img src={Logo} alt="Logo sistema" title="Hidroweb" className="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/config">Configurações</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/notifications">Notificações</Link></li>
            </ul>
        </StyledMenu>
    );
};

export default Menu;
