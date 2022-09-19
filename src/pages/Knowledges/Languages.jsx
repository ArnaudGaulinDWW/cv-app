import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:0.7},
            {id: 2, value: "Css", xp:0.7},
            {id: 3, value: "Php", xp:0.5},
            {id: 4, value: "Sql", xp:0.5},
        ],

        frameworks: [
            {id: 1, value: "Symfony", xp:0.5},
            {id: 2, value: "Bootstrap", xp:0.7},
            {id: 3, value: "React", xp:0.3},
            {id: 4, value: "Sass", xp:0.7},
        ]
    }

    render() {
     
        let {languages, frameworks} = this.state;

        return (
                <div className="languagesFrameworks">
                    <ProgressBar 
                        languages={languages}
                        classname="languagesDisplay"
                        title="languages"
                    />
                    <ProgressBar
                        languages={frameworks}
                        classname="frameworkDisplay"
                        title="Frameworks & bibliothèque"
                    />
                </div>
        );
    }
}

export default Languages;