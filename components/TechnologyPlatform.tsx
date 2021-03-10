import React from 'react';
import { Box, Flex, Heading, Text } from 'rebass';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { Platform } from './Platform';
import { PlatformType } from '../shared/PlatformType.enum';
import styled from 'styled-components';
import { ActionButton } from './ActionButton';

type Props = {
    name: string;
    platformType: PlatformType;
    languages: string[];
    technologies: string[];
    onClick?(): void;
    className?: string;
};

export const TechnologyPlatform: React.FC<Props> = ({
    name,
    platformType,
    languages,
    technologies,
    onClick,
    className,
}) => {
    const { light, normal } = theme.font;

    const StyledHeading = styled(Heading)`
        font-family: ${light.fontFamily};
        font-weight: ${light.fontWeight};
        font-size: 200%;
        text-align: center;
    `;

    const HeadingLayout = styled.div`
        margin-top: 1em;
        margin-bottom: 2em;
    `;

    const FlexStyle = styled(Flex)`
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `;

    const PlatformSvgLayout = styled.div`
        width: 60%;
        height: 170px;
    `;

    const StyledSubHeading = styled(Heading)`
        font-family: ${light.fontFamily};
        font-weight: ${light.fontWeight};
    `;

    const SubHeadingLayout = styled.div`
        padding-top: 0.5em;
        padding-bottom: 0.2em;
    `;

    const HeadingAndListContainer = styled.div`
        font-family: ${light.fontFamily};
        font-weight: ${light.fontWeight};
        align-content: center;
    `;
  
    const PlatformLayout = styled(Box)`
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    return (
        <div className={className}>
            <FlexStyle>
                <HeadingLayout>
                    <StyledHeading fontFamily={normal.fontFamily}>
                        {name}
                    </StyledHeading>
                </HeadingLayout>

                <PlatformSvgLayout>
                    <PlatformLayout>
                        <Platform type={platformType} />
                    </PlatformLayout>
                </PlatformSvgLayout>

                <div>
                    <SubHeadingLayout>
                        <StyledSubHeading
                            color={Color.Secondary2}
                            fontFamily={normal.fontFamily}
                        >
                            Language
                        </StyledSubHeading>
                    </SubHeadingLayout>
                    <HeadingAndListContainerLayout>
                        <HeadingAndListContainer>
                            {languages.map(lan => (
                                <Text lineHeight="1.2" key={lan}>
                                    {lan}
                                </Text>
                            ))}
                        </HeadingAndListContainer>
                    </HeadingAndListContainerLayout>

                    <SubHeadingLayout>
                        <StyledSubHeading
                            color={Color.Secondary2}
                            fontFamily={normal.fontFamily}
                        >
                            Technology
                        </StyledSubHeading>
                    </SubHeadingLayout>
                    <HeadingAndListContainerLayout>
                        <HeadingAndListContainer>
                            {technologies.map(tec => (
                                <Text lineHeight="1.2" key={tec}>
                                    {tec}
                                </Text>
                            ))}
                        </HeadingAndListContainer>
                    </HeadingAndListContainerLayout>

                    <ActionButton
                        label="interested?"
                        color={Color.Secondary2}
                    />
                </div>
            </FlexStyle>
        </div>
    );
};
