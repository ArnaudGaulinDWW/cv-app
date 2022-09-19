import React from 'react';
import Navigation from '../components/Navigation';
import Experiences from './Knowledges/Experiences';
import Hobbies from './Knowledges/Hobbies';
import Languages from './Knowledges/Languages';
import OtherSkills from './Knowledges/OtherSkills';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation />
        <div className="knowledgesContent">
            <Languages />
            <Experiences />
            <OtherSkills />
            <Hobbies />
        </div>

        </div>
    );
};

export default Knowledges;