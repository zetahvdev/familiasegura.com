import React from 'react';
import HeaderLogo from '../../../../assets/imgs/headerlogo/headerlogo';
import '../headerlogoframe/sass/headerlogoframe.css';

const HeaderLogoFrame = ({width, height, measure_unit}) => {
    return (
        <div
            className="HeaderLogo-frame"
            style={{
                width: width + measure_unit,
                height: height + measure_unit
            }}
        >
            <HeaderLogo></HeaderLogo>
        </div>
            
    );
};

export default HeaderLogoFrame;