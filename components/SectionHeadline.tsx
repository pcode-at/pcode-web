import React from 'react';
import { Color } from '../Color.enum';
import styled from 'styled-components';
import {Text} from '../shared/components/Text';

type TSectionHeadlineProps = {
    color: Color;
    headlinePartOne: string;
    headlinePartTwo: string;
    separateWithBreak?: boolean;
    maxWidthPartTwo?: string;
    className?: string;
};

export const SectionHeadline: React.FC<TSectionHeadlineProps> = ({
    headlinePartOne,
    headlinePartTwo,
    color,
    separateWithBreak = false,
    maxWidthPartTwo,
    className,
}) => {
    const defaultProps = {
        color,
        fontFamily: 'raleway',
        display: 'inline',
    };

    const FirstSpan = styled.span`
        font-weight: 500;
    `;

    const SecondSpan = styled.span`
        display: ${maxWidthPartTwo ? 'block' : 'inline'};
        max-width: ${maxWidthPartTwo};
        font-weight: 300;
    `;

    return (
        <div className={className}>
            <Text variant={'large'} color={color}>
                <FirstSpan>{headlinePartOne}</FirstSpan>
                &nbsp;
                {separateWithBreak && <br />}
                <SecondSpan>{headlinePartTwo}</SecondSpan>
            </Text>
        </div>
    );
};
