import React from 'react';
import '../header/sass/header.scoped.css';
import Navigation from './nav/nav';
import HeaderView from '../header/headerview/headerview';
import HeaderLogoFrame from '../header/headerlogoframe/headerlogoframe';

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
                <HeaderView
                    titleText = {
                        {
                            content: "FAMILIA SEGURA",
                            size: "huge",
                            color: "white"
                        }
                    }

                    subtitleText={
                        {
                            content: "UN SISTEMA PARA TRABAJAR EN FAMILIA",
                            size: "title-size",
                            color: "main"
                        }
                    }
                ></HeaderView>
            </div>
            <div className="HeaderLogo-container">
                <HeaderLogoFrame
                    width={30} height={30} measure_unit="rem"
                ></HeaderLogoFrame>
            </div>
        </div>
    );
};

export default MainHeader;