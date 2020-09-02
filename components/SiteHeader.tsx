import React from 'react';
import Headroom from 'react-headroom';
import NavbarSvg from '../assets/burger.svg?sprite';
import LogoSvg from '../assets/logo_claim.svg?sprite';
import { Color } from '../Color.enum';
import styled, { css, breakpoints } from '@xstyled/styled-components';

type Props = {
    color: Color;
    onClick?(): void;
};

export const SiteHeader: React.FC<Props> = ({ color, onClick }) => {
    const OuterFlex = styled.div`
        align-items: flex-end;
        background-color: white;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        padding: 0.5em;
    `;

    const InnerFlex = styled.div`
        align-items: flex-end;
        color: white;
        display: flex;
        justify-content: flex-end;
        margin: 0 large medium 0;
        width: 9%;
    `;

    const LogoWrapper = styled.div`
        padding: 0.5em 0 0 1.3em;
    `;

    const StyledLogo = styled(LogoSvg)`
        height: 40px;
    `;

    const StyledNavbarSvg = styled(NavbarSvg)`
        color: ${Color.Secondary2};
        width: 30px;
    `;

    return (
        <Headroom>
            <OuterFlex>
                <LogoWrapper width={11 / 12}>
                    <StyledLogo />
                </LogoWrapper>

                <InnerFlex onClick={() => onClick()}>
                    <StyledNavbarSvg />
                </InnerFlex>
            </OuterFlex>
        </Headroom>
    );
};
