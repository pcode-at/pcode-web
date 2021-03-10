import * as React from 'react';
import { Flex, Button, Box } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
<<<<<<< HEAD
import { themeDeprecated } from '../themeDeprecated';
=======
import { theme } from '../themeDeprecated';
>>>>>>> a1406cc18eb21743f80ff948b98dccfbf89dd9ef

const function02 = () => alert('hello 2');

const WhatWeDoPage = () => (
    <div>
        <ThemeProvider theme={themeDeprecated}>
            <Box
                p={5}
                fontSize={4}
                width={[1, 1, 1 / 2]}
                color="white"
                bg="blue"
            >
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
    </div>
);

export default WhatWeDoPage;
