import React from 'react';

import { Color } from '../Color.enum';
import { themeDeprecated } from '../themeDeprecated';
import { Bubble } from './Bubble';
import styled from 'styled-components';
import { Flex, Image, Box } from 'rebass';

type Props = {
    imageSource: string;
    color?: Color;
    className?: string;
    variant?: "overlay" | "shifted";
};

/**
 VARIANTS
 (1) OVERLAY
 - portrait-bubble within background-bubble
 - both portrait- and background-bubble are leaned right 
 
 (2) SHIFTED
 - portrait-bubble shifted right from background-bubble
 - background-bubble is centered 
 - portrait-bubble has an slight offset and is leaned to the right 
 */

export const ImageBubble: React.FC<Props> = ({
    color = Color.SecondaryDark,
    imageSource,
    className,
    variant = "overlay"
}) => {

    let StyledImage = styled(Image)``;
    let StyledImageLayout = styled.div``;
    let BubbleLayout = styled(Box)``;

    switch(variant){
        case "overlay":
            const StyledFlexLayout = styled(Flex)`
                align-items: center;
                flex-direction: column;
                justify-content: center;
                position: relative;
            `;

            StyledImage = styled(Image)`
                mask: url(../static/bubble.svg);
                mask-position: top;
                mask-repeat: no-repeat;
                mask-size: 91%;
            `;
            
            StyledImageLayout = styled.div`
                margin-right: 5%;
                position: absolute;
                max-width: 71%;
                top: 5%;
            `;
            BubbleLayout = styled(Box)`
                width: 70%;
            `;

            return (
                <div className={className}>
                    <StyledFlexLayout>
                        <BubbleLayout>
                            <BubbleBlank width="100%" color={color} />
                        </BubbleLayout>
                        <StyledImageLayout>
                            <StyledImage src={imageSource} />
                        </StyledImageLayout>
                    </StyledFlexLayout>
                </div>
            );

        case "shifted":

            const ImageBubbleLayout = styled(Flex)`
                align-items: center;
                flex-direction: column;
            `;

            StyledImageLayout = styled.div`
                position: absolute;
                width: 300px;
            `;
            StyledImage = styled(Image)`
                mask: url(../static/pcode_shape.svg);
                mask-position: top;
                mask-repeat: no-repeat;
                mask-size: 70%;
            `;
            BubbleLayout = styled(Box)`
                position: relative;
                margin-left: -40px;
                transform: rotate(-10deg);
                width: 210px;
            `;

            return (
                <div className={className}>
                    <ImageBubbleLayout>
                        <BubbleLayout>
                            <BubbleBlank color={color}/> 
                        </BubbleLayout>
                        <StyledImageLayout>
                            <StyledImage src={imageSource}/>
                        </StyledImageLayout>
                    </ImageBubbleLayout>
                </div>
            );
    } 
};