import React from 'react';
import joePicture from '../pictures/joesPic.jpg';

const joe = () => {
    return(
        
        <div> Hi, I'm Joe. 
            <div> It's nice to meet you here :) </div>
            <img src={joePicture} />
        </div>   
    )
}

export default joe;