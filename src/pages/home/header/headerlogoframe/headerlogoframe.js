import FS_logo from 'src/assets/imgs/Familia_Segura.png';

import HeaderLogo from 'src/components/LogoProvider/LogoProvider';
import './sass/HeaderLogoFrame.css';

const HeaderLogoFrame = () => {
    return (
        <div
            className="HeaderLogo-frame"
        >
            <HeaderLogo logo={FS_logo}></HeaderLogo>
        </div>
            
    );
};

export default HeaderLogoFrame;