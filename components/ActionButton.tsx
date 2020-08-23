import React from 'react';
import { Button } from 'rebass';

import { theme } from '../theme';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';
import styled from 'styled-components';

export type appearance = 'small' | 'large';

type Props = {
    color?: Color;
    label: string;
    padding?: string;
    noBackground?: boolean;
    onClick?(): void;
    className?: string;
    appearance?: appearance;
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
    let fontSize = '';
    if (appearance == 'large') {
        fontSize = '50px';
    }

    return (
        <div className={className}>
            <Button
                backgroundColor={
                    noBackground ? 'transparent' : theme.colors[color]
                }
                onClick={onClick}
                style={{
                    padding,
                    borderRadius: appearance == "small" ? '15px' : '50px',
                    cursor: 'pointer',
                    fontSize,
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
