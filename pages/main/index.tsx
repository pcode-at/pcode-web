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
import { ProjectDetailTeaser } from '../../components/ProjectDetailTeaser';
import { Statement } from '../../components/Statement';
import { ContactForm } from '../../components/ContactForm';

const PageLayout = styled(Flex)`
    justify-content: space-between;
    padding: 1.5em 1em;
    align-items: center;
`;

const PcodeShapeLayout = styled(Box)`
    display: none;
    position: relative;
    width: 400px;

    @media screen and (min-width: 615px) {
        display: block;
        margin-right: -150px;
        overflow: hidden;
    }
`;

const StatementLayout = styled(Box)`
    margin-top: 50px;
    margin-bottom: 50px;
`;

const ProjectDetailTeaserLayout = styled(Box)`
    margin-top: 50px;
    margin-bottom: 50px;
`;

const ContactFormLayout = styled(Box)`
    width: 70%;
    margin: 100px auto;
`;

const MainPage = () => (
    <React.Fragment>
        <ThemeProvider theme={theme}>
            <SiteHeader color={Color.White} />
            <PageLayout>
                <Swiper
                    textPartOne="we transform complexity"
                    textPartTwo="to simplicity by delivering exceptional solutions."
                    onClick={() => Router.push('/join-us')}
                />

                <PcodeShapeLayout>
                    <PcodeShape color={Color.Secondary} />
                </PcodeShapeLayout>
            </PageLayout>

            <ProjectDetailTeaserLayout>
                <ProjectDetailTeaser
                    headline="colors mobile app"
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
                    imageSrc="../static/iPhone.png"
                    headlineColor={Color.Primary}
                    onClick={() => Router.push('/main')}
                />
            </ProjectDetailTeaserLayout>

            <StatementLayout>
                <Statement
                    personName={'Christoph Pernsteiner'}
                    personPosition={'CEO .founder'}
                    imagePath={'../static/pernsteiner_christoph.png'}
                >
                    ‘ it would have been impossible to build such a complicated
                    project without the skills of the pcode team. ’
                </Statement>
            </StatementLayout>

            <CodeStandsForSection />

            <ContactFormLayout>
                <ContactForm />
            </ContactFormLayout>
            <Footer />
        </ThemeProvider>
    </React.Fragment>
);

export default MainPage;
