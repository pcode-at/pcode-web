import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../../theme";
import { SiteHeader } from "../../components/SiteHeader";
import { Color } from "../../Color.enum";
import { Footer } from "../../components/Footer";
import { SectionHeadline } from "../../components/SectionHeadline";
import { Box, Flex, Image } from "rebass";
import { FreeChair } from "../../components/FreeChair";
import { PositionLevel } from "../../shared/PositionLevel.enum";
import { CopyText } from "../../components/CopyText";
import { PcodeShape } from "../../components/PcodeShape";
import { ActionButton } from "../../components/ActionButton";
// @ts-ignore
import ImagePcode from "../assets/tlp-pcode-27.jpg";
import { WorkingAtPcodeSection } from "./sections/WorkingAtPcode.section";

const freeChairWrapperProps = {
  p: 4
};

const JoinUsPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <Box overflowX="hidden">
        <SiteHeader thisColor={Color.White} />

        <Flex
          sx={{
            position: "relative",
            backgroundColor: Color.Secondary2,
            padding: "3.5rem 2rem 3.5rem 2rem",
            justifyContent: "space-between",
            "@media screen and (min-width: 670px)": {
              display: "block"
            }
          }}
        >
          <Box>
            <SectionHeadline
              color={Color.Secondary}
              headlinePartOne="we are adapting to new challenges"
              headlinePartTwo="by developing and investing in our people"
              separateWithBreak={true}
            />
            <br />
            <br />
            <Box sx={{ maxWidth: "400px" }}>
              <CopyText color={Color.White}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </CopyText>

              <br />
              <ActionButton
                thisColor={Color.Primary}
                label="learn more"
                padding="0.2rem 2rem"
              />
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              right: -80,
              bottom: -80,
              display: "none",
              "@media screen and (min-width: 670px)": {
                display: "block"
              }
            }}
          >
            <PcodeShape color={Color.Secondary} />
          </Box>
        </Flex>

        <Box sx={{ textAlign: "center", margin: "5rem 0 2rem 0" }}>
          <SectionHeadline
            color={Color.Secondary2}
            headlinePartOne="our free"
            headlinePartTwo="chairs, waiting for you!"
          />
        </Box>

        <Flex justifyContent="center" marginBottom="2rem">
          <Flex
            flexWrap="wrap"
            sx={{
              justifyContent: "center"
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

        <WorkingAtPcodeSection />
        <Footer />
      </Box>
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
