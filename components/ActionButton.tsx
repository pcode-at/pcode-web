import React from 'react';
import { Button } from 'rebass';
<<<<<<< HEAD
import { themeDeprecated } from '../themeDeprecated';
=======
../themeDeprecated
>>>>>>> a1406cc18eb21743f80ff948b98dccfbf89dd9ef
import { theme } from '../theme';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';
import styled, { css } from 'styled-components';

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
    return (
        <div className={className}>
            <Button
                backgroundColor={
                    noBackground ? 'transparent' : themeDeprecated.colors[color]
                }
                onClick={onClick}
                style={{
                    padding,
                    borderRadius: '15px',
                    cursor: 'pointer',
                }}
            >
                <CopyText color={Color.White} fontStyle={FontStyle.Light}>
                    {label}
                </CopyText>
            </Button>
        </div>
    );
};
