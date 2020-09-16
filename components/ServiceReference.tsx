import React from 'react';
import { Color } from '../Color.enum';
import { Box, Text, Button, Heading, Image } from 'rebass';
import { Input, Textarea } from '@rebass/forms';
import { theme } from '../theme';
import { CONSTANTS } from '../shared/constants';
import styled from 'styled-components';
import { ActionButton } from './ActionButton';

type Props = {
    title: string;
    imageSource: string;
    buttonClick(): void;
    buttonColor?: Color;
    color?: Color;
};

export const ServiceReference: React.FC<Props> = ({
    title,
    children,
    imageSource,
    buttonClick,
    color = Color.Secondary,
    buttonColor = Color.Secondary2,
}) => {
    const TextLayout = styled(Box)`
        margin-bottom: 2rem;
        margin-top: 1rem;
        width: 70%;
    `;

    const ServiceReferenceLayout = styled(Box)`
        align-items: bottom;
        display: grid;
        grid-template-areas: '. text-block image-block';
        grid-template-columns: 2fr 5fr 6fr;
        justify-content: center;
        width: 100%;
    `;

    const InfoLayout = styled(Box)`
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        grid-area: text-block;
        justify-content: flex-end;
    `;

    const ImageLayout = styled(Box)`
        grid-area: image-block;
    `;

    const StyledProjectImage = styled.img`
        margin-left: 10%;
        width: 80%;
    `;

    return (
        <ServiceReferenceLayout>
            <InfoLayout>
                <Heading
                    color={theme.colors[color]}
                    fontSize={[5, 6, 7]}
                    fontFamily={theme.font.normal.fontFamily}
                    fontWeight={theme.font.light.fontWeight}
                >
                    {title}
                </Heading>
                <TextLayout>
                    <Text
                        fontSize={[3]}
                        fontWeight={theme.font.normal.fontWeight}
                        fontFamily={theme.font.light.fontFamily}
                        color={theme.colors[color]}
                    >
                        {children}
                    </Text>
                </TextLayout>
                <ActionButton
                    color={buttonColor}
                    label="learn more"
                    padding="0.4rem 2rem"
                    onClick={buttonClick}
                />
            </InfoLayout>
            <ImageLayout>
                <StyledProjectImage src={imageSource} />
            </ImageLayout>
        </ServiceReferenceLayout>
    );
};
