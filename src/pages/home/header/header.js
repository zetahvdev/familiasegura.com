import React from 'react';
import '../../../sass/pages/home/header/header.scoped.css';
import Navigation from './nav/nav.js';

const MainHeader = () => {
    return (
        <div className="HeaderGrid">
            <div className="NavContainer">
                <Navigation
                    // Data
                    navlinkarr= {[
                        "CONTACTO", "INICIO", "INFORMACIÓN"
                    ]}
                     >
                </Navigation>
                <hr className="hr-white"/>
            </div>
        </div>
    );
};

export default MainHeader;