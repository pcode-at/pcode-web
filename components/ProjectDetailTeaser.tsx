import React from 'react';
import { PcodeShape } from '../components/PcodeShape';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { ActionButton } from './ActionButton';
import { CopyText, FontStyle } from './CopyText';
import styled from 'styled-components';

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

    const GraphicLayout = styled(Box)`
        position: relative;
        margin-left: -30%;
        width: 100%;
    `;

    const TextLayout = styled(Box)`
        position: relative;
        width: 100%;
    `;

    const CenteredText = styled(Box)`
        text-align: left;
    `;

    const StyledSectionHeadline = styled(CopyText)`
        margin-bottom: 1rem;
        font-size: 250%;
    `;

    const StyledCopyText = styled(CopyText)`
        margin-bottom: 1rem;
        margin-right: 10%;
        max-width: 700px;
    `;

    return (
        <div className={className}>
            <Flex alignItems="center" justifyContent="space-between">
                <Box width={2 / 6}>
                    <GraphicLayout>
                        <PcodeShape color={Color.Primary} />
                        <StyledImage src={imageSrc} />
                    </GraphicLayout>
                </Box>
                <TextLayout>
                    <CenteredText>
                        <StyledSectionHeadline
                            color={headlineColor}
                            fontStyle={FontStyle.Normal}
                        >
                            {headline}
                        </StyledSectionHeadline>
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
                    </CenteredText>
                </TextLayout>
            </Flex>
        </div>
    );
};
