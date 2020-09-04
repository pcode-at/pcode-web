import React from 'react';
import { Color } from '../Color.enum';
import { styled } from '../stitches.config';

export enum FontStyle {
    Normal = 'normal',
    Light = 'light',
}

type Props = {
    color: Color;
    fontStyle: FontStyle;
    className?: string;
};

export const CopyText: React.FC<Props> = ({
    children,
    color,
    fontStyle,
    className,
}) => {
    const Headline = styled('h1', {
        backgroundColor: 'red',
        color: `$${color}`,
        width: '100%',
        textAlign: 'center',
        fontSize: '$headline2',

        desktop: {
            fontSize: '$headline1',
        },
    });

    return (
        <div className={className}>
            <Headline>{children}</Headline>
        </div>
    );
};
