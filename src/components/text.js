import React from 'react';
import '../components/text.scoped.css';

const TextMain = ({color, size, content}) => {
    return (
        <div className={`Text text-${size} text-${color}`}>
            {content}
        </div>
    );
};

export default TextMain;