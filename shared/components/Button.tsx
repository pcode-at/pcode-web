import { Button as RebassButton } from 'rebass';
import React from 'react';
import styled, { css } from 'styled-components';
import { Color } from '../../Color.enum';
import { theme } from '../../theme';
import { Text } from './Text';

type TButtonProps = {
    color?: Color;
    label: string;
    padding?: string;
    noBackground?: boolean;
    onClick?(): void;
    variant: 'primary' | 'secondary' | 'secondary2';
    className?: string;
};

const variants = {
    primary: css`
        background-color: ${theme.colors[Color.Primary]};
    `,
    secondary: css`
        background-color: ${theme.colors[Color.Secondary]};
    `,
    secondary2: css`
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
        font-size: 80%;
        width: 100%;
        border-radius: 15px;
        cursor: pointer;
        padding: 0.5em 2em;
        ${variants[variant]};
    `;

    return (
        <div className={className}>
            <StyledRebassButton onClick={onClick}>
                <Text color={Color.White} variant={'light'}>
                    {label}
                </Text>
            </StyledRebassButton>
        </div>
    );
};
