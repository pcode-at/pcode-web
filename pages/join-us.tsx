import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../theme";
import { SiteHeader } from "../components/SiteHeader";
import { Color } from "../Color.enum";
import { Footer } from "../components/Footer";
import { SectionHeadline } from "../components/SectionHeadline";
import { Box, Flex } from "rebass";
import { FreeChair } from "../components/FreeChair";
import { PositionLevel } from "../shared/PositionLevel.enum";

const freeChairWrapperProps = {
  p: 3
};

const JoinUsPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <SiteHeader thisColor={Color.White} />

      <Box sx={{ textAlign: "center", margin: "3em 0 2em 0" }}>
        <SectionHeadline
          color={Color.Secondary2}
          headlinePartOne="our free"
          headlinePartTwo="chairs, waiting for you!"
        />
      </Box>

      <Flex justifyContent="center" marginBottom="2em">
        <Flex
          flexWrap="wrap"
          sx={{
            justifyContent: "center",
            "@media screen and (min-width: 697px)": {
              justifyContent: "space-between",
              maxWidth: "600px"
            }
          }}
        >
          <Box {...freeChairWrapperProps}>
            <FreeChair
              position="Frontend developer"
              positionLevel={PositionLevel.Junior}
              positionDescription="Description, description"
            />
          </Box>
          <Box {...freeChairWrapperProps}>
            <FreeChair
              position="Frontend developer"
              positionLevel={PositionLevel.Senior}
              positionDescription="Description, description"
            />
          </Box>
          <Box {...freeChairWrapperProps}>
            <FreeChair
              position="UX designer"
              positionLevel={PositionLevel.Junior}
              positionDescription="Description, description"
            />
          </Box>
          <Box {...freeChairWrapperProps}>
            <FreeChair
              position="Backend developer"
              positionLevel={PositionLevel.Senior}
              positionDescription="Description, description"
            />
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </ThemeProvider>

    <style jsx>{`
      .test {
        color: white;
        background-color: ${theme.colors.primary};
      }
    `}</style>
  </React.Fragment>
);

export default JoinUsPage;
