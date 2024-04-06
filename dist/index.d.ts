import React, { ReactNode } from 'react';

type propsInput = {
    children: ReactNode | ReactNode[];
    id: string;
    name?: string;
    type?: string;
    width?: string;
    height?: string;
};
declare const Input: ({ children, id, type, name, width, height }: propsInput) => React.JSX.Element;

export { Input };
