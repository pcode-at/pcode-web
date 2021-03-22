import React from 'react';

import { DeprecatedColor } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';
import { SubHeadline } from './SubHeadline';
import { MonsterType } from '../shared/MonsterType.enum';
import { CONSTANTS } from '../shared/constants';
import styled from 'styled-components';
import { Monster } from './Monster';

type Props = {
    characterTitle: string;
    characterDescription: string;
    monsterType: MonsterType;
    textColor: DeprecatedColor;
    className?: string;
};

const { openPositionDestinationEmail } = CONSTANTS;

export const Character: React.FC<Props> = ({
    characterTitle,
    characterDescription,
    monsterType,
    textColor,
    className,
}) => {
    const CharacterLayout = styled.div`
        width: 200px;
        height: 400px;
    `;

    const SvgLayout = styled.div`
        width: 50%;
        height: 170px;
    `;

    const PositionLayout = styled.div`
        margin-bottom: 0.8rem;
    `;

    const DescriptionLayout = styled.div`
        display: block;
        margin-bottom: 0.8rem;
    `;

    const MonsterLayout = styled.div`
        position: relative;
        top: 50%;
        transform: translate(0%, -75%);
    `;

    return (
        <div className={className}>
            <CharacterLayout>
                <SvgLayout>
                    <MonsterLayout>
                        <Monster type={monsterType} />
                    </MonsterLayout>
                </SvgLayout>

                <PositionLayout>
                    <SubHeadline color={textColor} fontStyle={FontStyle.Normal}>
                        {characterTitle}
                    </SubHeadline>
                </PositionLayout>

                <DescriptionLayout>
                    <CopyText color={textColor} fontStyle={FontStyle.Light}>
                        {characterDescription}
                    </CopyText>
                </DescriptionLayout>
            </CharacterLayout>
        </div>
    );
};
