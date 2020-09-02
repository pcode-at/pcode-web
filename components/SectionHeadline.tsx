import React from 'react';
import { Color } from '../Color.enum';
import styled from '@xstyled/styled-components';

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
    const FirstSpan = styled.span`
        font-weight: 500;
    `;

    const SecondSpan = styled.span`
        display: ${maxWidthPartTwo ? 'block' : 'inline'};
        font-weight: 300;
        max-width: ${maxWidthPartTwo};
    `;

    const Heading = styled.h1`
        color: ${color};
        font-family: normal;
    `;

    return (
        <div className={className}>
            <Heading>
                <FirstSpan>{headlinePartOne}</FirstSpan>
                &nbsp;
                {separateWithBreak && <br />}
                <SecondSpan>{headlinePartTwo}</SecondSpan>
            </Heading>
        </div>
    );
};
