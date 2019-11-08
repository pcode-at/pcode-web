import * as React from "react";
import { Flex, Button, Box } from "rebass";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../theme";
import { ProjectDetailTeaser } from "../components/ProjectDetailTeaser";

const WhatWeDoPage = () => (
  <div>
    <ThemeProvider theme={theme}>
      <Box p={5} fontSize={4} width={[1, 1, 1 / 2]} color="white" bg="blue">
        Box
      </Box>
      <br />
      <Flex>
        <Box p={3} width={1 / 3} color="white" bg="primary">
          Flex
        </Box>
        <Box p={3} width={1 / 3} color="white" bg="secondary">
          Box
        </Box>
        <Box p={3} width={1 / 3} color="white" bg="green">
          Box
        </Box>
      </Flex>
      <br />
      <Button mr={1}>Primary</Button>
    </ThemeProvider>

    <div className="test">WORKING</div>

    <ProjectDetailTeaser
      headline="Head Tes2"
      description="Desc TEst"
      pcodeShapeBackground={true}
      imageSrc="https://vignette.wikia.nocookie.net/ronaldmcdonald/images/0/0a/Original2.jpg/revision/latest?cb=20180909053442"
    ></ProjectDetailTeaser>

    <style jsx>{`
      .test {
        color: green;
      }
    `}</style>
  </div>
);

export default WhatWeDoPage;
