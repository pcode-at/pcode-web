import * as React from "react";

import { Box, Heading } from "rebass";
import { theme } from "../theme";
import { ThemeProvider } from "emotion-theming";
import { PcodeShape } from "../components/PcodeShape";
import { Color } from "../Color.enum";

const MainPage = () => (
  <ThemeProvider theme={theme}>
    <Heading mb="2rem">Components</Heading>
    <Heading>PcodeShape</Heading>
    <Box display="flex">
      <PcodeShape />
      <PcodeShape color={Color.Secondary2} />
      <PcodeShape width="80%" />
      <PcodeShape width="50%" color={Color.Secondary} />
    </Box>
  </ThemeProvider>
);

export default MainPage;
