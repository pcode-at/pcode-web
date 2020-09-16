import React from 'react';
import { Button } from 'rebass';

import { theme } from '../theme';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';
import styled, { css } from 'styled-components';

type Props = {
    color?: Color;
    label: string;
    padding?: string;
    noBackground?: boolean;
    onClick?(): void;
    className?: string;
    appearance?: 'Small' | 'Large';
};

export const ActionButton: React.FC<Props> = ({
    color = Color.Primary,
    label,
    onClick,
    appearance = 'small',
    padding = appearance == 'small' ? '0.2rem 2.8rem' : '1.5rem 8rem',
    noBackground = false,
    className,
}) => {
    return (
        <div className={className}>
            <Button
                backgroundColor={
                    noBackground ? 'transparent' : theme.colors[color]
                }
                onClick={onClick}
                style={{
                    padding,
                    borderRadius: appearance == 'Small' ? '15px' : '50px',
                    cursor: 'pointer',
                    fontSize: appearance == 'Large' ? '50px' : '',
                }}
            >
                <CopyText
                    color={Color.White}
                    fontStyle={
                        appearance == 'small'
                            ? FontStyle.Light
                            : FontStyle.Normal
                    }
                >
                    {label}
                </CopyText>
            </Button>
        </div>
    );
};
