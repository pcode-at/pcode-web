import * as React from "react";
import { Flex, Button, Box } from "rebass";
import { ThemeProvider } from "emotion-theming";
import { theme } from "../theme";
import { SiteHeader } from "../components/SiteHeader";

const WhatWeDoPage = () => (
  <div>
    <SiteHeader headline="P-Code"></SiteHeader>

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

    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
    <div
      className="test"
      style={{
        border: "1px solid red",
        height: "100px",
        marginBottom: "10px"
      }}
    >
      WORKING
    </div>
  </div>
);

export default WhatWeDoPage;
