import * as React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../theme";
import { SiteHeader } from "../components/SiteHeader";
import { Color } from "../Color.enum";
import { Footer } from "../components/Footer";

const JoinUsPage = () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <SiteHeader thisColor={Color.White} />

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
