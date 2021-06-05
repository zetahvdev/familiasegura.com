import React from 'react';
import '../header/sass/header.scoped.css';
import Navigation from './nav/nav';
import HeaderView from '../header/headerview/headerview';
import HeaderLogo from './headerlogo/headerlogo';

const MainHeader = () => {
    return (
        <div className="HeaderGrid">
            <div className="Nav-container">
                <Navigation
                    // Data
                    navlinkarr= {[
                        "INICIO", "CONTACTO", "INFORMACIÓN"
                    ]}
                        >
                </Navigation>
                <hr className="hr-white"/>
            </div>
            <div className="HeaderView-container m-5">
                <HeaderView></HeaderView>
            </div>
            <div className="HeaderLogo-container">
                <HeaderLogo></HeaderLogo>
            </div>
        </div>
    );
};

export default MainHeader;