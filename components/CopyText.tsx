import React from 'react';
import { Color } from '../Color.enum';
import styled from '@xstyled/styled-components';

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
    const StyledText = styled.p`
        color: ${color};
        font-family: ${fontStyle};
        font-weight: ${fontStyle};
        /* Is there a better way to apply the margin on the text? */
        margin: 0;
    `;
    return (
        <div className={className}>
            <StyledText>{children}</StyledText>
        </div>
    );
};
