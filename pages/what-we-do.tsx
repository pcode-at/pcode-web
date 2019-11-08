import * as React from "react";
import { Flex, Button, Box } from "rebass";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../theme";
import { ActionButton } from "../components/ActionButton";

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
      <Button mr={2}>Primary</Button>
    </ThemeProvider>

    <hr></hr>

    <ActionButton thisColor="darkBlue" label="Ex 01"></ActionButton>
    <ActionButton thisColor="lightBlue" label="Ex 02"></ActionButton>
    <ActionButton thisColor="red" label="Ex 03"></ActionButton>
    <ActionButton thisColor="other" label="Ex 04"></ActionButton>

    <div className="test">WORKING</div>

    <style jsx>{`
      .test {
        color: green;
      }
    `}</style>
  </div>
);

export default WhatWeDoPage;
