import React, {useState} from 'react';                                     // eliminates the need to add react.useState


const Form = props => {

    const [name, setName] = React.useState("");                            // set state of empty string
    const [email, setEmail] = React.useState("");
    const [role, setRole] = React.useState("");

    const [members, setMembers] = React.useState([]);                     //goes into empty array





    const handleNameChange = event => setName(event.target.value);        // connects input to console
    const handleEmailChange = event => setEmail(event.target.value);
    const handleRoleChange = event => setRole(event.target.value);

    // const handleChange = event => {
    //     console.log(event.target.value);
    //     setPerson({
    //         [event.target.name]: event.target.value
    //     });
    // };





                        // STORiNG NEW MEMBER AS CARD


    const handleSubmit = event => {
        event.preventDefault();                                              //allows input rather than default empty string  
        if (name && email && role) {                                         // prevents addition of mpty objects

                                                                            // submit button is connected with the merge
            props.setPerson([...props.person, {name, email, role }]);       // merges two objects into array  (which is adding input to array of member list)
            resetState();
        }
            console.log("form submitted!");
    };
    const resetState = () => {
        setName("");
        setEmail("");
        setRole("");
    };



    return (
        // <form onSubmit={handleSubmit}>                               // { } holds JS information like variables, components
        <form>
            <input onChange={handleNameChange} type="text" name="name" value={name} placeholder="name"/>
            <input onChange={handleEmailChange} type="text" name="email" value={email} placeholder="email"/>
            <input onChange={handleRoleChange} type="text" name="role" value={role} placeholder="role"/>
            {/* <button type="submit">Add Team-member</button>  */}
            <button onClick={handleSubmit}>Add Member</button>

        </form>                                     // html element, similar to h1, p, div, etc
                                                    // not to be confused with Form component
    );
};

export default Form;