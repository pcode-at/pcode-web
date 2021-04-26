import * as React from 'react';

import { Box, Button as Button2, Flex } from 'rebass';
import { themeDeprecated } from '../themeDeprecated';
import { ThemeProvider } from 'emotion-theming';
import { BubbleBlank, BubbleDeprecated } from '../components/Bubble';
import { DeprecatedColor } from '../DeprecatedColor.enum';
import { CopyText, FontStyle } from '../components/CopyText';
import { SectionHeadline } from '../components/SectionHeadline';
import { FreeChair } from '../components/FreeChair';
import { PositionLevel } from '../shared/PositionLevel.enum';
import { Swiper } from '../components/Swiper';
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
import { Wave } from '../components/Wave';
import { KeywordsWithImagesSlider } from '../components/KeywordsWithImagesSlider';
import { SubHeadline } from '../components/SubHeadline';
import { TechnologyPlatform } from '../components/TechnologyPlatform';
import { PlatformType } from '../shared/PlatformType.enum';
import { MultiColorHeadline } from '../components/MultiColorHeadline';
import { PcodeShapeWithImageDeprecated } from '../components/PcodeShapeWithImageDeprecated';
import { WorkingAtPcodeSection } from './join-us/sections/WorkingAtPcode.section';
import { MonsterType } from '../shared/MonsterType.enum';
import { Character } from '../components/Character';
import { SkillDetail } from '../components/SkillDetail';
import { ImageBubbleDeprecated } from '../components/ImageBubbleDeprecated';
import { PersonBubbleDeprecated } from '../components/PersonBubbleDeprecated';
import { Button } from '../components/Button';
import { theme } from '../theme';
import { BubbleWordlist } from '../components/BubbleWordlist';
import { BubbleImage } from '../components/BubbleImage';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { BubblePortrait } from '../components/BubblePortrait';
import { BubblePortraitAndName } from '../components/BubblePortraitAndName';
import { BubblePortraitAndQuote } from '../components/BubblePortraitAndQuote';

const { light, normal } = themeDeprecated.font;

const MainPage = () => (
    <ThemeProvider theme={themeDeprecated}>
        {/* <SiteHeader
            color={Color.Primary}
            onClick={() => {
                alert('Not Implemented Yet!');
            }}
        /> */}

        <Navbar/>

        <StyledHeading>Bubble Portrait and Quote</StyledHeading>
        <BubblePortraitAndQuote/>

        <StyledHeading>Bubble Portrait</StyledHeading>
        <BubblePortrait/>
        <BubblePortrait
            color={'red'}
            width={'175px'}
            imageSource={'../static/memberPortraits/kotek_michael.jpg'}
        />
        <BubblePortrait
            color={'blue'} 
            width={'99px'}
            imageSource={'../static/memberPortraits/pernsteiner_christoph.png'}
        />
        <BubblePortrait
            color={'blue'} 
            width={'265px'}
            imageSource={'../static/memberPortraits/pernsteiner_christoph.png'}
        />

        <StyledHeading>Bubble Portrait and Name</StyledHeading>
        <BubblePortraitAndName
            imageSource={'../static/memberPortraits/pernsteiner_christoph.png'}
        />
        <BubblePortraitAndName
            color={'green'}
            width={'235.33px'}
            name={'Jeanette Doe'}
            position={'amazing web developer'}
        />
        <BubblePortraitAndName
            color={'red'}
            width={'200px'}
            name={'John Doe'}
            position={'great web developer'}
        />

        <StyledHeading>Bubble Image</StyledHeading>
        <BubbleImage position={'left'}/>
        <BubbleImage width={'230px'}/>
        <BubbleImage color={'red'} width={'100px'}/> 

        <StyledHeading>Bubble Wordlist</StyledHeading>
        <BubbleWordlist color={theme.Bubble.Background.Color.Red}/>

        <StyledHeading>Bubble Blank</StyledHeading>
        <BubbleBlank/>
        <BubbleBlank width={'250px'} color={'red'}/>
        <BubbleBlank width={'200px'} color={'blue'}/>
        <BubbleBlank width={'150px'} color={'green'}/>

        <StyledHeading>Multi Color Headline</StyledHeading>
        <MultiColorHeadline
            leftAndRightTextColor={DeprecatedColor.SecondaryLight}
            middleTextColor={DeprecatedColor.Primary}
            leftText="our"
            middleText="code"
            rightText="stands for"
            variant="Big"
        />

        <StyledHeading>CopyText</StyledHeading>
        <StyledCopyText color={DeprecatedColor.SecondaryLight} fontStyle={FontStyle.Light}>
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
            headlineColor={DeprecatedColor.White}
            textColor={DeprecatedColor.SecondaryDark}
            headlineContent="scrum"
        >
            Horrido! Die bräsig Gamaschen frickeln. Dachshund und Pranger
            gutheißen adrett Ganove. Schmock und Kastrat grämen emsig Räuber.
            Die altbacken Freikörperkultur meucheln.
        </StyledSkillDetail>

        <StyledHeading>ContactForm</StyledHeading>
        <StyledContactForm>ContactForm Component</StyledContactForm>

        <StyledHeading>Wave</StyledHeading>
        <Wave variant={'Top'} color={DeprecatedColor.Primary} shape={1}></Wave>

        <StyledHeading>SectionHeadline</StyledHeading>
        <StyledSectionHeadline
            color={DeprecatedColor.SecondaryLight}
            headlinePartOne="our free"
            headlinePartTwo="chairs, waiting for you!"
        />

        <StyledHeading>SubHeadline</StyledHeading>
        <StyledSubHeadline
            color={DeprecatedColor.SecondaryLight}
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

        {/* <StyledHeading>Character</StyledHeading>
        <StyledCharacter
            characterTitle="strategic wizard"
            characterDescription="Phasellus eget turpis dignissim. vestibulum libero non, fringilla nulla. Proin blandit cursus euismod. Proin viverra et diam vitae semper."
            textColor={DeprecatedColor.SecondaryDark}
            monsterType={MonsterType.StrategicWizard}
        ></StyledCharacter> */}

        <StyledHeading>ProjectSlider</StyledHeading>
        <ProjectSliderLayout>
            <ProjectSlider
                width={300}
                images={['../static/sandburg.jpg', '../static/sandburg.jpg']}
            />
        </ProjectSliderLayout>

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
            headlineColor={DeprecatedColor.Primary}
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
        {/* <StyledFooter /> */}
        <Footer/>
    </ThemeProvider>
);

const StyledImageBubbleLayout = styled(ImageBubbleDeprecated)`
    width: 700px;
`;

const StyledTechnologyPlatform = styled(TechnologyPlatform)`
    /* width: 250px; */
    width: 500px;
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

const StyledBubbleBox = styled(Box)`
    width: 50%;
    margin-left: 2em;
`;

const ProjectSliderLayout = styled.div`
    width: 250px;
    padding-bottom: 20em;
    /*TODO: Fix padding (see ProjectSlider.tsx TODO)*/
`;

const StyledWordList = styled(WordList)``;

const StyledSkillDetail = styled(SkillDetail)`
    width: 250px;
    background-color: ${themeDeprecated.colors.primary};
`;

export default MainPage;
