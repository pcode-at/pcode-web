import React from 'react';
import { DeprecatedColor } from '../DeprecatedColor.enum';
import styled from 'styled-components';
import { SectionHeadline } from './SectionHeadline';
import { CopyText, FontStyle } from './CopyText';

type TSkillDetailProps = {
    headlineColor: DeprecatedColor;
    textColor: DeprecatedColor;
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
