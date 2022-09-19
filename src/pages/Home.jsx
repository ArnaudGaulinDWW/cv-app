import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Arnaud Gaulin</h1>
                    <h2>Développeur web et web mobile</h2>
                    <div className="pdf">
                        <a href="./media/cv arnaud gaulin 2022.pdf" target="_blank">Télécharger CV</a>
                    </div>
                    <div>
                        <p>Après une carrière de plus de 15 ans en logistique,
                        je me reconvertis dans le métier de développeur web.
                        </p>
                        <p>
                        J'ai eu la chance de suivre la formation de l'AFPA à Rochefort et d'obtenir 
                        mon titre profesionel. Il me reste encore beaucoup à accomplir et à apprendre mais 
                        ce que j'ai pu en voir m'a passionné.
                        J'ai hâte d'en découvrir plus et de trouver ma place dans le monde du développement web.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;