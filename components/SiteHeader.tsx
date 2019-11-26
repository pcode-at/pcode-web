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
          borderBottom: "1px solid rgba(0,0,0,0.1)",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "0.5em"
        }}
      >
        <Box
          sx={{ padding: "0.5em 0 0 1.3em" }}
          width={11 / 12}
          color="white"
          bg={theme.colors[thisColor]}
        >
          <LogoSvg
            style={{
              height: "40px"
            }}
          ></LogoSvg>
        </Box>

        <Flex
          sx={{ marginRight: "1.5em", marginBottom: "0.7em" }}
          width={1 / 12}
          color="white"
          bg={theme.colors[thisColor]}
          style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
        >
          <NavbarSvg
            style={{
              color: theme.colors.secondary2,
              width: "30px"
            }}
          ></NavbarSvg>
        </Flex>
      </Flex>
    </Headroom>
  );
};
