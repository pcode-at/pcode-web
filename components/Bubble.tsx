import React from 'react';

import BubbleSvg from '../assets/bubble.svg?sprite';
import { Color } from '../Color.enum';
<<<<<<< HEAD
import { themeDeprecated } from '../themeDeprecated';
=======
import { theme } from '../themeDeprecated';
>>>>>>> a1406cc18eb21743f80ff948b98dccfbf89dd9ef
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
                    style={{color: themeDeprecated.colors[color], width: width, layout: layout}}
                />
            </BubbleLayout>
        </React.Fragment>
    );
};
