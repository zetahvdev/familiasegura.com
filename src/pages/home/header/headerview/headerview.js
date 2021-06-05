import React from 'react';
import Text from '../../../../components/text'
import '../headerview/sass/headerview.css'

const HeaderView = () => {
    return (
        <div className="HeaderView">
            <h5>
                <Text
                    content="FAMILIA SEGURA"
                    size="huge"
                    color="white"></Text>
                <p className="add-letter-spacing">
                    <Text
                        content="UN SISTEMA PARA TRABAJAR EN FAMILIA"
                        size="title-size"
                        color="main"
                    ></Text>
                </p>
            </h5>
        </div>
    );
};

export default HeaderView;