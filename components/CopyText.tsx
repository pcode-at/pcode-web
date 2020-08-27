import React from 'react';
import { Color } from '../Color.enum';
import { Text } from 'rebass';
import styled from 'styled-components';
import fluid from 'fluid-system';
import typography from '@styled-system/typography';
import theme from '../theme';
import { space } from 'styled-system';

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
    const FluidText = styled(Text)`
        ${fluid(typography)}
    `;
    return (
        <div className={className}>
            <FluidText
                fontSize={[1, 2, 3]}
                color={color}
                fontFamily={theme.font[fontStyle].fontFamily}
                fontWeight={theme.font[fontStyle].fontWeight}
            >
                {children}
            </FluidText>
        </div>
    );
};
