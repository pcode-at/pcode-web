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
};

export const ProjectHeader: React.FC<ProjectHeader> = ({
    startHeadlineOne,
    startHeadlineTwo,
    detailText,
    detailLink,
    imageSource,
    backgroundColor,
}) => {
    return (
        <div className="project-header-box">
            <div className="project-header-info">
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
                <a
                    href={'https://' + detailLink}
                    className="project-header-link"
                    target="_blank"
                >
                    <CopyText
                        color={Color.Secondary}
                        fontStyle={FontStyle.Normal}
                    >
                        {detailLink}
                    </CopyText>
                </a>
            </div>
            <img
                className="project-header-img"
                src={imageSource}
                alt="Projekt-Header-Bild"
            />
            <style>
                {`
                    *{
                        box-sizing: border-box;
                    }
                    .project-header-box{
                        display: grid;
                        width: 100vw;
                        grid-template-columns: 1fr 1fr;
                        background-color: lightblue;
                        justify-content: center;
                        align-items: center;
                    }
                    .project-header-headline h2{
                        font-size: 300%;
                    }
                    .project-header-info, .project-header-box img{
                        padding: 10%;
                    }
                    
                    .project-header-detail{
                        font-size: 130%;
                        padding: 0;
                        margin: 0;
                    }
                    .project-header-img{
                        max-width: 100%;
                        max-height: 40vw;
                        justify-self: center;
                    }
                    .project-header-link{
                        text-decoration: none;
                    }
                    `}
            </style>
        </div>
    );
};
