import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';
<<<<<<< HEAD
import { themeDeprecated } from '../../themeDeprecated';
=======
import { theme } from '../../themeDeprecated';
>>>>>>> a1406cc18eb21743f80ff948b98dccfbf89dd9ef
import { SiteHeader } from '../../components/SiteHeader';
import { Color } from '../../Color.enum';
import { Footer } from '../../components/Footer';
import { SectionHeadline } from '../../components/SectionHeadline';
import { Box, Flex } from 'rebass';
import { FreeChair } from '../../components/FreeChair';
import { PositionLevel } from '../../shared/PositionLevel.enum';
import { CopyText, FontStyle } from '../../components/CopyText';
import { Bubble } from '../../components/Bubble';
import { ActionButton } from '../../components/ActionButton';
import WorkingAtPcodeSection from './sections/WorkingAtPcode.section';
import { MonsterType } from '../../shared/MonsterType.enum';
import styled from 'styled-components';
import { Statement2 } from '../../components/Statement2';
import { Statement } from '../../components/Statement';

const FreeChairsLayout = styled(Flex)`
    justify-content: center;
    flex-wrap: wrap;
`;

const FreeChairHeadlineLayout = styled(Box)`
    text-align: center;
    margin: 7rem 0 5rem 0;
`;

const PcodeShapeLayout = styled(Box)`
    position: absolute;
    right: -80px;
    bottom: -80px;
    display: none;
    @media screen and (min-width: 670px) {
        display: block;
    }
`;

const LearnMoreButtonLayout = styled(Box)`
    margin-top: 30px;
`;

const CopyTextLayout = styled(Box)`
    max-width: 400px;
`;

const HeadlineLayout = styled(Box)`
    margin-bottom: 30px;
`;

const AboutPcodeLayout = styled(Box)`
    position: relative;
    padding: 3.5rem 2rem 3.5rem 2rem;
    justify-content: space-between;
    @media screen and (min-width: 670px) {
        display: block;
    }
`;

const StatementLayout = styled(Box)`
    @media screen and (min-width: 616px) {
        margin-top: -7rem;
    }
`;

const JoinUsPage = () => (
    <React.Fragment>
        <ThemeProvider theme={themeDeprecated}>
            <SiteHeader color={Color.White} />

            <AboutPcodeLayout backgroundColor={Color.SecondaryLight}>
                <HeadlineLayout>
                    <SectionHeadline
                        color={Color.SecondaryDark}
                        headlinePartOne="we are adapting to new challenges"
                        headlinePartTwo="by developing and investing in our people"
                        separateWithBreak={true}
                    />
                </HeadlineLayout>
                <CopyTextLayout>
                    <CopyText color={Color.White} fontStyle={FontStyle.Light}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet.
                    </CopyText>
                </CopyTextLayout>

                <LearnMoreButtonLayout>
                    <ActionButton color={Color.Primary} label="learn more" />
                </LearnMoreButtonLayout>
                <PcodeShapeLayout>
                    <Bubble color={Color.SecondaryDark} />
                </PcodeShapeLayout>
            </AboutPcodeLayout>

            <FreeChairHeadlineLayout>
                <SectionHeadline
                    color={Color.SecondaryLight}
                    headlinePartOne="our free"
                    headlinePartTwo="chairs, waiting for you!"
                />
            </FreeChairHeadlineLayout>

            <FreeChairsLayout>
                <FreeChair
                    monsterType={MonsterType.SupportiveChallenger}
                    position="Frontend developer"
                    positionLevel={PositionLevel.Junior}
                    positionDescription="Description, description"
                />
                <FreeChair
                    monsterType={MonsterType.GameChanger}
                    position="Frontend developer"
                    positionLevel={PositionLevel.Senior}
                    positionDescription="Description, description"
                />
                <FreeChair
                    monsterType={MonsterType.EarBear}
                    position="UX designer"
                    positionLevel={PositionLevel.Junior}
                    positionDescription="Description, description"
                />
                <FreeChair
                    monsterType={MonsterType.TentacleEye}
                    position="Backend developer"
                    positionLevel={PositionLevel.Senior}
                    positionDescription="Description, description"
                />
            </FreeChairsLayout>

            <WorkingAtPcodeSection />

            <StatementLayout>
                <Statement2
                    personName={'Michael Kotek'}
                    personPosition={'Frontend Developer'}
                    imagePath={'../static/kotek_michael.png'}
                    color={Color.SecondaryDark}
                >
                    ‘ working at pcode means one simple thing: working for the
                    future! ’
                </Statement2>
            </StatementLayout>

            <Footer />
        </ThemeProvider>
    </React.Fragment>
);

export default JoinUsPage;
