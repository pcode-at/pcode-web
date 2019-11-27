import * as React from "react";
import { Heading, Box, Image } from "rebass";
import { Color } from "../../../Color.enum";
import { theme } from "../../../theme";

export const CodeStandsForSection: React.FC = () => (
  <React.Fragment>
    <Box sx={{ textAlign: "center" }}>
      <Heading fontFamily="Raleway" fontWeight={500} color={Color.Secondary2}>
        our <span className="color-primary">code</span> stands for
      </Heading>

      <Box>
        <img className="responsive-img" src="./static/nebo_jure.jpg" />
        <img className="responsive-img" src="./static/sandburg.jpg" />
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
