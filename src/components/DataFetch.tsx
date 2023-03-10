import React from 'react';

/* 
// combine type with union

type demo1 = {
    status: string
}

type demo2 = {
    status: number
}

type demoProps =  demo1 | demo2;
*/


type fetchProps = {
    // status: string
    status: 'success' | 'loading' | 'error'; // union type
}
const DataFetch = ({ status }: fetchProps) => {
    if (status === "loading") {
        return <h2 style={{ color: 'gray' }}>Data is loading...</h2>
    }
    else if (status === "error") {
        return <h2 style={{ color: 'red' }}>Error: Data could not fetched.</h2>
    }

    return (
        <div>
            <h2 style={{ color: 'green' }}>Data fetched successfully.</h2>
        </div>
    );
};

export default DataFetch;