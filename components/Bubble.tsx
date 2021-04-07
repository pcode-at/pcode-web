import React from 'react';
import BubbleSvg from '../assets/bubble.svg?sprite';
import { DeprecatedColor } from '../DeprecatedColor.enum';
import { styled } from '../stitches.config';
import { theme } from '../theme';

type Props = {
    width?: string;
    color?: string;
};

const Bubble = styled(BubbleSvg, {
    width: '100%',
    variants: {
        color: {
            primary: {
                color: theme.Bubble.Background.Color.Red,
            },
            secondary: {
                color: theme.Bubble.Background.Color.Blue,
            },
            tertiary: {
                color: theme.Bubble.Background.Color.Green,
            },
            white: {
                color: theme.Bubble.Background.Color.White,
            }
        }
    },
    defaultVariant: {
        color: theme.Bubble.Background.Color.Blue,
    }
})

export const BubbleBlank: React.FC<Props> = ({
    width = '570px',
    color = 'secondary',
}) => {

    let BubbleLayout = styled('div', {
        width: width,
    })

    return (
        <BubbleLayout>
            <Bubble color={color}/>
        </BubbleLayout>
    );
};

// OLD VERSION -- keeping code until new bubble component is finished and the old version can be replaced 
type Props2 = {
    width?: string;
    color?: DeprecatedColor;
    layout?: "shifted" | "centered";
}

export const BubbleDeprecated: React.FC<Props2> = ({
    width = "100%",
    color = DeprecatedColor.Primary,
    layout = "shifted"
}) => {

    // let BubbleLayout = styled(Box)`
    //     margin-right: 4%;
    // `;

    // if ( layout == "centered" ){
    //     // BubbleLayout = styled(Box)`
    //     //     transform: rotateZ(-195deg);
    //     //     margin-right: 1%;
    //     // `;
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