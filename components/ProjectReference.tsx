import React from 'react';
import { PcodeShape } from '../components/PcodeShape';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import { Button } from '../shared/components/Button';
import { Text } from '../shared/components/Text';

type TProjectReferenceProps = {
    headline: string;
    description: string;
    imageSource: string;
    onClick?(): void;
    className?: string;
};

export const ProjectReference: React.FC<TProjectReferenceProps> = ({
    description,
    headline,
    imageSource,
    onClick,
    className,
}) => {
    const ProjectReferenceLayout = styled(Flex)`
        align-items: center;
        justify-content: space-between;
    `;
    const StyledImage = styled.img`
        width: 70%;
        position: absolute;
        top: 50%;
        left: 80%;
        transform: translateX(-50%) translateY(-50%);
    `;

    const ImageLayout = styled(Box)`
        position: relative;
        margin-left: -30%;
        width: 100%;
    `;

    const TextLayout = styled(Box)`
        position: relative;
        text-align: left;
        width: 100%;
    `;

    const StyledHeaderText = styled(Text)`
        margin-bottom: 1em;
    `;

    const DescriptionTextLayout = styled(Box)`
        margin-bottom: 1rem;
        margin-right: 10%;
        max-width: 700px;
    `;

    const LearnMoreButtonLayout = styled(Box)`
        float: left;
    `;

    return (
        <div className={className}>
            <ProjectReferenceLayout>
                <Box width={2 / 6}>
                    <ImageLayout>
                        <PcodeShape color={Color.Primary} />
                        <StyledImage src={imageSource} />
                    </ImageLayout>
                </Box>
                <TextLayout>
                    <StyledHeaderText color={Color.Primary} variant={'large'}>
                        {headline}
                    </StyledHeaderText>
                    <DescriptionTextLayout>
                        <Text color={Color.Secondary} variant={'light'}>
                            {description}
                        </Text>
                    </DescriptionTextLayout>

                    <LearnMoreButtonLayout>
                        <Button
                            variant={'secondary'}
                            label="learn more"
                            onClick={onClick}
                        />
                    </LearnMoreButtonLayout>
                </TextLayout>
            </ProjectReferenceLayout>
        </div>
    );
};
