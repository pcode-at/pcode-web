import * as React from 'react';
import { Box, Flex } from 'rebass';
import { theme } from '../../theme';
import { ThemeProvider } from 'emotion-theming';
import { PcodeShape } from '../../components/PcodeShape';
import { SiteHeader } from '../../components/SiteHeader';
import { Color } from '../../Color.enum';
import { Footer } from '../../components/Footer';
import { Swiper } from '../../components/Swiper';
import Router from 'next/router';
import { CodeStandsForSection } from './sections/CodeStandsFor.section';
import styled from 'styled-components';

const PageLayout = styled(Flex)`
    justify-content: space-between;
    padding: 1.5em 1em;
    align-items: center;
`;

const PcodeShapeLayout = styled(Box)`
  display: none;
  position: relative;
  
  @media screen and (min-width: 615px) {
      display: block;
      margin-right: -150px;
      overflow: hidden;
  }
`;


const MainPage = () => (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <SiteHeader color={Color.White}/>
            <PageLayout>
                <Swiper
                    textPartOne="we transform complexity"
                    textPartTwo="to simplicity by delivering exceptional solutions."
                    onClick={() => Router.push('/join-us')}
                />

                <PcodeShapeLayout>
                    <PcodeShape color={Color.Secondary} width="400px"/>
                </PcodeShapeLayout>
            </PageLayout>
            <CodeStandsForSection/>
            <Footer/>
        </ThemeProvider>
    </React.Fragment>
);

export default MainPage;
