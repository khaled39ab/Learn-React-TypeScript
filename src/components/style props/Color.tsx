import React from 'react';

type colorStyleProps = {
    colorStyle: React.CSSProperties
}
const Color = (props: colorStyleProps) => {
    return (
        <div>
            <h2 style={props.colorStyle}>Style color type</h2>
        </div>
    );
};

export default Color;