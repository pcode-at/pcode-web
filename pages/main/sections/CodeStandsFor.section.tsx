import * as React from "react";
import { Heading, Box, Image } from "rebass";
import { Color } from "../../../Color.enum";
import { theme } from "../../../theme";
import { PcodeShape } from "../../../components/PcodeShape";
import { ActionButton } from "../../../components/ActionButton";

export const CodeStandsForSection: React.FC = () => (
  <React.Fragment>
    {/* <Heading
      textAlign="center"
      fontFamily="Raleway"
      fontWeight={500}
      color={Color.Secondary2}
      marginBottom="20px"
    >
      our <span className="color-primary">code</span> stands for
    </Heading> */}

    <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
      <Box>
        <img className="responsive-img" src="./static/nebo_jure.jpg" />
        <img className="responsive-img" src="./static/sandburg.jpg" />
        {/* <Box
          width="100%"
          maxWidth="100%"
          height="200px"
          backgroundColor="red"
        />
        <Box
          width="100%"
          maxWidth="100%"
          height="200px"
          backgroundColor="green"
        /> */}
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
          justifyContent: "center"
        }}
      >
        <ActionButton
          label="Join us"
          padding="0.2rem 2rem"
          noBackground={true}
        />
      </Box>
    </Box>

    <style jsx>{`
      .color-primary {
        color: ${theme.colors[Color.Primary]};
      }
      .responsive-img {
        max-width: 100%;
      }
    `}</style>
  </React.Fragment>
);
