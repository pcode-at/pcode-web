import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex } from 'rebass';
import { theme } from '../theme';
import styled from 'styled-components';
import { PcodeShapeWithImage } from './PcodeShapeWithImage';

export type lightStatementVariant = 'imageRight' | 'imageLeft';

type Props = {
    textAndPcodeShapeColor: Color;
    variant: lightStatementVariant;
    imagePath: string;
    className?: string;
};

export const LightStatement: React.FC<Props> = ({
    children,
    textAndPcodeShapeColor,
    variant,
    imagePath,
    className,
}) => {
    const { light, normal } = theme.font;

    const LightStatementLayout = styled(Box)`
        display: grid;
        grid-template-columns: ${variant == 'imageLeft'
            ? '1fr 3fr'
            : '3fr 1fr'};
        padding: 0 15%;
    `;

    const PcodeShapeWithImageGrid = styled(PcodeShapeWithImage)`
        grid-column: ${variant == 'imageLeft' ? '1/2' : '2/3'};
    `;

    const StatementText = styled.p`
        font-size: 200%;
        font-family: ${theme.font.normal.fontFamily};
        color: ${theme.colors[textAndPcodeShapeColor]};
    `;

    const StatementTextLayout = styled(Box)`
        grid-row: 1/2;
        grid-column: ${variant == 'imageLeft' ? '2/3' : '1/2'};
        display: flex;
        flex-direction: column;
        justify-content: center;
    `;

    return (
        <div className={className}>
            <LightStatementLayout>
                {/* ToDo: Implement the image source to the pcode shape wit image component */}
                <PcodeShapeWithImageGrid
                    color={textAndPcodeShapeColor}
                ></PcodeShapeWithImageGrid>
                <StatementTextLayout>
                    <StatementText>'{children}'</StatementText>
                </StatementTextLayout>
            </LightStatementLayout>
        </div>
    );
};
