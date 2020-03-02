import React from 'react';

import { Color } from '../Color.enum';
import styled from 'styled-components';
import { Button } from '../shared/components/Button';
import { SectionHeadline } from './SectionHeadline';

type TSwiperProps = {
    color?: Color;
    textPartOne: string;
    textPartTwo: string;
    onClick(): void;
    className?: string;
};

export const Swiper: React.FC<TSwiperProps> = ({
    textPartOne,
    textPartTwo,
    color = Color.Secondary,
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
            <Button
                variant={'secondary'}
                label="learn more"
                onClick={onClick}
            />
        </div>
    );
};
