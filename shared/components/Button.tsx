import { Button as RebassButton } from 'rebass';
import React from 'react';
import styled, { css } from 'styled-components';
import { Color } from '../../Color.enum';
import { theme } from '../../theme';
import { FontStyle, Text } from './Text';

type TButtonProps = {
    color?: Color;
    label: string;
    padding?: string;
    noBackground?: boolean;
    onClick?(): void;
    variant: 'primary' | 'secondary';
    className?: string;
};

const variants = {
    primary: css`
        background-color: ${theme.colors[Color.Primary]};
    `,
    secondary: css`
        background-color: ${theme.colors[Color.Secondary2]};
    `,
};

export const Button: React.FC<TButtonProps> = ({
    label,
    onClick,
    className,
    variant,
}) => {
    const StyledRebassButton = styled(RebassButton)`
        width: 100%;
        border-radius: 15px;
        cursor: pointer;
        ${variants[variant]};
    `;

    return (
        <div className={className}>
            <StyledRebassButton onClick={onClick}>
                <Text color={Color.White} fontStyle={FontStyle.Light}>
                    {label}
                </Text>
            </StyledRebassButton>
        </div>
    );
};
