import React from 'react';
import '../components/text.scoped.css';

type textProps = {
    color?: "white" | "black",
    size: "small" | "medium" | "large",
    content: string
};

const TextMain = ({color, size, content}: textProps) => {
    return (
        <div className={`Text text-${size} text-${color}`}>
            {content}
        </div>
    );
};

export default TextMain;