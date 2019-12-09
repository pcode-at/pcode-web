import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../theme';

type TPcodeShape = {
    width?: string;
    color?: Color;
};

export const PcodeShape: React.FC<TPcodeShape> = ({
    width = '100%',
    color = Color.Primary,
}) => {
    return (
        <React.Fragment>
            <PcodeShapeSvg
                style={{ color: theme.colors[color], width: width }}
            />
        </React.Fragment>
    );
};
