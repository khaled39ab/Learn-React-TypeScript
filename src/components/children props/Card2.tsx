import React, {ReactNode} from 'react';

const Card2 = ({children}: {children: ReactNode}) => {
    return (
        <div className='card2'>
            {children}
        </div>
    );
};

export default Card2;