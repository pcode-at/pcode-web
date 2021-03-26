import React from 'react';
import { DeprecatedColor } from '../DeprecatedColor.enum';
import { Box, Flex, Image, Text } from 'rebass';
import { CopyText, FontStyle } from './CopyText';
import styled, { css } from 'styled-components';
import { ImageBubbleDeprecated } from './ImageBubbleDeprecated';

type Props = {
    color: DeprecatedColor;
    personName?: string;
    personPosition?: string;
    className?: string;
    imageSource: string;
    variant?: "overlay" | "shifted"
};

export const PersonBubbleDeprecated: React.FC<Props> = ({
    color = DeprecatedColor.Primary,
    className,
    personName = "John Doe",
    personPosition = "Chief Anonymous Officer",
    imageSource,
    variant = "overlay"
}) => {

    const PersonBubbleLayout = styled(Flex)`
        align-items: center;
        flex-direction: column;
    `;
    const PersonNameLayout = styled(Box)`
        margin-top: 12em;
        font-size: 130%;
    `;
    const TextPositionStyle = styled(Box)`
        text-align: center;
    `;
    const PersonPositionLayout = styled(Box)`
        font-size: 130%;
    `;
    const StyledImageBubbleLayout = styled(ImageBubbleDeprecated)`
        position: absolute;
        width: 300px;
    `;

    return (
        <div className={className}>
            <PersonBubbleLayout>
                <StyledImageBubbleLayout 
                    imageSource={imageSource}
                    variant={variant}
                    color={color}
                />
                
                <PersonNameLayout>
                    <TextPositionStyle>
                        <CopyText 
                            fontStyle={FontStyle.Normal}
                            color={color} 
                        >
                            {personName}
                        </CopyText>
                    </TextPositionStyle>
                </PersonNameLayout>
                
                <PersonPositionLayout>
                    <TextPositionStyle>
                        <CopyText 
                            fontStyle={FontStyle.Light} 
                            color={color}
                        >
                            {personPosition}
                        </CopyText>
                    </TextPositionStyle>
                </PersonPositionLayout>
            </PersonBubbleLayout>
        </div>
    );

};

