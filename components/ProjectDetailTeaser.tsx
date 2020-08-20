import React from 'react';
import { PcodeShape } from '../components/PcodeShape';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { ActionButton } from './ActionButton';
import { CopyText, FontStyle } from './CopyText';
import styled from 'styled-components';

type Props = {
    headline: string;
    description: string;
    imageSrc: string;
    headlineColor: Color;
    onClick?(): void;
    className?: string;
};

export const ProjectDetailTeaser: React.FC<Props> = ({
    description,
    headline,
    imageSrc,
    headlineColor,
    onClick,
    className,
}) => {
    const StyledImageLayout = styled.img`
        width: 100%;
        position: absolute;
        top: 45%;
        left: 88%;
        transform: translateX(-50%) translateY(-50%);
    `;

    const StyledWebImageLayout = styled.img`
        width: 33%;
        position: absolute;
        top: 17%;
        left: 58%;
        transform: translateX(50%) translateY(-61%) translateZ(-9px)
            rotateX(0deg) rotateY(27deg) rotateZ(0deg);
    `;

    const GraphicLayout = styled(Box)`
        position: relative;
        margin-left: -30%;
        width: 100%;
    `;

    const TextLayout = styled(Box)`
        position: relative;
        text-align: left;
        width: 100%;
    `;

    const StyledSectionHeadlineLayout = styled(CopyText)`
        margin-bottom: 1rem;
        font-size: 250%;
    `;

    const StyledCopyText = styled(CopyText)`
        margin-bottom: 1rem;
        margin-right: 10%;
        max-width: 700px;
    `;

    const StyledLayout = styled(Box)`
        position: ablsolute;
        perspective: 120px;
        -webkit-perspektive: 120px;
    `;

    return (
        <div className={className}>
            <Flex alignItems="center" justifyContent="space-between">
                <Box width={2 / 6}>
                    <GraphicLayout>
                        <PcodeShape color={Color.Primary} />
                        <StyledImageLayout src="../static/iPhone.svg" />
                        <StyledLayout>
                            <StyledWebImageLayout src={imageSrc} />
                        </StyledLayout>
                    </GraphicLayout>
                </Box>
                <TextLayout>
                    <StyledSectionHeadlineLayout
                        color={headlineColor}
                        fontStyle={FontStyle.Normal}
                    >
                        {headline}
                    </StyledSectionHeadlineLayout>
                    <StyledCopyText
                        color={Color.Secondary}
                        fontStyle={FontStyle.Light}
                    >
                        {description}
                    </StyledCopyText>
                    <ActionButton
                        label="learn more"
                        color={Color.Secondary2}
                        onClick={onClick}
                    />
                </TextLayout>
            </Flex>
        </div>
    );
};
