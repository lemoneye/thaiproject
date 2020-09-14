import React from 'react';
import KenPic from '../pictures/KenPic.jpg';

const Ken = () => {

    const picStyle = {
        width: '500px',
        height: '400px',
        border: '2px solid #ccc',
        boxShadow: '3px 3px #eee',
        margin: '20px'
    }
    return(
        <div>
            <img src={KenPic} style={picStyle} />
            <h2>Good day, this is Ken</h2>
        </div>
        
    );
}

export default Ken;