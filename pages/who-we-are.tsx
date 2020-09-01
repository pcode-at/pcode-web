import { ThemeProvider } from 'emotion-theming';
import * as React from 'react';
import { Box, Button, Flex } from 'rebass';
import { Color } from '../Color.enum';
import { ProjectDetailTeaser } from '../components/ProjectDetailTeaser';
import { theme } from '../theme';

const WhoWeArePage = () => (
    <div>
        <ThemeProvider theme={theme}>
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

        <ProjectDetailTeaser
            headlineColor={Color.Primary}
            description="Description"
            headline="Headline"
            imageSrc=""
        />

        <style jsx>{`
            .test {
                color: green;
            }
        `}</style>
    </div>
);

export default WhoWeArePage;
