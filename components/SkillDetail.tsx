import React from 'react';
import { Color } from '../Color.enum';
import { Text, Heading } from 'rebass';
import styled from 'styled-components';
import { SectionHeadline } from './SectionHeadline';
import { CopyText, FontStyle } from './CopyText';

type TSkillDetailProps = {
    headlineColor: Color;
    textColor: Color;
    headlineContent: string;
    className?: string;
};

export const SkillDetail: React.FC<TSkillDetailProps> = ({
    headlineColor,
    textColor,
    headlineContent,
    className,
    children,
}) => {
    const DistanceLayout = styled.div`
        height: 0.5rem;
    `;
    return (
        <div className={className}>
            <SectionHeadline
                headlinePartOne={headlineContent}
                color={headlineColor}
                headlinePartTwo=""
                className="skill-detail-headline"
            ></SectionHeadline>
            <DistanceLayout></DistanceLayout>
            <CopyText color={textColor} fontStyle={FontStyle.Normal}>
                {children}
            </CopyText>
            <style>
                {`
                .skill-detail-headline h2{
                    font-size: 250%;
                }
                `}
            </style>
        </div>
    );
};
