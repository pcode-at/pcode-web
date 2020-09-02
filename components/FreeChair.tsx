import React from 'react';

import { Color } from '../Color.enum';
import { CopyText, FontStyle } from './CopyText';
import { PositionLevel } from '../shared/PositionLevel.enum';
import { ActionButton } from './ActionButton';
import { SubHeadline } from './SubHeadline';
import { MonsterType } from '../shared/MonsterType.enum';
import { CONSTANTS } from '../shared/constants';
import styled, { css, breakpoints } from '@xstyled/styled-components';
import { Monster } from './Monster';

type Props = {
    position: string;
    positionLevel: PositionLevel;
    positionDescription: string;
    monsterType: MonsterType;
    className?: string;
};

const { openPositionDestinationEmail } = CONSTANTS;

export const FreeChair: React.FC<Props> = ({
    position,
    positionLevel,
    positionDescription,
    monsterType,
    className,
}) => {
    const FreeChairLayout = styled.div`
        height: 400px;
        text-align: center;
        width: 200px;
    `;

    const SvgLayout = styled.div`
        height: 170px;
        width: 50%;
    `;

    const PositionLayout = styled.div`
        margin-bottom: small;
    `;

    const DescriptionLayout = styled.div`
        display: block;
        margin-bottom: small;
    `;

    const MonsterLayout = styled.div`
        left: 50%;
        position: relative;
        top: 50%;
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
                    <ActionButton
                        color={Color.Secondary2}
                        label="apply"
                        padding="extraSmall large"
                    />
                </a>
            </FreeChairLayout>
        </div>
    );
};
