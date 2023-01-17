import React from 'react';

/* 
type userProps = {
    name: string,
    age: number,
    isStudent: boolean,
    lang: string[]
}
const User2 = ({ name, age, isStudent, lang }: userProps) => {
    return (
        <div>
            <h3>User: {name}</h3>
            <p>{age} years old.</p>
            {
                isStudent ? <p>Student</p> : <p>Not Student</p>
            }
            <p>Speaks: 
                {
                    lang.map(lan =>lan)
                }
            </p>
        </div>
    );
};

*/

type userProps = {
    user: {
        name: string;
        age: number;
        email: string;
        isStudent: boolean;
        lang: string[]
    }
}

const User2 = ({ user }: userProps) => {
    const { name, age, email, isStudent, lang } = user;

    return (
        <div style={{ border: '1px solid', margin: '2rem' }}>
            <h3>User: {name}</h3>
            <p>{age} years old.</p>
            <p>Email: {email}</p>
            {
                isStudent ? <p>Student</p> : <p>Not Student</p>
            }
            {
               <p> {lang.map((lan, index) => <span key={index}>{lan +' '}</span>)} </p>
            }
        </div>
    );
};


export default User2;