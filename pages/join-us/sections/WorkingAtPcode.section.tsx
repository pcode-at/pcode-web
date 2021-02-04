import * as React from 'react';
import { Box, Flex, Image } from 'rebass';
import { Color } from '../../../Color.enum';
import { SectionHeadline } from '../../../components/SectionHeadline';
import { WordList } from '../../../components/WordList';
import styled from 'styled-components';

export const WorkingAtPcodeSection: React.FC = () => {
    const HeaderLayout = styled(Flex)`
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        position: relative;
        padding-bottom: 15rem;

        @media screen and (min-width: 670px) {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    `;

    const SectionHeadlineLayout = styled(Box)`
        padding: 2rem;
        max-width: 344px;
        @media screen and (min-width: 670px) {
            width: 270px;
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
            margin-left: 5rem;
        }
    `;

    const ImageLayout = styled.div`
        width: 100%;
        margin-top: -20%;
        position: relative;
        z-index: -4;
    `;

    const StyledImage = styled(Image)``;

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
                <StyledImage src="./static/tlp-pcode-27.jpg" />
            </ImageLayout>
        </React.Fragment>
    );
};

export default WorkingAtPcodeSection;
