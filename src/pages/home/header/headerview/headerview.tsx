import Text from 'src/components/Text'
import './sass/HeaderView.css'
import TextResponsive from 'src/components/TextResponsive/TextResponsive';

interface HeaderViewProps {
    titleText: {
        content: string,
        size: "small" | "medium" | "large" | "huge" | "title-size",
        color: "main" | "secondary" | "white" | "alert"
    },
    subtitleText: {
        content: string,
        size: "small" | "medium" | "large" | "huge" | "title-size",
        color: "main" | "secondary" | "white" | "alert"
    }
}

const HeaderView = ({titleText, subtitleText}: HeaderViewProps) => {
    return (
        <div className="HeaderView">
            <h5>
                <TextResponsive
                    content={titleText.content}
                    size={titleText.size}
                    color={titleText.color}
                    type="normal"
                ></TextResponsive>
                <div className="add-letter-spacing">
                    <Text
                        content={subtitleText.content}
                        size={subtitleText.size}
                        color={subtitleText.color}
                    ></Text>
                </div>
            </h5>
        </div>
    );
};

export default HeaderView;