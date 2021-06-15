import React from 'react';
import MainHeader from './header/header.js'
import TextResponsive from 'src/components/TextResponsive/TextResponsive';


const InfoPage = () => {
    return (
        <div>
            <MainHeader></MainHeader>
            <TextResponsive
                size="large"
                content="Well, I guess it works..."
                type="normal"
            >
            </TextResponsive>
        </div>
    );
};

export default InfoPage;