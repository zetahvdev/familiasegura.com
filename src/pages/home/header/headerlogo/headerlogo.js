import React from 'react';
import FS_logo from '../../../../assets/imgs/Familia_Segura.png';
import '../headerlogo/sass/headerlogo.css';

const HeaderLogo = () => {
    return (
        <div className="HeaderLogo-frame">
            <img src={FS_logo} alt=""/>   
        </div>
    );
};

export default HeaderLogo;