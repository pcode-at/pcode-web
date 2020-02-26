import * as React from 'react';
import { Box, Image } from 'rebass';
import { Color } from '../../../Color.enum';
import styled from 'styled-components';
import { WordList } from '../../../components/WordList';

const PageLayout = styled(Box)`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const PcodeShapeLayout = styled(Box)`
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: -6%;
`;

const TextLayout = styled(Box)`
    margin: 0 auto 20px;
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    font-size: 250%;
`;

export const CodeStandsForSection: React.FC = () => (
    <React.Fragment>
        <PageLayout>
            <TextLayout>
                <Text color={Color.Secondary2} fontStyle={FontStyle.Normal}>
                    our
                </Text>
                <Text color={Color.Primary} fontStyle={FontStyle.Normal}>
                    code
                </Text>
                <Text color={Color.Secondary2} fontStyle={FontStyle.Normal}>
                    stands for
                </Text>
            </TextLayout>

            <Image src="./static/nebo_jure.jpg" />
            <Image src="./static/sandburg.jpg" />

            <PcodeShapeLayout>
                <WordList
                    words={[
                        'praise',
                        'potential',
                        'people',
                        'passion',
                        'power',
                        'perfection',
                    ]}
                />
            </PcodeShapeLayout>
        </PageLayout>
    </React.Fragment>
);
