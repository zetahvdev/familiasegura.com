import Text, {textProps} from 'src/components/Text';
import './sass/TextResponsive.css';

interface textResponsiveProps extends textProps {
    type: "normal" | "full-on-mobile"
}

const TextResponsive = (props: textResponsiveProps) => {
    
    return (
        <div className="TextResponsive">
            <Text
                content={props.content}
                size={props.size}
                color={props.color}
                css={`responsive-${props.type}`} 
            ></Text>
        </div>
    );
};

export default TextResponsive;