import * as React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import { PcodeShape } from "../components/PcodeShape";
import { Box, Heading, Text as TextRebass } from "rebass";
import { theme, typoStandardDesignTheme, robotoTheme } from "../theme";
import { ThemeProvider } from "theme-ui";
import { toTheme } from "@theme-ui/typography";
import typographyWebDesignStandards from "typography-theme-us-web-design-standards";
import { css } from "@styled-system/css";
import { Color } from "../Color.enum";
import { CopyText } from "../components/CopyText";

const typoTheme = toTheme(typoStandardDesignTheme);
const typoTheme2 = toTheme(robotoTheme);

const MainPage = () => (
  <ThemeProvider theme={robotoTheme}>
    <Heading mb="2rem">Components</Heading>
    <Heading>PcodeShape</Heading>
    <Box display="flex">
      <PcodeShape />
      <PcodeShape color={Color.Secondary2} />
      <PcodeShape width="80%" />
      <PcodeShape width="50%" color={Color.Secondary} />
    </Box>
    <Box backgroundColor="primary">sfas</Box>
    <TextRebass color="primary">
      Horrido! Die bräsig Gamaschen frickeln. Dachshund und Pranger gutheißen
      adrett Ganove. Schmock und Kastrat grämen emsig Räuber. Die altbacken
      Freikörperkultur meucheln. Das Schelm bauchpinseln das feist Groschengrab.
      Der gemach Bürgermeisterstück verhaspeln. Das Franzosenkrankheit abkupfern
      der hochgestochen Dachshund. Das pfundig Gamaschen frohlocken. Der
      grobschlächtig Tausendsassa bauchpinseln. Die geflissentlich Muckefuck
      erquicken. Der Tausendsassa anschwärzen der einfältig Pranger. Das
      Schutzschwalbe meucheln das feist Damenbart. Höchste Eisenbahn
    </TextRebass>
  </ThemeProvider>
);

export default MainPage;
