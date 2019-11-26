import * as React from "react";
import { Flex, Box } from "rebass";
import { theme } from "../theme";
import { ThemeProvider } from "emotion-theming";
import { PcodeShape } from "../components/PcodeShape";
import { SiteHeader } from "../components/SiteHeader";
import { Color } from "../Color.enum";
import { Footer } from "../components/Footer";
import { Swiper } from "../components/Swiper";

const MainPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      {/* TODO: test if this is working in safari */}
      <Box overflowX="hidden">
        <SiteHeader thisColor={Color.White} />
        <Flex
          justifyContent="space-between"
          sx={{ padding: "1.5em 1em", alignItems: "center" }}
        >
          <Swiper
            textPartOne="we transform complexity"
            textPartTwo="to simplicity by delivering exceptional solutions."
          />

          <Box
            sx={{
              display: "none",
              position: "relative",
              "@media screen and (min-width: 615px)": {
                display: "block"
              }
            }}
          >
            <Box sx={{ marginRight: "-150px", overflow: "hidden" }}>
              <PcodeShape color={Color.Secondary} width="400px" />
            </Box>
          </Box>
        </Flex>
        <Footer />
      </Box>
    </ThemeProvider>
  </React.Fragment>
);

export default MainPage;
