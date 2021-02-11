import React from 'react';
import { Box, Flex, Link } from 'rebass';
import { Bubble } from './Bubble';
import { Color } from '../Color.enum';
import { CSSObject } from '@styled-system/css';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const linkStyle: CSSObject = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '7vh',
    fontFamily: 'raleway',
    marginTop: '2vh',
};

export const Menu: React.FC<Props> = ({
   className
}) => {

    const ShapeAndLinksLayout = styled(Box)`
        margin-top: -5vh;
        margin-left: auto;
        margin-right: 5vw;
        height: auto;
        width: 80vh;
    `;

    const PcodeShapeLayout = styled.div`
        transform: rotate(-15deg);
    `;

    const LinkLayout = styled(Box)`
        top: 8rem;
        right: 6vw;
        z-index: 10;
        position: absolute;
        margin-right: 5vw;
    `;

    // const MenuWrapper = styled(Box)`
    //     overflow: hidden;
    //     background: ${Color.Secondary2};
    //     height: 100vh;
    //     width: 100vw;
    //     position: relative;
    // `;

    return (
        <div className={className}>
            {/*TODO: fix the background color*/}
            <Box
                overflow="hidden"
                bg="secondary2"
                height="100vh"
                width="100vw"
                css={{ position: 'relative' }}
            >
                <Flex>
                    <ShapeAndLinksLayout>
                        <LinkLayout>
                            <Flex flexDirection="column">
                                <Link css={linkStyle} href="#">
                                    who we are
                                </Link>
                                <Link css={linkStyle} href="#">
                                    what we do
                                </Link>
                                <Link css={linkStyle} href="#">
                                    how we work
                                </Link>
                                <Link css={linkStyle} href="#">
                                    join us
                                </Link>
                                <Link css={linkStyle} href="#">
                                    contact us
                                </Link>
                            </Flex>
                        </LinkLayout>
                        <PcodeShapeLayout>
                            <Bubble width="80vh" color={Color.Primary} />
                        </PcodeShapeLayout>
                    </ShapeAndLinksLayout>
                </Flex>
            </Box>
        </div>
    );
};
