import * as React from "react";
import { Flex, Box, Image } from "rebass";
import { Color } from "../../../Color.enum";
import { SectionHeadline } from "../../../components/SectionHeadline";
import { PcodeShape } from "../../../components/PcodeShape";

export const WorkingAtPcodeSection: React.FC = () => {
  return (
    <React.Fragment>
      <Flex backgroundColor={Color.Secondary}>
        <Box
          sx={{
            position: "relative",
            paddingBottom: "6.5rem",
            width: "100%"
          }}
        >
          <Box
            sx={{
              padding: "2rem",
              maxWidth: "344px",
              "@media screen and (min-width: 600px)": {
                width: "270px"
              }
            }}
          >
            <SectionHeadline
              headlinePartOne="working at pcode"
              headlinePartTwo="means you get a bunch of cool stuff and a great team count on!"
              separateWithBreak={true}
              color={Color.Secondary2}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 175,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              "@media screen and (min-width: 600px)": {
                justifyContent: "flex-end"
              }
            }}
          >
            <PcodeShape width="170px" color={Color.Secondary2} />
          </Box>
        </Box>
      </Flex>
      <Image src="./static/tlp-pcode-27.jpg" />
    </React.Fragment>
  );
};
