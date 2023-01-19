import React, { useState } from 'react';

type User = {
    id: number,
    name: string
}

const HookType = () => {
    const [count, setCount] = useState(0);
    // const [count, setCount] = useState<number>(0);  // no need to set type

    // const [user, setUser] = useState<null | User>(null);
    const [user, setUser] = useState<User>({} as User); // if must have user even initial value can empty object

    const handleIncrease = () => {
        // setCount( "1")  // Error: Argument of type 'string' is not assignable to parameter of type 'SetStateAction<number>'
        setCount(count + 1)
    }

    const handleDecrease = () => {
        //  setCount( false)  // Error: Argument of type 'boolean' is not assignable to parameter of type 'SetStateAction<number>'
        setCount(count - 1)
    }

    const handleAddUser = () => {
        setUser({ id: 1, name: "Aminul" })
    }

    return (
        <div>
            <h2>useState Hook Type</h2>
            <div style={{ border: '2px solid pink', margin: '2rem', paddingBottom: '1.5rem' }}>
                <h3>Count: {count}</h3>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Increase</button>
            </div>

            <div style={{ border: '2px solid pink', margin: '2rem', paddingBottom: '1.5rem' }}>
                <h3>{user?.name}</h3>
                {/* <h3>{user.name}</h3> no need if use {} as User*/} 
                <button onClick={handleAddUser}>Add user</button>
            </div>
        </div>
    );
};

export default HookType;