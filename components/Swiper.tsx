import React from 'react';

import { Color } from '../Color.enum';
import { ActionButton } from './ActionButton';
import { SectionHeadline } from './SectionHeadline';
import styled from '@xstyled/styled-components';

type Props = {
    color?: Color;
    textPartOne: string;
    textPartTwo: string;
    onClick(): void;
    className?: string;
};

export const Swiper: React.FC<Props> = ({
    textPartOne,
    textPartTwo,
    color = Color.Secondary,
    onClick,
    className,
}) => {
    const StyledSectionHeadline = styled(SectionHeadline)`
        margin-bottom: medium;
    `;

    return (
        <div className={className}>
            <StyledSectionHeadline
                color={color}
                headlinePartOne={textPartOne}
                headlinePartTwo={textPartTwo}
                separateWithBreak={true}
            />
            <ActionButton
                color={Color.Secondary2}
                padding="0.2rem 1.7rem"
                label="learn more"
                onClick={onClick}
            />
        </div>
    );
};
