import React from 'react';
import '../components/text.scoped.css';

const TextMain = ({size, content}) => {
    return (
        <div className="Text">
            {content}
        </div>
    );
};

export default TextMain;