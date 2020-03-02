import { Text as RebassText } from 'rebass';
import React from 'react';
import styled, { css } from 'styled-components';
import { Color } from '../../Color.enum';
import { theme } from '../../theme';
import { typography } from 'styled-system';
import fluid from 'fluid-system';

const { light, normal } = theme.font;

type TTextProps = {
    color: Color;
    className?: string;
    variant: 'light' | 'normal' | 'large';
};

const variants = {
    light: css`
        font-weight: ${light.fontWeight};
    `,
    normal: css`
        font-weight: ${normal.fontWeight};
    `,
    large: css`
        font-weight: ${light.fontWeight};
        font-size: 200%;
    `,
};

export const Text: React.FC<TTextProps> = ({
    children,
    color,
    className,
    variant,
}) => {
    const StyledRebassText = styled(RebassText)`
        font-family: ${light.fontFamily};
        ${variants[variant]};
    `;

    return (
        <div className={className}>
            <StyledRebassText color={color}>
                {children}
            </StyledRebassText>
        </div>
    );
};
