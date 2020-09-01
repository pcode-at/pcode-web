import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex, Text } from 'rebass';
import { theme } from '../theme';
import styled from 'styled-components';
import { PcodeShapeWithImage } from './PcodeShapeWithImage';

type lightStatementVariant = 'imageRight' | 'imageLeft';
type lightStatementPosition = 'normal' | 'bottom';

type Props = {
    textAndPcodeShapeColor: Color;
    variant: lightStatementVariant;
    imagePath: string;
    position?: lightStatementPosition;
    className?: string;
};

export const LightStatement: React.FC<Props> = ({
    children,
    textAndPcodeShapeColor,
    variant,
    imagePath,
    position = 'normal',
    className,
}) => {
    const { light, normal } = theme.font;

    const LightStatementLayout = styled(Box)`
        display: grid;
        ${theme.mediaQueries.tablet} {
            grid-template-columns: ${variant == 'imageLeft'
                ? '1fr 3fr'
                : '3fr 1fr'};
            padding: 0 ${theme.space.m}px;
        }
        ${theme.mediaQueries.desktop} {
            padding: 0 15%;
        }
    `;

    const PcodeShapeWithImageGrid = styled(PcodeShapeWithImage)`
        grid-column: 1/2;
        grid-row: 1/2;
        padding: 0 ${theme.space.m}px;
        ${theme.mediaQueries.tablet} {
            padding: 0;
            grid-column: ${variant == 'imageLeft' ? '1/2' : '2/3'};
        }
    `;

    const StatementText = styled(Text)`
        font-family: ${theme.font.normal.fontFamily};
        color: ${theme.colors[textAndPcodeShapeColor]};
        line-height: 1.333;
        text-align: center;
        ${theme.mediaQueries.tablet} {
            text-align: ${variant == 'imageLeft' ? 'left' : 'right'};
        }
    `;

    const StatementTextLayout = styled(Box)`
        margin-top: ${theme.space.l}px;
        grid-row: 2/3;
        ${theme.mediaQueries.tablet} {
            grid-row: 1/2;
            grid-column: ${variant == 'imageLeft' ? '2/3' : '1/2'};
            display: flex;
            flex-direction: column;
            justify-content: ${position == 'bottom' ? 'flex-end' : 'center'};
        }
    `;

    return (
        <div className={className}>
            <LightStatementLayout px={['s', 'm']}>
                <PcodeShapeWithImageGrid
                    color={textAndPcodeShapeColor}
                    imageSource={imagePath}
                    variant={'imageRight'}
                ></PcodeShapeWithImageGrid>
                <StatementTextLayout
                    pl={
                        position == 'bottom' && variant == 'imageLeft'
                            ? theme.space.s + 'px'
                            : theme.space.m + 'px'
                    }
                    pr={
                        position == 'bottom' && variant == 'imageRight'
                            ? theme.space.s + 'px'
                            : theme.space.m + 'px'
                    }
                >
                    <StatementText
                        fontSize={['h5', 'h5', 'h4']}
                        lineHeight={normal.lineHeight}
                    >
                        '{children}'
                    </StatementText>
                </StatementTextLayout>
            </LightStatementLayout>
        </div>
    );
};
