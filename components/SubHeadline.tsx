import React from 'react';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';

type TSubHeadlineProps = {
    color: Color;
    fontStyle: FontStyle;
    className?: string;
};

export const SubHeadline: React.FC<TSubHeadlineProps> = ({
     children,
     color,
     fontStyle,
     className,
 }) => {

    return (
        <div className={className}>
            <CopyText fontStyle={fontStyle} color={color}>
                {children}
            </CopyText>
        </div>
    );
};
