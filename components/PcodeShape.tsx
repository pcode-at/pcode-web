import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import styled from '@xstyled/styled-components';

type Props = {
    width?: string;
    color?: Color;
};

export const PcodeShape: React.FC<Props> = ({
    width = '100%',
    color = Color.Primary,
}) => {
    const StyledPcodeShapeSvg = styled(PcodeShapeSvg)`
        color: ${color};
        width: ${width};
    `;
    return (
        <React.Fragment>
            <StyledPcodeShapeSvg />
        </React.Fragment>
    );
};
