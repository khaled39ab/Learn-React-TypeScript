import React, { useState } from 'react';

const HookType = () => {
    const [count, setCount] = useState(0);
    // const [count, setCount] = useState<number>(0);  // no need to set type


    const handleIncrease = () => {
        // setCount( "1")  // Error: Argument of type 'string' is not assignable to parameter of type 'SetStateAction<number>'
        setCount(count + 1)
    }

    const handleDecrease = () => {
        //  setCount( false)  // Error: Argument of type 'boolean' is not assignable to parameter of type 'SetStateAction<number>'
        setCount(count - 1)
    }

    return (
        <div>
            <h2>useState Hook Type</h2>
            <div style={{ border: '2px solid pink', margin: '2rem', paddingBottom: '1.5rem' }}>
                <h3>Count: {count}</h3>
                <button onClick={handleIncrease}>Increase</button>
                <button onClick={handleDecrease}>Increase</button>
            </div>
        </div>
    );
};

export default HookType;