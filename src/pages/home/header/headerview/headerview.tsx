import React from 'react';
import Text from '../../../../components/text'
import '../headerview/sass/headerview.css'

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

const HeaderView = ({titleText, subtitleText, ...props}: HeaderViewProps) => {
    return (
        <div className="HeaderView">
            <h5>
                <Text
                    content={titleText.content}
                    size={titleText.size}
                    color={titleText.color}
                ></Text>
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