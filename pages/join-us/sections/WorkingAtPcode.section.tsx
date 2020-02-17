import * as React from 'react';
import { Box, Flex, Image } from 'rebass';
import { Color } from '../../../Color.enum';
import { SectionHeadline } from '../../../components/SectionHeadline';
import { WordList } from '../../../components/WordList';
import styled from 'styled-components';

export const WorkingAtPcodeSection: React.FC = () => {
    const [isOverMobile, setOverMobileStatus] = React.useState();

    // source: https://medium.com/better-programming/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97
    // TODO: refactor with better naming and use the context approach above
    React.useEffect(() => {
        const mqlDesktop = window.matchMedia('(min-width: 670px)');
        setOverMobileStatus(mqlDesktop.matches);

        mqlDesktop.addListener(() => {
            setOverMobileStatus(mqlDesktop.matches);
        });
    }, []);


    return (
        <React.Fragment>
            <Flex
                sx={{
                    backgroundColor: Color.Secondary,
                    '@media screen and (min-width: 670px)': {
                        justifyContent: 'center',
                    },
                }}
            >
                <Flex
                    justifyContent="center"
                    flexWrap="wrap"
                    sx={{
                        position: 'relative',
                        paddingBottom: '5rem',
                        width: '100%',
                        '@media screen and (min-width: 670px)': {
                            paddingTop: '1rem',
                            paddingBottom: '1rem',
                        },
                    }}
                >
                    <Box
                        sx={{
                            padding: '2rem',
                            maxWidth: '344px',
                            '@media screen and (min-width: 670px)': {
                                width: '270px',
                            },
                        }}
                    >
                        <SectionHeadline
                            headlinePartOne="working at pcode"
                            headlinePartTwo="means you get a bunch of cool stuff and a great team count on!"
                            separateWithBreak={true}
                            maxWidthPartTwo={isOverMobile ? '127px' : ''}
                            color={Color.Secondary2}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 163,
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            '@media screen and (min-width: 670px)': {
                                position: 'static',
                                top: 0,
                                marginBottom: '-100px',
                                zIndex: 1,
                                width: 'auto',
                                paddingTop: '2rem',
                                marginLeft: '5rem',
                            },
                        }}
                    >
                        <WordList words={['free coffee', 'mobile office', 'network', 'international', 'perfection']}
                                  color={Color.Secondary2}/>
                    </Box>
                </Flex>
            </Flex>
            <Image src="./static/tlp-pcode-27.jpg"/>
        </React.Fragment>
    );
};
