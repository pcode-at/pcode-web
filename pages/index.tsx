import * as React from 'react';

import { Box, Flex } from 'rebass';
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
import { QuotedCompanies } from '../components/QuotedCompanies';
import { KeywordsWithImagesSlider } from '../components/KeywordsWithImagesSlider';
import { SubHeadline } from '../components/SubHeadline';
import { TechnologyPlatform } from '../components/TechnologyPlatform';
import { PlatformType } from '../shared/PlatformType.enum';
import { PersonWithFunction } from '../components/PersonWithFunction';
import { PcodeShapeWithImage } from '../components/PcodeShapeWithImage';
import { WorkingAtPcodeSection } from './join-us/sections/WorkingAtPcode.section';
import { MonsterType } from '../shared/MonsterType.enum';
import { Character } from '../components/Character';
import { SkillDetail } from '../components/SkillDetail';

const { light, normal } = theme.font;

const MainPage = () => (
    <ThemeProvider theme={theme}>
        <SiteHeader
            color={Color.Primary}
            onClick={() => {
                alert('Not Implemented Yet!');
            }}
        />
        <StyledHeading>PcodeShapeWithImage</StyledHeading>
        <StyledPcodeShapeWithImageLayout
            imageSource="../static/pernsteiner_christoph.png"
            variant={1}
            color={Color.Secondary}
        />
        <StyledHeading>WorkingAtPcode</StyledHeading>
        <WorkingAtPcodeSection />
        <StyledHeading>PersonWithFunction</StyledHeading>
        <StyledPersonWithFunction
            imagePath="../static/pernsteiner_christoph.png"
            color={Color.Secondary}
            personName={'Christoph Pernsteiner'}
            personPosition={'CEO .founder'}
        />

        <StyledHeading>Statement</StyledHeading>
        <StyledPersonWithFunction
            imagePath="../static/pernsteiner_christoph.png"
            color={Color.Secondary}
            personName={'Christoph Pernsteiner'}
            personPosition={'CEO .founder'}
        />

        <StyledHeading>Statement</StyledHeading>
        <Statement
            personName={'Christoph Pernsteiner'}
            personPosition={'CEO .founder'}
            imagePath={'../static/pernsteiner_christoph.png'}
        >
            'this project was a great challenge, we learned a lot and it was a
            journey with such an amazing customer!'
        </Statement>

        <StyledHeading>Statement2</StyledHeading>
        <Statement2
            personName={'Nico Peham'}
            personPosition={'tech lead'}
            color={Color.Secondary2}
            imagePath={'../static/pernsteiner_christoph.png'}
        >
            'we are adapting to new challenges by developing and investing in
            our people'
        </Statement2>

        <StyledHeading>QuotedCompanies</StyledHeading>
        <QuotedCompanies
            logoSvgSources={[
                '../static/quoted_company1.svg',
                '../static/quoted_company2.svg',
                '../static/quoted_company3.svg',
                '../static/quoted_company4.svg',
                '../static/quoted_company5.svg',
            ]}
            selectedCompanyIndex={2}
            selectCompany={index => {
                console.log('Index: ' + index);
            }}
        ></QuotedCompanies>

        <StyledHeading>PcodeShape</StyledHeading>
        <StyledPcodeShapeBox display="flex">
            <PcodeShape />
            <PcodeShape color={Color.Secondary2} />
            <PcodeShape width="80%" />
            <PcodeShape width="50%" color={Color.Secondary} />
        </StyledPcodeShapeBox>

        <StyledHeading>CopyText</StyledHeading>
        <StyledCopyText color={Color.Secondary2} fontStyle={FontStyle.Light}>
            Horrido! Die bräsig Gamaschen frickeln. Dachshund und Pranger
            gutheißen adrett Ganove. Schmock und Kastrat grämen emsig Räuber.
            Die altbacken Freikörperkultur meucheln. Das Schelm bauchpinseln das
            feist Groschengrab. Der gemach Bürgermeisterstück verhaspeln. Das
            Franzosenkrankheit abkupfern der hochgestochen Dachshund. Das
            pfundig Gamaschen frohlocken. Der grobschlächtig Tausendsassa
            bauchpinseln. Die geflissentlich Muckefuck erquicken. Der
            Tausendsassa anschwärzen der einfältig Pranger. Das Schutzschwalbe
            meucheln das feist Damenbart. Höchste Eisenbahn
        </StyledCopyText>

        <StyledHeading>Skill Detail</StyledHeading>
        <StyledSkillDetail
            headlineColor={Color.White}
            textColor={Color.Secondary}
            headlineContent="scrum"
        >
            Horrido! Die bräsig Gamaschen frickeln. Dachshund und Pranger
            gutheißen adrett Ganove. Schmock und Kastrat grämen emsig Räuber.
            Die altbacken Freikörperkultur meucheln.
        </StyledSkillDetail>

        <StyledHeading>ContactForm</StyledHeading>
        <StyledContactForm>ContactForm Component</StyledContactForm>

        <StyledHeading>SectionHeadline</StyledHeading>
        <StyledSectionHeadline
            color={Color.Secondary2}
            headlinePartOne="our free"
            headlinePartTwo="chairs, waiting for you!"
        />

        <StyledHeading>SubHeadline</StyledHeading>
        <StyledSubHeadline
            color={Color.Secondary2}
            fontStyle={FontStyle.Normal}
        >
            Nabend
        </StyledSubHeadline>

        <StyledHeading>FreeChair</StyledHeading>
        <StyledFreeChair
            monsterType={MonsterType.TentacleEye}
            position="frontend developer"
            positionLevel={PositionLevel.Junior}
            positionDescription="Frontend Developer mit den Skills, TypeScript, React, ES6."
        ></StyledFreeChair>

        <StyledHeading>Character</StyledHeading>
        <StyledCharacter
            characterTitle="strategic wizard"
            characterDescription="Phasellus eget turpis dignissim. vestibulum libero non, fringilla nulla. Proin blandit cursus euismod. Proin viverra et diam vitae semper."
            textColor={Color.Secondary}
            monsterType={MonsterType.StrategicWizard}
        ></StyledCharacter>

        <StyledHeading>ProjectSlider</StyledHeading>
        <ProjectSliderWrapper>
            <ProjectSlider
                width={300}
                images={['../static/sandburg.jpg', '../static/sandburg.jpg']}
            />
        </ProjectSliderWrapper>

        <StyledHeading>KeyWordsWithImagesSlider</StyledHeading>
        <KeywordsWithImagesSlider
            wordList={[
                [
                    'praise',
                    'potential',
                    'people',
                    'passion',
                    'power',
                    'perfection',
                ],
                ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'],
            ]}
            imagePairs={[
                ['../static/nebo_jure.jpg', '../static/sandburg.jpg'],
                ['../static/sandburg.jpg', '../static/nebo_jure.jpg'],
            ]}
            alignment="horizontal"
        ></KeywordsWithImagesSlider>

        <StyledHeading>Swiper</StyledHeading>
        <StyledSwiper
            textPartOne="we transform complexity"
            textPartTwo="to simplicity by delivering exceptional solutions."
            onClick={() => {}}
        />

        <StyledHeading>Menu</StyledHeading>
        <Menu />

        {/*<CookieMonsterBanner/>*/}

        <StyledHeading>ProjectDetailTeaser</StyledHeading>
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

        <StyledHeading>TechnologyPlatform</StyledHeading>
        <TechnologyFlex>
            <StyledTechnologyPlatform
                name={'web'}
                platformType={PlatformType.Web}
                languages={[
                    'JavaScript',
                    'Angular',
                    'TypeScript',
                    'PHP',
                    'Symfony',
                    '.Net (C#)',
                    '(e-commerce)',
                ]}
                technologies={['ReactJs', 'Stylius', 'Spryker']}
            />

            <StyledTechnologyPlatform
                name={'mobile'}
                platformType={PlatformType.Mobile}
                languages={['React Native', 'Native iOS', 'Native Android']}
                technologies={['Progressive Web Apps (PWA)']}
            />

            <StyledTechnologyPlatform
                name={'ar . vr'}
                platformType={PlatformType.ArVr}
                languages={['React Native', 'Native iOS', 'Native Android']}
                technologies={['Progressive Web Apps (PWA)']}
            />
        </TechnologyFlex>

        <StyledHeading>WordList</StyledHeading>
        <Box display="flex">
            <StyledWordList
                words={['praise', 'passion', 'potential', 'people', 'power']}
            />
        </Box>

        <StyledHeading>Footer</StyledHeading>
        <StyledFooter />
    </ThemeProvider>
);

const StyledPcodeShapeWithImageLayout = styled(PcodeShapeWithImage)`
    width: 700px;
`;

const StyledPersonWithFunction = styled(PersonWithFunction)`
    width: 300px;
`;

const StyledTechnologyPlatform = styled(TechnologyPlatform)`
    width: 250px;
`;

const TechnologyFlex = styled(Flex)`
    align-content: center;
    justify-content: space-evenly;
    max-width: 1200px;
`;

const StyledSubHeadline = styled(SubHeadline)`
    padding: 2em;
`;

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

const StyledCharacter = styled(Character)`
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
    /*TODO: Fix padding (see ProjectSlider.tsx TODO)*/
    padding-bottom: 20em;
`;

const StyledWordList = styled(WordList)``;

const StyledSkillDetail = styled(SkillDetail)`
    width: 250px;
    background-color: ${theme.colors.primary};
`;

export default MainPage;
