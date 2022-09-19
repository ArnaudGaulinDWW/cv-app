import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="notFound">
        <div className="notFoundContent">
                <h3>Désolé cette page n'éxiste pas !</h3>
            <NavLink exact="true" to="/">
                <i class="fa-solid fa-house-user"></i>
                <span>Accueil</span>
            </NavLink>
        </div>
      </div>
    );
};

export default NotFound;