import React from 'react';

type usersProps = {
    users: {
        id: number;
        name: string;
        age: number;
        email: string;
    }[]
}
const User3 = ({ users }: usersProps) => {
    return (
        <div style={{ border: '1px solid', margin: '2rem' }}>
            {
                users.map(user => {
                    const { name, id, age, email } = user
                    return <div key={id} style={{ border: '1px solid pink', margin: '2rem' }}>
                        <h2>User: {name}</h2>
                        <p>{age} years old.</p>
                        <p>Email: {email}</p>
                    </div>
                })
            }
        </div>
    );
};

export default User3;