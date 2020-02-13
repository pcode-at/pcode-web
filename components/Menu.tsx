import React from 'react';
import { Box, Flex, Link } from 'rebass';
import { PcodeShape } from './PcodeShape';
import { Color } from '../Color.enum';
import { CSSObject } from '@styled-system/css';
import styled from 'styled-components';

type TMenuProps = {
    className?: string;
}

const linkStyle: CSSObject = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '7vh',
    fontFamily: 'raleway',
    marginTop: '2vh',
};

export const Menu: React.FC<TMenuProps> = ({
   className
}) => {

    const ShapeAndLinksWrapper = styled(Box)`
        margin-top: -5vh;
        margin-left: auto;
        margin-right: 5vw;
        height: auto;
        width: 80vh;
    `;

    const PcodeShapeWrapper = styled.div`
        transform: rotate(-15deg);
    `;

    const LinkWrapper = styled(Box)`
        top: 8rem;
        right: 6vw;
        z-index: 10;
        position: absolute;
        margin-right: 5vw;
    `;

    const MenuWrapper = styled(Box)`
        overflow: hidden;
        background: ${Color.Secondary2};
        height: 100vh;
        width: 100vw;
        position: relative;
    `;

    return (
        <div className={className}>
            {/*TODO: fix the background color*/}
            <Box
                overflow="hidden"
                bg='secondary2'
                height='100vh'
                width='100vw'
                css={{ position: 'relative' }}
            >
                <Flex>
                    <ShapeAndLinksWrapper>
                        <LinkWrapper>
                            <Flex flexDirection="column">
                                <Link css={linkStyle} href='#'>who we are</Link>
                                <Link css={linkStyle} href='#'>what we do</Link>
                                <Link css={linkStyle} href='#'>how we work</Link>
                                <Link css={linkStyle} href='#'>join us</Link>
                                <Link css={linkStyle} href='#'>contact us</Link>
                            </Flex>
                        </LinkWrapper>
                        <PcodeShapeWrapper>
                            <PcodeShape width="80vh" color={Color.Primary}/>
                        </PcodeShapeWrapper>
                    </ShapeAndLinksWrapper>
                </Flex>
            </Box>
        </div>
    );
};

