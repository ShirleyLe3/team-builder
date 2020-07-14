import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Form = props => {
    // const [person, setPerson] = useState({
    //     name: "",
    //     email: "",
    //     role: "Unknown"
    // })


    const defaultState = {title: '', body: ''}
    const [newNote, setNewNote] = React.useState(defaultState);

    const handleChange = event => {
        console.log(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault()    
            console.log('form submitted!');
    }

    // const submitForm = el => {
    //     ...
    //     ..
    //     .
    // }
    return (
        <form>
            <input onChange={handleChange} type="text" name="name" />
            <input onChange={handleChange} type="text" name="email"/>
            <input onChange={handleChange} type="text" name="role"/>
            <button type="submit">Add Team-member</button> 
        </form>
    );
};







export default Form;