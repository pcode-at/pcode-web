import React from 'react';
import { PcodeShape } from './PcodeShape';
import { Color } from '../Color.enum';
import { CSSObject } from '@styled-system/css';
import styled, { css, breakpoints } from '@xstyled/styled-components';
import { theme } from '../theme';

type Props = {
    className?: string;
};

export const Menu: React.FC<Props> = ({ className }) => {
    const ShapeAndLinksLayout = styled.div`
        height: auto;
        margin-left: auto;
        margin-right: 5vw;
        margin-top: -5vh;
        width: 80vh;
    `;

    const PcodeShapeLayout = styled.div`
        transform: rotate(-15deg);
    `;

    const LinkLayout = styled.div`
        display: flex;
        flex-direction: column;
        margin-right: 5vw;
        position: absolute;
        right: 6vw;
        top: 8rem;
        z-index: 10;
    `;

    const MenuLayout = styled.div`
        background-color: ${theme.colors[Color.Secondary2]};
        display: flex;
        height: 100vh;
        overflow: hidden;
        position: relative;
        width: 100vw;
    `;

    const StyledLink = styled.a`
        color: White;
        font-family: normal;
        font-size: headline3;
        margin-top: small;
        text-decoration: none;
    `;

    return (
        <div className={className}>
            {/*TODO: fix the background color*/}
            <MenuLayout>
                <ShapeAndLinksLayout>
                    <LinkLayout>
                        <StyledLink href="#">who we are</StyledLink>
                        <StyledLink href="#">what we do</StyledLink>
                        <StyledLink href="#">how we work</StyledLink>
                        <StyledLink href="#">join us</StyledLink>
                        <StyledLink href="#">contact us</StyledLink>
                    </LinkLayout>
                    <PcodeShapeLayout>
                        <PcodeShape width="80vh" color={Color.Primary} />
                    </PcodeShapeLayout>
                </ShapeAndLinksLayout>
            </MenuLayout>
        </div>
    );
};
