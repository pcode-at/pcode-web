import * as React from "react";

import { Box, Heading } from "rebass";
import { theme } from "../theme";
import { ThemeProvider } from "emotion-theming";
import { PcodeShape } from "../components/PcodeShape";
import { Color } from "../Color.enum";
import { CopyText } from "../components/CopyText";
import { SectionHeadline } from "../components/SectionHeadline";

const MainPage = () => (
  <ThemeProvider theme={theme}>
    <Heading mb="2rem">Components</Heading>
    <Heading>PcodeShape</Heading>
    <Box display="flex">
      <PcodeShape />
      <PcodeShape color={Color.Secondary2} />
      <PcodeShape width="80%" />
      <PcodeShape width="50%" color={Color.Secondary} />
      <CopyText color={Color.Secondary2}>
        Horrido! Die bräsig Gamaschen frickeln. Dachshund und Pranger gutheißen
        adrett Ganove. Schmock und Kastrat grämen emsig Räuber. Die altbacken
        Freikörperkultur meucheln. Das Schelm bauchpinseln das feist
        Groschengrab. Der gemach Bürgermeisterstück verhaspeln. Das
        Franzosenkrankheit abkupfern der hochgestochen Dachshund. Das pfundig
        Gamaschen frohlocken. Der grobschlächtig Tausendsassa bauchpinseln. Die
        geflissentlich Muckefuck erquicken. Der Tausendsassa anschwärzen der
        einfältig Pranger. Das Schutzschwalbe meucheln das feist Damenbart.
        Höchste Eisenbahn
      </CopyText>
    </Box>
    <SectionHeadline
      color={Color.Secondary2}
      headlinePartOne="our free"
      headlinePartTwo="chairs, waiting for you!"
    />
  </ThemeProvider>
);

export default MainPage;
