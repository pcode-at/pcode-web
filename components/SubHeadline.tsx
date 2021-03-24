import React from 'react';
import { DeprecatedColor } from '../DeprecatedColor.enum';
import { CopyText, FontStyle } from './CopyText';

type Props = {
    color: DeprecatedColor;
    fontStyle: FontStyle;
    className?: string;
};

export const SubHeadline: React.FC<Props> = ({
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
