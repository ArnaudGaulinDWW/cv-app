import React from 'react';

const Experiences = () => {
    return (
        <div className='experience'>
          <h3>Expériences</h3>
          <div className='exp-1'>
            <h4>Développeur web stagiaire - Code-Expérience</h4>
            <h5>2022 (10 semaines)</h5>
            <p>
              J'ai obtenu la certification developpeur web et web mobile à l'AFPA de Rochefort.
              Pendant cette formation j'ai éffectué un stage de  dix semaines avec Alexandre Achain developpeur web freelance.
              J'y ai travaillé sur plusieurs projets : 
              <ul>
                <li><span>BodyBuddy sur Symfony:</span>wireframe, maquetage, conception de la base de données, intégration des fonctionalités.</li>
                <li><span>Mérové.communication sur Wordpress:</span>réunion avec le client, intégration.</li>
              </ul> 
            </p>
          </div>
          <div className='exp-2'>
            <h4>Technicien informatique Stagiaire- DSI CD17</h4>
            <h5>2021 (6 semaines)</h5>
            <p>Un stage au sein du service informatique du Conseil Départemental de la Charente-Maritime.
               Une première étape de ma reconvertion dans les métiers de l'informatique.</p>
               <p>Installation et dépannage utilisateurs, préparation des appareils pour les agents (tablettes, smartphones et PC).</p>
          </div>
        </div>
    );
};

export default Experiences;