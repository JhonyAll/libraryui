import classes from './styles.module.scss'
import React from 'react';

interface propsButton {
    children: string | JSX.Element | JSX.Element[];
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    width?: string;
    height?: string;
    borderRadius?: string;
}

const Button = ({
    children,
    handleClick = () => { },
    width = 'auto',
    height = 'auto',
    borderRadius = '0.5rem'
}: propsButton) => {
    return (
        <button
            onClick={handleClick}
            type="submit"
            className={classes.button}
            style={{
                width: width,
                height: height,
                borderRadius: borderRadius
            }}
        >
            {children}
        </button>
    );
};

export default Button;
