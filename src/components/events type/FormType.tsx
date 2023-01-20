import React, { useState } from 'react';

const FormType = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({name, email});
        setEmail('');
        setName('');
    }

    return (
        <div>
            <h2>Form Event Type</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input
                        type="text"
                        name='name'
                        onChange={handleNameChange}
                        value={name}
                        required
                    />
                </label>
                <br />
                <label htmlFor="email">Email:
                    <input
                        type="email"
                        name='email'
                        onChange={handleEmailChange}
                        value={email}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default FormType;