import React from 'react';
import { Color } from '../Color.enum';
import { Platform } from './Platform';
import { PlatformType } from '../shared/PlatformType.enum';
import styled, { css, breakpoints } from '@xstyled/styled-components';
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
    const StyledHeading = styled.h1`
        font-family: normal;
        font-size: headline3;
        font-weight: light;
        margin-bottom: medium;
        margin-top: large;
        text-align: center;
    `;

    const WrapperFlex = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    const PlatformSvgWrapper = styled.div`
        height: 170px;
        width: 60%;
    `;

    const StyledSubHeading = styled.h1`
        color: Secondary2;
        font-family: normal;
        font-size: headline5;
        font-weight: light;
        padding-bottom: small;
        padding-top: medium;
    `;

    const HeadingAndListContainer = styled.div`
        align-content: center;
        font-family: light;
        font-weight: light;
        margin-bottom: large;
    `;

    const StyledPlatform = styled(Platform)`
        left: 50%;
        position: relative;
        top: 50%;
        transform: translate(-50%, -50%);
    `;

    const StyledText = styled.p`
        line-height: normal;
    `;

    return (
        <div className={className}>
            <WrapperFlex>
                <StyledHeading>{name}</StyledHeading>

                <PlatformSvgWrapper>
                    <StyledPlatform type={platformType} />
                </PlatformSvgWrapper>

                <div>
                    <StyledSubHeading>Language</StyledSubHeading>
                    <HeadingAndListContainer>
                        {languages.map(lan => (
                            <StyledText className={lan}>{lan}</StyledText>
                        ))}
                    </HeadingAndListContainer>

                    <StyledSubHeading color={Color.Secondary2}>
                        Technology
                    </StyledSubHeading>
                    <HeadingAndListContainer>
                        {technologies.map(tec => (
                            <StyledText className={tec}>{tec}</StyledText>
                        ))}
                    </HeadingAndListContainer>

                    <ActionButton
                        label="interested?"
                        color={Color.Secondary2}
                    />
                </div>
            </WrapperFlex>
        </div>
    );
};
