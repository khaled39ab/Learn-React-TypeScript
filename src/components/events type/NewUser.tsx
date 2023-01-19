import React, { useState } from 'react';

const NewUser = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleSetTitle = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(username);
    }

    const handleAddUser = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setEmail(e.currentTarget.value)
    }

    return (
        <div>
            <h2>Event Type</h2>
            <h3>{username}</h3>
            <h3>{email}</h3>
            <div style={{ border: '2px solid pink', margin: '2rem', paddingBottom: '1.5rem' }}>
                <h3>Create New User</h3>
                <input type="text" onChange={handleUserName} placeholder='Your Name' required /> <br />
                <button onClick={handleSetTitle}>Submit</button>
                <br /><br />
                <form>
                    <input type="email" name="email" id='email' placeholder='Your Email' required /> <br />
                    <button onClick={handleAddUser} type='submit'>Add User</button>
                </form>
            </div>
        </div>
    );
};

export default NewUser;