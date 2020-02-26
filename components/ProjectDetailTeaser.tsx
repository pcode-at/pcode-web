import React from 'react';
import { PcodeShape } from '../components/PcodeShape';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import { Button } from '../shared/components/Button';
import { FontStyle, Text } from '../shared/components/Text';

type TProjectDetailTeaserProps = {
    headline: string;
    description: string;
    imageSrc: string;
    headlineColor: Color;
    onClick?(): void;
    className?: string;
};

export const ProjectDetailTeaser: React.FC<TProjectDetailTeaserProps> = ({
    description,
    headline,
    imageSrc,
    headlineColor,
    onClick,
    className,
}) => {
    const StyledImage = styled.img`
        width: 70%;
        position: absolute;
        top: 50%;
        left: 80%;
        transform: translateX(-50%) translateY(-50%);
    `;

    const GraphicWrapper = styled(Box)`
        position: relative;
        margin-left: -30%;
        width: 100%;
    `;

    const TextWrapper = styled(Box)`
        position: relative;
        text-align: left;
        width: 100%;
    `;

    const StyledSectionHeadline = styled(Text)`
        margin-bottom: 1rem;
        font-size: 250%;
    `;

    const StyledText = styled(Text)`
        margin-bottom: 1rem;
        margin-right: 10%;
        max-width: 700px;
    `;

    return (
        <div className={className}>
            <Flex alignItems="center" justifyContent="space-between">
                <Box width={2 / 6}>
                    <GraphicWrapper>
                        <PcodeShape color={Color.Primary} />
                        <StyledImage src={imageSrc} />
                    </GraphicWrapper>
                </Box>
                <TextWrapper>
                    <StyledSectionHeadline
                        color={headlineColor}
                        fontStyle={FontStyle.Normal}
                    >
                        {headline}
                    </StyledSectionHeadline>
                    <StyledText
                        color={Color.Secondary}
                        fontStyle={FontStyle.Light}
                    >
                        {description}
                    </StyledText>
                    <Button
                        variant={'primary'}
                        label="learn more"
                        onClick={onClick}
                    />
                </TextWrapper>
            </Flex>
        </div>
    );
};
