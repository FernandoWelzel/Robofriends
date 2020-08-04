import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '71.2vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;