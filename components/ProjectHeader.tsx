import React from 'react';
import { theme } from '../theme';
import { Text, Heading } from 'rebass';
import styled from 'styled-components';
import { Color } from '../Color.enum';
import { CopyText, FontStyle } from '../components/CopyText';
import { SectionHeadline } from '../components/SectionHeadline';

type ProjectHeader = {
    startHeadlineOne: string;
    startHeadlineTwo: string;
    detailText: string;
    detailLink: string;
    imageSource: string;
    backgroundColor: Color;
    className?: string;
};

export const ProjectHeader: React.FC<ProjectHeader> = ({
    startHeadlineOne,
    startHeadlineTwo,
    detailText,
    detailLink,
    imageSource,
    backgroundColor,
    className,
}) => {
    const ProjectHeaderLayout = styled.div`
        display: grid;
        width: 100vw;
        grid-template-columns: 1fr 1fr;
        background-color: ${theme.colors[backgroundColor]};
        justify-content: center;
        align-items: center;
    `;

    const ProjectHeaderInfoLayout = styled.div`
        padding: 10%;
    `;

    const StyledLink = styled.a`
        text-decoration: none;
    `;

    const StyledProjectImage = styled.img`
        width: 80%;
        justify-self: center;
    `;
    return (
        <div className={className}>
            <ProjectHeaderLayout>
                <ProjectHeaderInfoLayout>
                    <SectionHeadline
                        className="project-header-headline"
                        color={Color.Secondary}
                        headlinePartOne={startHeadlineOne}
                        headlinePartTwo={startHeadlineTwo}
                        separateWithBreak={true}
                    ></SectionHeadline>
                    <br />
                    <CopyText
                        className="project-header-detail"
                        color={Color.White}
                        fontStyle={FontStyle.Light}
                    >
                        {detailText}
                    </CopyText>
                    <br />
                    <StyledLink href={'https://' + detailLink} target="_blank">
                        <CopyText
                            color={Color.Secondary}
                            fontStyle={FontStyle.Normal}
                        >
                            {detailLink}
                        </CopyText>
                    </StyledLink>
                </ProjectHeaderInfoLayout>
                <StyledProjectImage
                    src={imageSource}
                    alt="Projekt-Header-Bild"
                />
            </ProjectHeaderLayout>
            <style>
                {`
                    .project-header-headline h2{
                        font-size: 300%;
                    }
                    
                    .project-header-detail{
                        font-size: 130%;
                        padding: 0;
                        margin: 0;
                    }
                `}
            </style>
        </div>
    );
};
