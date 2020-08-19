import React from 'react';
import Headroom from 'react-headroom';
import { Flex, Box } from 'rebass';
import NavbarSvg from '../assets/burger.svg?sprite';
import LogoSvg from '../assets/logo_claim.svg?sprite';

import { theme } from '../theme';
import { Color } from '../Color.enum';
import styled from 'styled-components';

type Props = {
    color: Color;
    onClick?(): void;
};

export const SiteHeader: React.FC<Props> = ({
   color,
   onClick,
}) => {

    const OuterFlex = styled(Flex)`
        background-color: white;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        border-radius: 20px;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0.5em;
    `;

    const InnerFlex = styled(Flex)`
        justify-content: flex-end;
        align-items: flex-end;
    `;

    const LogoLayout = styled(Box)`
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
                <LogoLayout width={11 / 12}>
                    <StyledLogo/>
                </LogoLayout>

                <InnerFlex
                    sx={{ marginRight: '1.5em', marginBottom: '0.7em' }}
                    width={1 / 12}
                    color="white"
                    onClick={() =>
                        onClick()
                    }
                >
                    <StyledNavbarSvg/>
                </InnerFlex>
            </OuterFlex>
        </Headroom>
    );
};
