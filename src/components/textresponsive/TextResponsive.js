import Text from 'src/components/text';
import './sass/TextResponsive.css';

const TextResponsive = ({type, ...props}) => {

    return (
        <div className="TextResponsive">
            <Text {...props} css={`responsive-${type}`} ></Text>
        </div>
    );
};

export default TextResponsive;