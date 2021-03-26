import React from 'react';
import { Button } from 'rebass';
import { themeDeprecated } from '../themeDeprecated';
import { theme } from '../theme';
import { DeprecatedColor } from '../DeprecatedColor.enum';
import { CopyText, FontStyle } from './CopyText';
import styled, { css } from 'styled-components';

type Props = {
    //appearance: 'small' | 'large';
    color?: DeprecatedColor;
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

export const ActionButtonDeprecated: React.FC<Props> = ({
    color = DeprecatedColor.Primary,
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
                <CopyText color={DeprecatedColor.White} fontStyle={FontStyle.Light}>
                    {label}
                </CopyText>
            </Button>
        </div>
    );
};
