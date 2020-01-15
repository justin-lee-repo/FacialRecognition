import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                 <div className="pa3 Tilt-inner"> <span role='img'><img style={{paddingTop:'5px', height:'100px', width:'100px'}} alt='logo' src={brain}/></span> </div>
            </Tilt>
        </div>
    )
};

export default Logo;