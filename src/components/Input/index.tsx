import React, { ReactNode, useState } from "react";
import classes from './styles.module.scss'

type propsInput = {
    children: ReactNode | ReactNode[];
    id: string;
    name?: string;
    type?: string;
    width?: string;
    height?: string;
};

const Input = ({ children, id, type = 'text', name, width = '26rem', height = '4rem' }: propsInput) => {
    const [inputValue, setInputValue] = useState("");

    const [isInputFocus, setIsInputFocus] = useState(false);

    const handleBlur = () => {
        if (inputValue === "") {
            setIsInputFocus(false);
        }
    };

    return (
        <label htmlFor={id} className={classes.label} style={{
            height: height,
            width: width
        }}>
            <input
                className={classes.input}
                type={type}
                name={name}
                id={id}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsInputFocus(true)}
                onBlur={handleBlur}
            />
            <span
                className={`${classes.span} ${isInputFocus
                    ? classes.input_focus
                    : classes.input_blur
                    } `}
            >
                {children}
            </span>
        </label>
    );
};

export default Input;