import React, { useState } from 'react';

const HookType = () => {
    const [count, setCount] = useState(0);

    const handleIncrease = () =>{
        // setCount( "1")  // Error: Argument of type 'string' is not assignable to parameter of type 'SetStateAction<number>'
        setCount(count + 1)
    }
    return (
        <div>
            <h2>useState Hook Type</h2>
            <h3>Count: {count}</h3>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default HookType;