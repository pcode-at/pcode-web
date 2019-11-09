import * as React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import { theme } from "../theme";
import { Heading, Box } from "rebass";
import { PcodeShape } from "../components/PcodeShape";
import { Color } from "../Color.enum";
import { CopyText } from "../components/CopyText";
import { ThemeProvider } from "theme-ui";

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
  </ThemeProvider>
);

export default MainPage;
