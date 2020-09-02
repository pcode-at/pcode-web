import React from 'react';
import { Color } from '../Color.enum';
import { PcodeShapeWithImage } from './PcodeShapeWithImage';
import { CopyText, FontStyle } from './CopyText';
import styled, { css, breakpoints } from '@xstyled/styled-components';

type Props = {
    color: Color;
    personName: string;
    personPosition: string;
    className?: string;
    imagePath: string;
};

export const PersonWithFunction: React.FC<Props> = ({
    color,
    className,
    personName,
    personPosition,
    imagePath,
}) => {
    const PersonWithFunctionLayout = styled.div`
        align-items: center;
        display: flex;
        flex-direction: column;
    `;

    const PersonNameWrapper = styled.div`
        font-size: 130%;
        margin-top: 2em;
        text-align: center;
    `;

    const PersonPositionWrapper = styled.div`
        font-size: 130%;
        text-align: center;
    `;

    const PcodeShapeLayout = styled.div`
        width: 200px;
    `;
    return (
        <div className={className}>
            <PersonWithFunctionLayout>
                <PcodeShapeLayout>
                    <PcodeShapeWithImage
                        imageSource={imagePath}
                        variant={'imageRight'}
                        color={Color.Secondary}
                    />
                </PcodeShapeLayout>
                <PersonNameWrapper>
                    <CopyText color={color} fontStyle={FontStyle.Normal}>
                        {personName}
                    </CopyText>
                </PersonNameWrapper>

                <PersonPositionWrapper>
                    <CopyText fontStyle={FontStyle.Light} color={color}>
                        {personPosition}
                    </CopyText>
                </PersonPositionWrapper>
            </PersonWithFunctionLayout>
        </div>
    );
};
