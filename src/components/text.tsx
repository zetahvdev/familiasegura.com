import React from 'react';
import '../components/text.scoped.css';

type textProps = {
    color?: "white" | "main" | "secondary" | "alert",
    size: "small" | "medium" | "large" | "huge" | "title-size",
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