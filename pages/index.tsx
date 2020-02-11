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
import styled from 'styled-components';

const { light, normal } = theme.font;

const MainPage = () => (
    <ThemeProvider theme={theme}>
        <StyledHeading>PcodeShape</StyledHeading>
        <StyledPcodeShapeBox display="flex">
            <PcodeShape/>
            <PcodeShape color={Color.Secondary2}/>
            <PcodeShape width="80%"/>
            <PcodeShape width="50%" color={Color.Secondary}/>
        </StyledPcodeShapeBox>

        <StyledHeading>CopyText</StyledHeading>
        <StyledCopyText color={Color.Secondary2}>
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
        </StyledCopyText>

        <StyledHeading>ContactForm</StyledHeading>
        <StyledContactForm color={Color.Primary}>
            ContactForm Component
        </StyledContactForm>

        <StyledHeading>SectionHeadline</StyledHeading>
        <StyledSectionHeadline
            color={Color.Secondary2}
            headlinePartOne="our free"
            headlinePartTwo="chairs, waiting for you!"
        />

        <StyledHeading>FreeChair</StyledHeading>
        <StyledFreeChair
            position="frontend developer"
            positionLevel={PositionLevel.Junior}
            positionDescription="Frontend Developer mit den Skills, TypeScript, React, ES6."
        />

        <StyledHeading>Swiper</StyledHeading>
        <StyledSwiper
            textPartOne="we transform complexity"
            textPartTwo="to simplicity by delivering exceptional solutions."
            onClick={() => {
            }}
        />

        <StyledFooter/>
    </ThemeProvider>
);

const StyledHeading = styled.h1`
    font-family: ${normal.fontFamily};
    font-weight: ${normal.fontWeight};
    margin-top: 3em;
`;

const StyledContactForm = styled(ContactForm)`
    max-width: 300px;
`;

const StyledCopyText = styled(CopyText)`
    max-width: 900px;
    padding: 3em;
`;

const StyledSectionHeadline = styled(SectionHeadline)`
    padding: 1em;
`;

const StyledFreeChair = styled(FreeChair)`
    margin-left: 1em;
`;

const StyledSwiper = styled(Swiper)`
    padding: 1em;
`;

const StyledFooter = styled(Footer)`
    margin-top: 2em;
`;

const StyledPcodeShapeBox = styled(Box)`
    width: 50%;
    margin-left: 2em;
`;

export default MainPage;
