import React from 'react';
import { Color } from '../Color.enum';
import styled, { css, breakpoints } from '@xstyled/styled-components';
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
    //Get padding between text and image
    let imagePaddingCss = 'padding-';
    if (variant == 'imageLeft') {
        imagePaddingCss += 'left';
    } else {
        imagePaddingCss += 'right';
    }
    if (position == 'bottom') {
        imagePaddingCss += ': small;';
    } else {
        imagePaddingCss += ': large;';
    }

    const LightStatementLayout = styled.div(
        breakpoints({
            allDevices: css`
                display: grid;
            `,
            tablet: css`
                grid-template-columns: ${variant == 'imageLeft'
                    ? '1fr 3fr'
                    : '3fr 1fr'};
                padding: 0 medium;
            `,
            desktop: css`
                padding: 0 15%;
            `,
        }),
    );

    const PcodeShapeWithImageGrid = styled(PcodeShapeWithImage)(
        breakpoints({
            allDevices: css`
                grid-column: 1/2;
                grid-row: 1/2;
                padding: 0 medium;
            `,
            tablet: css`
                padding: 0;
                grid-column: ${variant == 'imageLeft' ? '1/2' : '2/3'};
            `,
        }),
    );

    const StatementText = styled.p(
        breakpoints({
            allDevices: css`
                font-family: normal;
                color: ${textAndPcodeShapeColor};
                line-height: 1.333;
                text-align: center;
                font-size: headline5;
                line-height: normal;
                margin: 0;
            `,
            tablet: css`
                text-align: ${variant == 'imageLeft' ? 'left' : 'right'};
            `,
            desktop: css`
                font-size: headline4;
            `,
        }),
    );

    const StatementTextLayout = styled.div(
        breakpoints({
            allDevices: css`
                margin-top: medium;
                grid-row: 2/3;
                ${imagePaddingCss}
            `,
            tablet: css`
                grid-row: 1/2;
                grid-column: ${variant == 'imageLeft' ? '2/3' : '1/2'};
                display: flex;
                flex-direction: column;
                justify-content: ${position == 'bottom'
                    ? 'flex-end'
                    : 'center'};
            `,
        }),
    );

    return (
        <div className={className}>
            <LightStatementLayout>
                <PcodeShapeWithImageGrid
                    color={textAndPcodeShapeColor}
                    imageSource={imagePath}
                    variant={'imageRight'}
                ></PcodeShapeWithImageGrid>
                <StatementTextLayout>
                    <StatementText>'{children}'</StatementText>
                </StatementTextLayout>
            </LightStatementLayout>
        </div>
    );
};
