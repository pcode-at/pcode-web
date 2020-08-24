import * as React from 'react';
import { Box, Flex, Image } from 'rebass';
import { Color } from '../../../Color.enum';
import { SectionHeadline } from '../../../components/SectionHeadline';
import { WordList } from '../../../components/WordList';
import styled from 'styled-components';

export const WorkingAtPcodeSection: React.FC = () => {
    const [isOverMobile, setOverMobileStatus] = React.useState();

    const HeaderLayout = styled(Flex)`
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        padding-bottom: 15rem;

        @media screen and (min-width: 670px) {
            padding-top: 1rem;
            padding-bottom: 4rem;
        }
    `;

    const SectionHeadlineLayout = styled(Box)`
        padding: 2rem;
        max-width: 344px;
        @media screen and (min-width: 670px) {
            margin-left: 5rem;
            max-width: 400px;
        }
    `;

    const WordListLayout = styled(Box)`
        position: absolute;
        top: 163px;
        width: 100%;
        display: flex;
        justify-content: center;
        
        @media screen and (min-width: 670px) {
            position: static;
            top: 0;
            margin-bottom: -100px;
            z-index: 1;
            width: auto;
            padding-top: 2rem;
            margin-right: 20rem;
        },
    `;

    const ImageLayout = styled.div`
        width: 100%;
        margin: 0;
        margin-top: -50px;
        position: relative;
        z-index: 0;
    `;

    const StyledImage = styled(Image)`
        width: 100%;
    `;

    return (
        <React.Fragment>
            <Flex backgroundColor={Color.Secondary}>
                <HeaderLayout>
                    <SectionHeadlineLayout>
                        <SectionHeadline
                            headlinePartOne="working at pcode"
                            headlinePartTwo="means you get a bunch of cool stuff and a great team count on!"
                            separateWithBreak={true}
                            color={Color.Secondary2}
                            className="working-at-pcode-headline"
                        />
                    </SectionHeadlineLayout>
                    <WordListLayout>
                        <WordList
                            words={[
                                'free coffee',
                                'mobile office',
                                'network',
                                'international',
                                'perfection',
                            ]}
                            color={Color.Secondary2}
                        />
                    </WordListLayout>
                </HeaderLayout>
            </Flex>
            <ImageLayout>
                <StyledImage src="./static/working_at_pcode.png" />
            </ImageLayout>
            <style>{`
                .working-at-pcode-headline h2{
                    font-size: 40px;
                }
            `}</style>
        </React.Fragment>
    );
};
