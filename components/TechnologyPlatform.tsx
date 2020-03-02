import React from 'react';
import { Box, Flex, Heading } from 'rebass';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { Platform } from './Platform';
import { PlatformType } from '../shared/enums/PlatformType.enum';
import styled from 'styled-components';
import { Button } from '../shared/components/Button';
import { Text } from '../shared/components/Text';

type TTechnologyPlatformProps = {
    name: string;
    platformType: PlatformType;
    languages: string[];
    technologies: string[];
    onClick?(): void;
    className?: string;
};

export const TechnologyPlatform: React.FC<TTechnologyPlatformProps> = ({
    name,
    platformType,
    languages,
    technologies,
    onClick,
    className,
}) => {
    const { light, normal } = theme.font;

    const TitleLayout = styled(Box)`
        margin-top: 1rem;
        margin-bottom: 2rem;
    `;

    const TechnologyPlatformLayout = styled(Flex)`
        flex-direction: column;
        align-items: center;
    `;

    const PlatformSvgLayout = styled(Box)`
        width: 60%;
        height: 170px;
    `;

    const LanguageAndTechnologyLayout = styled(Box)`
        font-family: ${light.fontFamily};
        font-weight: ${light.fontWeight};
        margin-bottom: 1em;
        width: 100%;
    `;

    const StyledPlatform = styled(Platform)`
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    `;

    return (
        <div className={className}>
            <TechnologyPlatformLayout>
                <TitleLayout>
                    <Text variant={'large'} color={Color.Secondary}>
                        {name}
                    </Text>
                </TitleLayout>

                <PlatformSvgLayout>
                    <StyledPlatform type={platformType} />
                </PlatformSvgLayout>

                <Box>
                    <Text color={Color.Secondary2} variant={'large'}>
                        Language
                    </Text>
                    <LanguageAndTechnologyLayout>
                        {languages.map(language => (
                            <Text
                                key={language}
                                color={Color.Secondary}
                                variant={'light'}
                            >
                                {language}
                            </Text>
                        ))}
                    </LanguageAndTechnologyLayout>

                    <Text color={Color.Secondary2} variant={'large'}>
                        Technology
                    </Text>
                    <LanguageAndTechnologyLayout>
                        {technologies.map(technology => (
                            <Text
                                key={technology}
                                color={Color.Secondary}
                                variant={'light'}
                            >
                                {technology}
                            </Text>
                        ))}
                    </LanguageAndTechnologyLayout>
                </Box>
                <Button variant={'secondary'} label="interested?" />
            </TechnologyPlatformLayout>
        </div>
    );
};
