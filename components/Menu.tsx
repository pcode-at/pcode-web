import React from 'react';
import { Box, Flex, Link } from 'rebass';
import { PcodeShape } from './PcodeShape';
import { Color } from '../Color.enum';
import { CSSObject } from '@styled-system/css';

const linkStyle: CSSObject = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '7vh',
    fontFamily: 'raleway',
    marginTop: '2vh',
};

export const Menu: React.FC = () => {
    return (
        <Box
            overflow="hidden"
            bg='secondary2'
            height='100vh'
            width='100vw'
            css={{ position: 'relative' }}
        >
            <Flex>
                <Box
                    marginTop="-5vh"
                    marginLeft="auto"
                    marginRight="5vw"
                    height="auto"
                    width="80vh"
                >
                    <Box
                        marginRight="5vw"
                        sx={{
                            top: '8rem',
                            right: '6vw',
                            zIndex: 10,
                            position: 'absolute',
                        }}
                    >
                        <Flex
                            flexDirection="column"
                        >
                            <Link css={linkStyle} href='#'>who we are</Link>
                            <Link css={linkStyle} href='#'>what we do</Link>
                            <Link css={linkStyle} href='#'>how we work</Link>
                            <Link css={linkStyle} href='#'>join us</Link>
                            <Link css={linkStyle} href='#'>contact us</Link>
                        </Flex>
                    </Box>
                    <Box
                        sx={{ transform: 'rotate(-15deg)' }}
                    >
                        <PcodeShape width="80vh" color={Color.Primary}/>
                    </Box>
                </Box>
            </Flex>
        </Box>
    );
};

