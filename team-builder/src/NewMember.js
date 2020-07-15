//notes example
import React from 'react';

const Person = props => {
    return (
        
        <div className="team-list">
            {props.person.map((person, i) => (      //maps the items into this format   //matches name to name. distinguish between members
             <div className="New Member" key={i}>     
                <h2>{person.name}</h2>
                <p>{person.email}</p>
                <p>{person.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Person;
