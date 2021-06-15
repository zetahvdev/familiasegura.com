import 'src/components/text.scoped.css';

export interface textProps {
    color?: "white" | "main" | "secondary" | "alert",
    size: "small" | "medium" | "large" | "huge" | "title-size",
    content: string,
    css?: string
};

const TextMain = ({color, size, content, css}: textProps) => {
    return (
        <div className={`Text text-${size} text-${color}`}>
            <div className={`${css}`}>
                {content}
            </div>
        </div>
    );
};

export default TextMain;