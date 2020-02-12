import React from 'react';
import { Button } from 'rebass';

import { theme } from '../theme';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';

type TActionButtonProps = {
    color?: Color;
    label: string;
    padding?: string;
    noBackground?: boolean;
    onClick?(): void;
    className?: string;
};

export const ActionButton: React.FC<TActionButtonProps> = ({
    color = Color.Primary,
    label,
    onClick,
    padding = '0.2rem 2.8rem',
    noBackground = false,
    className
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
                    borderRadius: '15px',
                    cursor: 'pointer',
                }}
            >
                <CopyText color={Color.White} fontStyle={FontStyle.Light}>{label}</CopyText>
            </Button>
        </div>
    );
};
