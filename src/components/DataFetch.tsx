import React from 'react';

type fetchProps = {
    status: string
}
const DataFetch = ({ status }: fetchProps) => {
    if (status === "loading") {
        return <p>Data is loading...</p>
    }
    else if (status === "error") {
        return <p>Error: Data could not fetched.</p>
    }
    return (
        <div>
            <p>Data fetched successfully.</p>
        </div>
    );
};

export default DataFetch;