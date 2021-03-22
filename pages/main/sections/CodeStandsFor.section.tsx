import * as React from 'react';
import { Box, Image } from 'rebass';
import { DeprecatedColor } from '../../../Color.enum';
import styled from 'styled-components';
import { WordList } from '../../../components/WordList';
import { CopyText, FontStyle } from '../../../components/CopyText';

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

const CodeStandsForSection: React.FC = () => (
    <React.Fragment>
        <PageLayout>
            <TextLayout>
                <CopyText color={DeprecatedColor.SecondaryLight} fontStyle={FontStyle.Normal}>
                    our
                </CopyText>
                <CopyText color={DeprecatedColor.Primary} fontStyle={FontStyle.Normal}>
                    code
                </CopyText>
                <CopyText color={DeprecatedColor.SecondaryLight} fontStyle={FontStyle.Normal}>
                    stands for
                </CopyText>
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

export default CodeStandsForSection;
