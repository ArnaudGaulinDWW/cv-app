import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className="contactContent">
                <div className="header"></div>
                    <div className="contactBox">
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                <span>Rochefort</span>
                            </li>
                            <li>
                                <i className='fas fa-mobile-alt'></i>
                                <CopyToClipboard text="0617663593">
                                    <span 
                                    className='clickInput'
                                    onClick={() => {alert('Téléphone copié !');}}>
                                    06 17 66 35 93
                                    </span>
                                </CopyToClipboard>
                            </li>
                            <li>
                                <i className='fas fa-envelope'></i>
                                <CopyToClipboard text="arnogaulin@hotmail.com">
                                    <span 
                                    className='clickInput'
                                    onClick={() => {alert('E-mail copié !');}}>
                                    arnogaulin@hotmail.com
                                    </span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className="socialNetwork">
                        <ul>
                            <a href="https://github.com/ArnaudGaulinDWW" target="blank" rel="noopener noreferrer">
                                <h4>Github</h4>
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/arnaud-gaulin-900290154/" target="blank" rel="noopener noreferrer">
                                <h4>Linkedin</h4>
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/?lang=fr" target="blank" rel="noopener noreferrer">
                                <h4>Twitter</h4>
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                            <a href="https://codepen.io/" target="blank" rel="noopener noreferrer">
                                <h4>CodePen</h4>
                                <i className="fa-brands fa-codepen"></i>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
    );
};

export default Contact;