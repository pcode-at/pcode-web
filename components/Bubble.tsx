import React from 'react';

import BubbleSvg from '../assets/bubble.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../themeDeprecated';
import styled from 'styled-components';
import { Box } from 'rebass';

type Props = {
    width?: string;
    color?: Color;
    layout?: "shifted" | "centered";
};

export const Bubble: React.FC<Props> = ({
    width = "100%",
    color = Color.Primary,
    layout = "shifted"
}) => {

    let BubbleLayout = styled(Box)`
        margin-right: 4%;
    `;

    if ( layout == "centered" ){
        BubbleLayout = styled(Box)`
            transform: rotateZ(-195deg);
            margin-right: 1%;
        `;
    }

    return (
        <React.Fragment>
            <BubbleLayout>
                <BubbleSvg
                    style={{color: theme.colors[color], width: width, layout: layout}}
                />
            </BubbleLayout>
        </React.Fragment>
    );
};
