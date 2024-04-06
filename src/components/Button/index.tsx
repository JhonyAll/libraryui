import classes from './styles.module.scss'
import React from 'react';

interface propsButton {
    children: string | JSX.Element | JSX.Element[];
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    width?: string;
    height?: string;
}

const Button = ({
    children,
    handleClick = () => { },
    width = 'auto',
    height = 'auto'
}: propsButton) => {
    return (
        <button
            onClick={handleClick}
            type="submit"
            className={classes.button}
            style={{
                width: width,
                height: height
            }}
        >
            {children}
        </button>
    );
};

export default Button;
