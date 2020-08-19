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
    className?: string;
};

export const ServiceReference: React.FC<Props> = ({
    title,
    children,
    imageSource,
    buttonClick,
    color = Color.Secondary,
    buttonColor = Color.Secondary2,
    className,
}) => {
    const TextLayout = styled(Box)`
        width: 70%;
        margin-bottom: 2rem;
        margin-top: 1rem;
    `;

    const ServiceReferenceLayout = styled(Box)`
        display: grid;
        grid-template-columns: 2fr 5fr 6fr;
        grid-template-areas: '. text-block image-block';
        width: 100%;
        justify-content: center;
        align-items: bottom;
    `;

    const InfoLayout = styled(Box)`
        grid-area: text-block;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
    `;

    const ImageLayout = styled(Box)`
        grid-area: image-block;
    `;

    return (
        <div className={className}>
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
                    <Image src={imageSource} />
                </ImageLayout>
            </ServiceReferenceLayout>
        </div>
    );
};
