import React from 'react';

const Hobbies = () => {
    return (
            <div className="hobbies">
                <h3>Intérêts</h3>
                <ul>
                    <li className="hobby">
                    <i class="fa-solid fa-dice-d20"></i>
                        <span>Jeu de rôle</span>  
                    </li>
                    <li className="hobby">
                    <i class="fa-solid fa-utensils"></i>
                        <span>Cuisine</span>  
                    </li>
                    <li className="hobby">
                    <i class="fa-solid fa-puzzle-piece"></i>
                        <span>Modélisme</span>  
                    </li>
                    <li className="hobby">
                    <i class="fa-solid fa-gamepad"></i>
                        <span>Culture web</span>  
                    </li>
                </ul>
            </div>
    );
};

export default Hobbies;