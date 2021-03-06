import * as React from 'react';
import { Flex, Button, Box } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import { themeDeprecated } from '../themeDeprecated';
const ProjectDetailPage = () => (
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
            <Button mr={2}>Primary</Button>
        </ThemeProvider>

        <div className="test">WORKING</div>

        <style jsx>{`
            .test {
                color: green;
            }
        `}</style>
    </div>
);

export default ProjectDetailPage;
