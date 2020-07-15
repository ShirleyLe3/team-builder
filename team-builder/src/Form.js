import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Form = props => {

    const [person, setPerson] = useState({
        name: "",
        email: "",
        role: ""
    })
    

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [role, setRole] = React.useState("");

    const handleName = event => setName(event.target.value);
    const handleEmail = event => setEmail(event.target.value);
    const handleRole = event => setRole(event.target.value);

    const handleChange = event => {
        console.log(event.target.value);
        setPerson({
            [event.target.name]: event.target.value
        });
    };


    const handleSubmit = event => {
        event.preventDefault();                          //allows input   
        if (name && email && role) {
            props.setPerson([...props.person, {name, email, role }]);
            resetState();
        }
            console.log("form submitted!");
    };
    const resetState = () => {
        setName("");
        setEmail("");
        setRole("");
    };

    // const submitForm = el => {
    //     ...
    //     ..
    //     .
    // };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" name="name" value={name} placeholder="name"/>
            <input onChange={handleChange} type="text" name="email" value={email} placeholder="email"/>
            <input onChange={handleChange} type="text" name="role" value={role} placeholder="role"/>
            <button type="submit">Add Team-member</button> 

        </form>

    );
};

export default Form;