import React from 'react';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';
import styled, { css } from '@xstyled/styled-components';

type Props = {
    //appearance: 'small' | 'large';
    color?: Color;
    label: string;
    padding?: string;
    noBackground?: boolean;
    onClick?(): void;
    className?: string;
};

const appearances = {
    small: css`
        font-size: 10px;
    `,
    large: css`
        font-size: 20px;
    `,
};

export const ActionButton: React.FC<Props> = ({
    color = Color.Primary,
    label,
    onClick,
    padding = '0.2rem 2.8rem',
    noBackground = false,
    className,
}) => {
    const Button = styled.button`
        background-color: ${noBackground ? 'transparent' : color};
        border-radius: 15px;
        border: none;
        cursor: pointer;
        padding: ${padding};
    `;
    return (
        <div className={className}>
            <Button onClick={onClick}>
                <CopyText color={Color.White} fontStyle={FontStyle.Light}>
                    {label}
                </CopyText>
            </Button>
        </div>
    );
};
