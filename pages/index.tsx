import * as React from 'react';

import { Box, Flex } from 'rebass';
import styled from 'styled-components';
import { Color } from '../Color.enum';
import { ContactForm } from '../components/ContactForm';
import { CopyText } from '../components/CopyText';
import { Footer } from '../components/Footer';
import { FreeChair } from '../components/FreeChair';
import { PcodeShapeWithImage } from '../components/PcodeShapeWithImage';
import { PersonWithFunction } from '../components/PersonWithFunction';
import { SectionHeadline } from '../components/SectionHeadline';
import { SubHeadline } from '../components/SubHeadline';
import { Swiper } from '../components/Swiper';
import { TechnologyPlatform } from '../components/TechnologyPlatform';
import { WordList } from '../components/WordList';
import { XStyled } from '../components/XStyledTest';
import { theme } from '../theme';

const { light, normal } = theme.font;

const MainPage = () => (
    <XStyled color={Color.Primary} />
);

const StyledPcodeShapeWithImageLayout = styled(PcodeShapeWithImage)`
    width: 400px;
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

const XStyledLayout = styled(XStyled)`
    width: 100vw;
`;

const StyledWordList = styled(WordList)``;

export default MainPage;
