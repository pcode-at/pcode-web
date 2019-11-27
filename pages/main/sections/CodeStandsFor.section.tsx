import * as React from "react";
import { Box, Image } from "rebass";
import { Color } from "../../../Color.enum";
import { theme } from "../../../theme";
import { PcodeShape } from "../../../components/PcodeShape";
import { ActionButton } from "../../../components/ActionButton";
import Router from "next/router";

export const CodeStandsForSection: React.FC = () => (
  <React.Fragment>
    <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
      <Box>
        <Image src="./static/nebo_jure.jpg" />
        <Image src="./static/sandburg.jpg" />
      </Box>

      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "-6%"
        }}
      >
        <PcodeShape width="35%" />
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "-5%"
        }}
      >
        <ActionButton
          label="Join us"
          padding="0.2rem 2rem"
          noBackground={true}
          onClick={() => Router.push("/join-us")}
        />
      </Box>
    </Box>

    <style jsx>{`
      .color-primary {
        color: ${theme.colors[Color.Primary]};
      }
    `}</style>
  </React.Fragment>
);
