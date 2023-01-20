import React, { useReducer } from 'react';

const INCREMENT = 'INCREMENT';
const RESET = 'RESET';
const DECREMENT = 'DECREMENT';
const INCREMENTBYAMOUNT = 'INCREMENTBYAMOUNT';

const initialState = {
    count: 0
}
type counterState = {
    count: number
}

// type incrementType = { type: "INCREMENT" };
type incrementType = { type: typeof INCREMENT };
// type resetType = { type: "RESET" };
type resetType = { type: typeof RESET };
// type decrementType = { type: "DECREMENT" };
type decrementType = { type: typeof DECREMENT };
type incrementByAmountType = { type: typeof INCREMENTBYAMOUNT, payload: number };

type counterActionType = incrementType | resetType | decrementType | incrementByAmountType;

const reducer = (state: counterState, action: counterActionType) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 }

        case INCREMENTBYAMOUNT:
            return { count: state.count + action.payload }

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
                <h3>Count: {state.count}</h3>

                <button onClick={() => {
                    dispatch({ type: INCREMENT })
                }}>Increment</button>

                <button onClick={() => {
                    dispatch({ type: RESET });
                }}>Reset</button>

                <button onClick={() => {
                    dispatch({ type: DECREMENT })
                }}>Decrement</button>
                
                <br />

                <button onClick={() => {
                    dispatch({ type: INCREMENTBYAMOUNT, payload: 5 })
                }}>Increment By Amount 5</button>

            </div>
        </div >
    );
};

export default Counter;