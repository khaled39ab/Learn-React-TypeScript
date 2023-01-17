import React from 'react';

// const User = (props: {user: string, age: number}) => {
// const User = ({ user, age, isRegistered }: { user: string, age: number, isRegistered: boolean }) => {
type userProps = {
    user: string,
    age: number,
    isRegistered: boolean
}
const User1 = ({ user, age, isRegistered }: userProps) => {
    return (
        <div style={{ border: '2px solid pink', margin: '2rem' }}>
            <h3>{user}</h3>
            <p>{age} years old</p>
            {isRegistered ? <p>Registered person</p> : <p>Not registered</p>}
        </div>
    );
};

export default User1;