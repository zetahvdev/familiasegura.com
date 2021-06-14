import FS_logo from 'src/assets/imgs/Familia_Segura.png';

import HeaderLogo from 'src/components/headerlogo/headerlogo';
import './sass/headerlogoframe.css';

const HeaderLogoFrame = ({width, height, measure_unit}) => {
    return (
        <div
            className="HeaderLogo-frame"
            style={{
                width: width + measure_unit,
                height: height + measure_unit
            }}
        >
            <HeaderLogo logo={FS_logo}></HeaderLogo>
        </div>
            
    );
};

export default HeaderLogoFrame;