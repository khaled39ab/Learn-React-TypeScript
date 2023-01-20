import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
const DECREMENT = 'DECREMENT';

const initialState = {
    count: 0
}
type counterState = {
    count: number
}

type incrementType = { type: "INCREMENT" };
type resetType = { type: "RESET" };
type decrementType = { type: "DECREMENT" };

type counterActionType = incrementType | resetType | decrementType;

const reducer = (state: counterState, action: counterActionType) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 }

        case RESET:
            return { count: 0 }

        case DECREMENT:
            return { count: state.count - 1 }

        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

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