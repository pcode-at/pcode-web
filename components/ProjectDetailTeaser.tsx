import React from 'react';
import { Text } from '../shared/components/Text';
import styled from 'styled-components';
import fluid from 'fluid-system';
import { typography } from 'styled-system';
import { Color } from '../Color.enum';
import { Box } from 'rebass';

type TProjectDetailTeaserProps = {};

export const ProjectDetailTeaser: React.FC<TProjectDetailTeaserProps> = ({}) => {
    const StyledBox = styled(Box)`
        background-color: red;
    `;
    return <StyledBox mb={3}></StyledBox>;
};
