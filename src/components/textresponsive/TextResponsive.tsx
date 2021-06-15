import Text, {textProps} from 'src/components/text';
import './sass/TextResponsive.css';

interface FullProps extends textProps {
    type: "normal" | "full-on-mobile"
}

const TextResponsive = (props: FullProps) => {
    
    return (
        <div className="TextResponsive">
            <Text
                content={props.content}
                size={props.size}
                css={`responsive-${props.type}`} 
            ></Text>
        </div>
    );
};

export default TextResponsive;