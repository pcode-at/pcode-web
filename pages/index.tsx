import * as React from 'react';

import { Box, Heading } from 'rebass';
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
import { Menu } from '../components/Menu';
import { Statement } from '../components/Statement';
import { Statement2 } from '../components/Statement2';
import { ProjectDetailTeaser } from '../components/ProjectDetailTeaser';
import Router from "next/router";
import { WordList } from "../components/WordList";
import { ProjectSlider } from '../components/ProjectSlider';


const MainPage = () => (
    <ThemeProvider theme={theme}>
        <Heading mb="2rem">Components</Heading>
        <Heading>PcodeShape</Heading>
        <Box display="flex">
            <WordList words={[
                'praise',
                'passion',
                'potential',
                'people',
                'power',
            ]}/>
        </Box>
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
        <Statement
            backgroundColor={Color.White}
            pCodeShapeColor={Color.Secondary}
            color={Color.Secondary2}
            personName={'christopher pernsteiner'}
            personPosition={'CEO . founder'}
        >
            ' this project was a great challenge, <br></br> we learned a lot and
            it was a journey with such an amazing customer! '
        </Statement>
        <Statement
            //color={Color.Secondary2}
            personName={'nico peham'}
            personPosition={'lead fronted developer'}
        >
            ' we are adapting to new challenges by developing and investing in
            our people '
        </Statement>
        <ContactForm color={Color.Primary}>ContactForm Component</ContactForm>
        <SectionHeadline
            color={Color.Secondary2}
            headlinePartOne="our free"
            headlinePartTwo="chairs, waiting for you!"
        />

        <ProjectSlider 
         width={400}
         images={[
            "../static/sandburg.jpg",
            "../static/sandburg.jpg",
        ]} />


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
        <Menu/>

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
