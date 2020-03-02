import React from 'react';

import { Color } from '../Color.enum';
import styled from 'styled-components';
import { Button } from '../shared/components/Button';
import { SectionHeadline } from './SectionHeadline';
import { theme } from '../theme';
import { Box } from 'rebass';

type THeroHeaderProps = {
    color?: Color;
    textPartOne: string;
    textPartTwo: string;
    onClick(): void;
    className?: string;
};

export const HeroHeader: React.FC<THeroHeaderProps> = ({
    textPartOne,
    textPartTwo,
    color = Color.Secondary,
    onClick,
    className,
}) => {
    const SectionHeadlineLayout = styled(Box)`
        margin-bottom: ${theme.space[1]};
    `;

    const ButtonLayout = styled(Box)`
        float: left;
    `;

    return (
        <div className={className}>
            <SectionHeadlineLayout>
                <SectionHeadline
                    color={color}
                    headlinePartOne={textPartOne}
                    headlinePartTwo={textPartTwo}
                    separateWithBreak={true}
                />
            </SectionHeadlineLayout>
            <ButtonLayout>
                <Button
                    variant={'secondary'}
                    label="learn more"
                    onClick={onClick}
                />
            </ButtonLayout>
        </div>
    );
};
