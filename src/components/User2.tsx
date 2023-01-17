import React from 'react';

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

export default User2;