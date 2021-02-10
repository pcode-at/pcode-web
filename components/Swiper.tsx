import React from 'react';

import { Color } from '../Color.enum';
import { ActionButton } from './ActionButton';
import { SectionHeadline } from './SectionHeadline';
import styled from 'styled-components';

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
    color = Color.SecondaryDark,
    onClick,
    className,
}) => {
    const StyledSectionHeadline = styled(SectionHeadline)`
        margin-bottom: 0.7rem;
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
                color={Color.SecondaryLight}
                padding="0.2rem 1.7rem"
                label="learn more"
                onClick={onClick}
            />
        </div>
    );
};
