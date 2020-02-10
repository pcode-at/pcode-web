import React from 'react';
import { Box, Button, Flex, Heading, Text } from 'rebass';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { width } from 'styled-system';
import { Platform } from './Platform';
import { PlatformType } from '../shared/PlatformType.enum';

type TTechnologyPlatformProps = {
    name: string;
    platformType: PlatformType;
    languages: string[];
    technologies: string[];
    onClick?(): void;
};

export const TechnologyPlatform: React.FC<TTechnologyPlatformProps> = ({
   name,
   platformType,
   languages,
   technologies,
   onClick,
}) => {
    const { light, normal } = theme.font;

    return (
        <div className="technology-box">
            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                <Heading
                    sx={{
                        fontFamily: normal.fontFamily,
                        fontWeight: normal.fontWeight,
                        textAlign: 'center',
                        marginBottom: '1em',
                    }}
                >
                    {name}
                </Heading>

                <Platform type={platformType} />
                <div>
                    <Heading color={Color.Secondary2}
                             sx={{
                                 fontFamily: light.fontFamily,
                                 fontWeight: light.fontWeight,
                                 marginBottom: '0.5em',
                             }}
                    >
                        Language
                    </Heading>
                    <Box
                        sx={{
                            fontFamily: light.fontFamily,
                            fontWeight: light.fontWeight,
                            marginBottom: '1em',
                        }}
                    >
                        {
                            languages.map(lan => <Text lineHeight="1.2" key={lan}>{lan}</Text>)
                        }
                    </Box>
                </div>

                <div>
                    <Heading color={Color.Secondary2}
                             sx={{
                                 fontFamily: light.fontFamily,
                                 fontWeight: light.fontWeight,
                                 marginBottom: '0.5em',
                             }}
                    >
                        Technology
                    </Heading>
                    <Box
                        sx={{
                            fontFamily: light.fontFamily,
                            fontWeight: light.fontWeight,
                        }}
                    >
                        {
                            technologies.map(tec => <Text lineHeight="1.2" key={tec}>{tec}</Text>)
                        }
                    </Box>
                </div>
            </Flex>
            <style jsx>{`
                .technology-box {
                    max-width: 200px;
                    margin: 2em;
                }
            `}</style>
        </div>
    );
};
