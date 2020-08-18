import React from 'react';

import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';
import { PositionLevel } from '../shared/PositionLevel.enum';
import { ActionButton } from './ActionButton';
import { SubHeadline } from './SubHeadline';
import { MonsterType } from '../shared/MonsterType.enum';
import { CONSTANTS } from '../shared/constants';
import styled from 'styled-components';
import { Monster } from './Monster';

type TFreeChairProps = {
    position: string;
    positionLevel: PositionLevel;
    positionDescription: string;
    monsterType: MonsterType;
    className?: string;
};

const { openPositionDestinationEmail } = CONSTANTS;

export const FreeChair: React.FC<TFreeChairProps> = ({
    position,
    positionLevel,
    positionDescription,
    monsterType,
    className,
}) => {
    const FreeChairWrapper = styled.div`
        width: 200px;
        height: 400px;
        text-align: center;
    `;

    const SvgWrapper = styled.div`
        width: 50%;
        height: 170px;
    `;

    const PositionWrapper = styled.div`
        margin-bottom: 0.8rem;
    `;

    const DescriptionWrapper = styled.div`
        display: block;
        margin-bottom: 0.8rem;
    `;

    const StyledMonster = styled(Monster)`
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(0%, -75%);
    `;

    return (
        <div className={className}>
            <FreeChairWrapper>
                <SvgWrapper>
                    <StyledMonster type={monsterType} />
                </SvgWrapper>

                <PositionWrapper>
                    <SubHeadline
                        color={Color.Secondary}
                        fontStyle={FontStyle.Normal}
                    >
                        {' '}
                        {position}{' '}
                    </SubHeadline>
                    <CopyText
                        color={Color.Secondary}
                        fontStyle={FontStyle.Light}
                    >
                        {' '}
                        {positionLevel}{' '}
                    </CopyText>
                </PositionWrapper>

                <DescriptionWrapper>
                    <CopyText
                        color={Color.Secondary2}
                        fontStyle={FontStyle.Light}
                    >
                        {positionDescription}
                    </CopyText>
                </DescriptionWrapper>

                <a
                    href={`mailto:${openPositionDestinationEmail}?subject=${position} - ${positionLevel}`}
                >
                    <ActionButton color={Color.Secondary2} label="apply" />
                </a>
            </FreeChairWrapper>
        </div>
    );
};
