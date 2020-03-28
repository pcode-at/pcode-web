import React from 'react';

import { Color } from '../Color.enum';
import { PositionLevel } from '../shared/enums/PositionLevel.enum';
import { SubHeadline } from './SubHeadline';
import { MonsterType } from '../shared/enums/MonsterType.enum';
import { CONSTANTS } from '../shared/constants';
import styled from 'styled-components';
import { Monster } from './Monster';
import { Button } from '../shared/components/Button';
import { Text } from '../shared/components/Text';

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

    const SvgLayout = styled.div`
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
                <SvgLayout>
                    <StyledMonster type={monsterType} />
                </SvgLayout>

                <PositionWrapper>
                    <SubHeadline color={Color.Secondary}>
                        {' '}
                        {position}{' '}
                    </SubHeadline>
                    <Text color={Color.Secondary} variant={'light'}>
                        {' '}
                        {positionLevel}{' '}
                    </Text>
                </PositionWrapper>

                <DescriptionWrapper>
                    <Text color={Color.Secondary2} variant={'light'}>
                        {positionDescription}
                    </Text>
                </DescriptionWrapper>

                <a
                    href={`mailto:${openPositionDestinationEmail}?subject=${position} - ${positionLevel}`}
                >
                    <Button label="apply" variant={'secondary'} />
                </a>
            </FreeChairWrapper>
        </div>
    );
};
