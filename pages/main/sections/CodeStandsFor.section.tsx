import * as React from 'react';
import { Box, Image } from 'rebass';
import { Color } from '../../../Color.enum';
import { theme } from '../../../theme';
import { PcodeShape } from '../../../components/PcodeShape';
import { ActionButton } from '../../../components/ActionButton';
import Router from 'next/router';
import styled from 'styled-components';


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

const ActionButtonLayout = styled(Box)`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -5%;
`;

export const CodeStandsForSection: React.FC = () => (
    <React.Fragment>
        <PageLayout>
            <Image src="./static/nebo_jure.jpg"/>
            <Image src="./static/sandburg.jpg"/>

            <PcodeShapeLayout>
                <PcodeShape width="35%"/>
            </PcodeShapeLayout>
            <ActionButtonLayout>
                <ActionButton
                    label="Join us"
                    onClick={() => Router.push('/join-us')}
                />
            </ActionButtonLayout>
        </PageLayout>
    </React.Fragment>
);
