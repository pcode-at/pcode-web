import * as React from 'react';

import { Box } from 'rebass';
import { theme } from '../theme';
import { ThemeProvider } from 'emotion-theming';
import { PcodeShape } from '../components/PcodeShape';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from '../components/CopyText';
import { SectionHeadline } from '../components/SectionHeadline';
import { FreeChair } from '../components/FreeChair';
import { PositionLevel } from '../shared/PositionLevel.enum';
import { Swiper } from '../components/Swiper';
import { Footer } from '../components/Footer';
import { ContactForm } from '../components/ContactForm';
import { Menu } from '../components/Menu';
import { ProjectDetailTeaser } from '../components/ProjectDetailTeaser';
import Router from 'next/router';
import { WordList } from '../components/WordList';
import { ProjectSlider } from '../components/ProjectSlider';
import styled from 'styled-components';
import { SiteHeader } from '../components/SiteHeader';
import { Statement } from '../components/Statement';
import { Statement2 } from '../components/Statement2';

const { light, normal } = theme.font;


const MainPage = () => (
    <ThemeProvider theme={theme}>
        <StyledHeading>SiteHeader</StyledHeading>
        <SiteHeader color={Color.Primary} onClick={() => {alert("Not Implemented Yet!")}}/>

        <Statement personName={'Christoph Pernsteiner'} personPosition={'CEO .founder'}>
            'this project was a great challenge, we learned a lot and it was a journey with such an amazing customer!'
        </Statement>
        <Statement2 personName={'Nico Peham'} personPosition={'see'} color={Color.Secondary2}>
            'we are adapting to new challenges by developing and investing in our people'
        </Statement2>

        
        <StyledHeading>PcodeShape</StyledHeading>
        <StyledPcodeShapeBox display="flex">
            <PcodeShape/>
            <PcodeShape color={Color.Secondary2}/>
            <PcodeShape width="80%"/>
            <PcodeShape width="50%" color={Color.Secondary}/>
        </StyledPcodeShapeBox>

        <StyledHeading>CopyText</StyledHeading>
        <StyledCopyText color={Color.Secondary2} fontStyle={FontStyle.Light}>
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
            positionDescription="Frontend Developer mit den Skills, TypeScript, React, ES6.">
        </StyledFreeChair>

        <StyledHeading>ProjectSlider</StyledHeading>
        <ProjectSliderWrapper>
            <ProjectSlider width={300}
                           images={[
                               '../static/sandburg.jpg',
                               '../static/sandburg.jpg',
                           ]}/>
        </ProjectSliderWrapper>

        <StyledHeading>Swiper</StyledHeading>
        <StyledSwiper
            textPartOne="we transform complexity"
            textPartTwo="to simplicity by delivering exceptional solutions."
            onClick={() => {
            }}
        />

        <Menu/>

        {/*<CookieMonsterBanner/>*/}

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

        <StyledHeading>WordList</StyledHeading>
        <Box display="flex">
            <StyledWordList words={[
                'praise',
                'passion',
                'potential',
                'people',
                'power',
            ]}/>
        </Box>

        <StyledHeading>Footer</StyledHeading>
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
    width: 300px;
`;

const StyledFooter = styled(Footer)`
    margin-top: 2em;
`;

const StyledPcodeShapeBox = styled(Box)`
    width: 50%;
    margin-left: 2em;
`;

const ProjectSliderWrapper = styled.div`
    width: 250px;
    {/*TODO: Fix padding (see ProjectSlider.tsx TODO)*/}
    padding-bottom: 20em;
`;

const StyledWordList = styled(WordList)`
    
`;

export default MainPage;
