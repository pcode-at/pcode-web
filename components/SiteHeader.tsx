import React from "react";
import Headroom from "react-headroom";
import { Flex, Box } from "rebass";
import NavbarSvg from "../assets/burger.svg?sprite";
import LogoSvg from "../assets/logo_claim.svg?sprite";

import { theme } from "../theme";
import { Color } from "../Color.enum";

type TSiteHeaderProps = {
  thisColor: Color;
};

export const SiteHeader: React.FC<TSiteHeaderProps> = ({ thisColor }) => {
  return (
    <Headroom>
      <Flex
        style={{
          borderBottom: "1px solid gray",
          justifyContent: "space-between"
        }}
      >
        <Box p={2} width={11 / 12} color="white" bg={theme.colors[thisColor]}>
          <React.Fragment>
            <LogoSvg
              style={{
                height: "40px"
              }}
            ></LogoSvg>
          </React.Fragment>
        </Box>

        <Box p={2} width={1 / 12} color="white" bg={theme.colors[thisColor]}>
          <Flex
            height={44}
            style={{
              justifyContent: "flex-end",
              alignItems: "flex-end"
            }}
          >
            <Box bg={theme.colors[thisColor]}>
              <React.Fragment>
                <NavbarSvg
                  style={{
                    color: theme.colors.secondary2,
                    width: "30px"
                  }}
                ></NavbarSvg>
              </React.Fragment>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Headroom>
  );
};
