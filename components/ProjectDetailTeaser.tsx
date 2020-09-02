import React from 'react';
import { PcodeShape } from './PcodeShape';
import { Color } from '../Color.enum';
import { ActionButton } from './ActionButton';
import { CopyText, FontStyle } from './CopyText';
import styled, { css, breakpoints } from '@xstyled/styled-components';

type Props = {
    headline: string;
    description: string;
    imageSrc: string;
    headlineColor: Color;
    onClick?(): void;
    className?: string;
};

export const ProjectDetailTeaser: React.FC<Props> = ({
    description,
    headline,
    imageSrc,
    headlineColor,
    onClick,
    className,
}) => {
    const StyledImageLayout = styled.img`
        left: 80%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 70%;
    `;

    const GraphicLayout = styled.div`
        position: relative;
        width: 33.33%;
    `;

    const TextLayout = styled.div`
        margin-left: extraLarge;
        position: relative;
        text-align: left;
        width: 100%;
    `;

    const StyledSectionHeadlineLayout = styled(CopyText)`
        font-size: 250%;
        margin-bottom: 1rem;
    `;

    const StyledCopyText = styled(CopyText)`
        margin-bottom: 1rem;
        margin-right: 10%;
        max-width: 700px;
    `;

    const ProjectDetailTeaserLayout = styled.div`
        align-items: center;
        display: flex;
        justify-content: space-between;
    `;

    return (
        <div className={className}>
            <ProjectDetailTeaserLayout>
                <GraphicLayout>
                    <PcodeShape color={Color.Primary} />
                    <StyledImageLayout src={imageSrc} />
                </GraphicLayout>
                <TextLayout>
                    <StyledSectionHeadlineLayout
                        color={headlineColor}
                        fontStyle={FontStyle.Normal}
                    >
                        {headline}
                    </StyledSectionHeadlineLayout>
                    <StyledCopyText
                        color={Color.Secondary}
                        fontStyle={FontStyle.Light}
                    >
                        {description}
                    </StyledCopyText>
                    <ActionButton
                        label="learn more"
                        color={Color.Secondary2}
                        onClick={onClick}
                    />
                </TextLayout>
            </ProjectDetailTeaserLayout>
        </div>
    );
};
