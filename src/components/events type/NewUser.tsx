import React, { useState } from 'react';

const NewUser = () => {
    const [username, setUsername] = useState('');

    const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    
    return (
        <div>
            <h2>Event Type</h2>
            <h3>{username}</h3>
            <div style={{ border: '2px solid pink', margin: '2rem', paddingBottom: '1.5rem' }}>
                <h3>Create New User</h3>
                <input type="text" onChange={handleUserName} placeholder='Your Name' required />
            </div>
        </div>
    );
};

export default NewUser;