//notes example

import React from 'react';

const Person = props => {
    return (
        
        <div className="team-list">
            {props.person.map((person, i) => (
             <div className="New Member" key={i}>  //matches name to name   
                <h2>{person.name}</h2>
                <p>{person.email}</p>
                <p>{person.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Person;
