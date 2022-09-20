import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

    return (
      <div className="sidebar">
        <div className="id">
            <div className="idContent">
                <img src="./media/cv2.jpg" alt="Arnaud Gaulin" width={125}/>
                <h3>Arnaud Gaulin</h3>
            </div>
        </div>

        <div className="navigation">
            <ul>
                <li>
                <NavLink exact="true" to="/" activeclassname="navActive">
                    <i className="fa-solid fa-house-user"></i>
                    <span> Accueil</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact="true" to="/competences" activeclassname="navActive">
                    <i className="fa-sharp fa-solid fa-mountain"></i>
                    <span> Compétences</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact="true" to="/portfolio" activeclassname="navActive">
                    <i className="fa-solid fa-image"></i>
                    <span> Portfolio</span>
                </NavLink>
                </li>
                <li>
                <NavLink exact="true" to="/contacts" activeclassname="navActive">
                    <i className="fa-solid fa-address-book"></i>
                    <span> Contacts</span>
                </NavLink>
                </li>
            </ul>
        </div>
        <div className="socialNetwork">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/arnaud-gaulin-900290154/" target=" _blank"
                    rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                    <a href="https://github.com/ArnaudGaulinDWW" target=" _blank"
                    rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                </li>
                <li>
                    <a href="https://twitter.com/?lang=fr" target=" _blank"
                    rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                </li>
                <li>
                    <a href="https://codepen.io/" target=" _blank"
                    rel="noopener noreferrer"><i className="fa-brands fa-codepen"></i></a>
                </li>
            </ul>
            <div className="signature">
                <p>Arnaud Gaulin - 2022 </p>
            </div>
        </div>

      </div>
    );
};

export default Navigation;