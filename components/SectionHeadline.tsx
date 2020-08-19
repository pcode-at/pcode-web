import React from 'react';
import { Color } from '../Color.enum';
import { Text, Heading } from 'rebass';
import styled from 'styled-components';

type Props = {
    color: Color;
    headlinePartOne: string;
    headlinePartTwo: string;
    separateWithBreak?: boolean;
    maxWidthPartTwo?: string;
    className?: string;
};

export const SectionHeadline: React.FC<Props> = ({
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
            <Heading fontFamily="raleway" color={color}>
                <FirstSpan>{headlinePartOne}</FirstSpan>
                &nbsp;
                {separateWithBreak && <br />}
                <SecondSpan>{headlinePartTwo}</SecondSpan>
            </Heading>
        </div>
    );
};
