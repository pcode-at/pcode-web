import * as React from 'react';

import { Box, Flex, Heading } from 'rebass';
import { theme } from '../theme';
import { ThemeProvider } from 'emotion-theming';
import { PcodeShape } from '../components/PcodeShape';
import { Color } from '../Color.enum';
import { CopyText } from '../components/CopyText';
import { SectionHeadline } from '../components/SectionHeadline';
import { FreeChair } from '../components/FreeChair';
import { PositionLevel } from '../shared/PositionLevel.enum';
import { Swiper } from '../components/Swiper';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { ProjectDetailTeaser } from '../components/ProjectDetailTeaser';
import Router from 'next/router';
import { TechnologyPlatform } from '../components/TechnologyPlatform';
import { PlatformType } from '../shared/PlatformType.enum';

const MainPage = () => (
    <ThemeProvider theme={theme}>
        <Heading mb="2rem">Components</Heading>
        <Heading>PcodeShape</Heading>
        <Flex flexWrap="wrap" justifyContent="space-evenly">
            <TechnologyPlatform
                name={"Web"}
                platformType={PlatformType.Web}
                languages={["SASS", "HTML"]}
                technologies={["React", "Vue"]}>
            </TechnologyPlatform>
            <TechnologyPlatform
                name={"Web"}
                platformType={PlatformType.Mobile}
                languages={["SASS", "HTML"]}
                technologies={["React", "Vue"]}>
            </TechnologyPlatform>
            <TechnologyPlatform
                name={"Web"}
                platformType={PlatformType.ArVr}
                languages={["SASS", "HTML"]}
                technologies={["React", "Vue"]}>
            </TechnologyPlatform>
        </Flex>
        <Box display="flex">
            <PcodeShape />
            <PcodeShape color={Color.Secondary2} />
            <PcodeShape width="80%" />
            <PcodeShape width="50%" color={Color.Secondary} />
            <CopyText color={Color.Secondary2}>
                Horrido! Die bräsig Gamaschen frickeln. Dachshund und Pranger
                gutheißen adrett Ganove. Schmock und Kastrat grämen emsig
                Räuber. Die altbacken Freikörperkultur meucheln. Das Schelm
                bauchpinseln das feist Groschengrab. Der gemach
                Bürgermeisterstück verhaspeln. Das Franzosenkrankheit abkupfern
                der hochgestochen Dachshund. Das pfundig Gamaschen frohlocken.
                Der grobschlächtig Tausendsassa bauchpinseln. Die geflissentlich
                Muckefuck erquicken. Der Tausendsassa anschwärzen der einfältig
                Pranger. Das Schutzschwalbe meucheln das feist Damenbart.
                Höchste Eisenbahn
            </CopyText>
        </Box>
        <ContactForm color={Color.Primary}>ContactForm Component</ContactForm>
        <SectionHeadline
            color={Color.Secondary2}
            headlinePartOne="our free"
            headlinePartTwo="chairs, waiting for you!"
        />
        <FreeChair
            position="frontend developer"
            positionLevel={PositionLevel.Junior}
            positionDescription="Frontend Developer mit den Skills, TypeScript, React, ES6."
        />
        <Swiper
            textPartOne="we transform complexity"
            textPartTwo="to simplicity by delivering exceptional solutions."
            onClick={() => {}}
        />

        <ProjectDetailTeaser
            headline="Test Headline"
            description="Horrido! Die bräsig Gamaschen frickeln. Dachshund und Pranger
            gutheißen adrett Ganove. Schmock und Kastrat grämen emsig
            Räuber. Die altbacken Freikörperkultur meucheln. Das Schelm
            bauchpinseln das feist Groschengrab. Der gemach
            Bürgermeisterstück verhaspeln. Das Franzosenkrankheit abkupfern
            der hochgestochen Dachshund. Das pfundig Gamaschen frohlocken.
            Der grobschlächtig Tausendsassa bauchpinseln. Die geflissentlich
            Muckefuck erquicken. Der Tausendsassa anschwärzen der einfältig
            Pranger. Das Schutzschwalbe meucheln das feist Damenbart.
            Höchste Eisenbahn"
            imageSrc="../static/testImage.png"
            headlineColor={Color.Primary}
            onClick={() => Router.push('/main')}
        />

        <Footer />
    </ThemeProvider>
);

export default MainPage;
