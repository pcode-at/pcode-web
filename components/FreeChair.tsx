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
    const FreeChairLayout = styled.div`
        width: 200px;
        height: 400px;
        text-align: center;
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
        left: 50%;
        transform: translate(0%, -75%);
    `;

    return (
        <div className={className}>
            <FreeChairLayout>
                <SvgLayout>
                    <MonsterLayout>
                        <Monster type={monsterType} />
                    </MonsterLayout>
                </SvgLayout>

                <PositionLayout>
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
                </PositionLayout>

                <DescriptionLayout>
                    <CopyText
                        color={Color.Secondary2}
                        fontStyle={FontStyle.Light}
                    >
                        {positionDescription}
                    </CopyText>
                </DescriptionLayout>

                <a
                    href={`mailto:${openPositionDestinationEmail}?subject=${position} - ${positionLevel}`}
                >
                    <ActionButton color={Color.Secondary2} label="apply" />
                </a>
            </FreeChairLayout>
        </div>
    );
};
