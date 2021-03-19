import React from 'react';
import BubbleSvg from '../assets/bubble.svg?sprite';
import { Color } from '../Color.enum';
import { styled } from '../stitches.config';
import { theme } from '../theme';

type Props = {
    width?: string;
    color?: string;
};

export const BubbleBlank: React.FC<Props> = ({
    width = '45%',
    color = theme.Bubble.Background.Color.Blue,
}) => {

    let BubbleLayout = styled('div', {
        width: width,
    })

    let Bubble = styled(BubbleSvg, {
        width: '100%',
        color: color,
    })

    return (
        <BubbleLayout>
            <Bubble/>
        </BubbleLayout>
    );
};

// OLD VERSION -- keeping code until new bubble component is finished and the old version can be replaced 

type Props2 = {
    width?: string;
    color?: Color;
    layout?: "shifted" | "centered";
};

export const Bubble: React.FC<Props2> = ({
    width = "100%",
    color = Color.Primary,
    layout = "shifted"
}) => {

    // let BubbleLayout = styled(Box)`
    //     margin-right: 4%;
    // `;

    // if ( layout == "centered" ){
    //     BubbleLayout = styled(Box)`
    //         transform: rotateZ(-195deg);
    //         margin-right: 1%;
    //     `;
    // }

    return (
        <React.Fragment>
            {/* <BubbleLayout>
                <BubbleSvg
                    style={{color: themeDeprecated.colors[color], width: width, layout: layout}}
                />
            </BubbleLayout> */}
        </React.Fragment>
    );
};
