import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Type useReducer Hook</h2>

            <div>
                <h3>Count: {0}</h3>
                <button>Increment</button>
                <button>Reset</button>
                <button>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;