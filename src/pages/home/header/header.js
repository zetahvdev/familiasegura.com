import React from 'react';
import '../../../sass/pages/home/header/header.css';
import Navigation from './nav/nav';

const MainHeader = () => {
    return (
        <div className="HeaderContainer">
            <Navigation
                className="sdf"

                // Data
                navlinkarr= {[
                    "CONTACTO", "INICIO", "INFORMACIÓN"
                ]} >
            </Navigation>
        </div>
    );
};

export default MainHeader;