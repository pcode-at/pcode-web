import React from 'react';
import { DeprecatedColor } from '../DeprecatedColor.enum';
import { ActionButtonDeprecated } from './ActionButtonDeprecated';
import { SectionHeadline } from './SectionHeadline';
import styled from 'styled-components';

type Props = {
    color?: DeprecatedColor;
    textPartOne: string;
    textPartTwo: string;
    onClick(): void;
    className?: string;
};

export const Swiper: React.FC<Props> = ({
    textPartOne,
    textPartTwo,
    color = DeprecatedColor.SecondaryDark,
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
            <ActionButtonDeprecated
                color={DeprecatedColor.SecondaryLight}
                padding="0.2rem 1.7rem"
                label="learn more"
                onClick={onClick}
            />
        </div>
    );
};
