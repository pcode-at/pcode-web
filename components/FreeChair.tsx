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
import { theme } from '../theme';

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
        width: ${theme.space[6]};
        height: ${theme.space[7]};
        text-align: center;
    `;

    const SvgLayout = styled.div`
        width: 50%;
        height: ${theme.space[6]};
    `;

    const PositionLayout = styled.div`
        margin-bottom: ${theme.space[1]};
    `;

    const JobDescriptionLayout = styled.div`
        margin-bottom: ${theme.space[1]};
    `;

    const StyledMonster = styled(Monster)`
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(0%, -50%);
    `;

    return (
        <div className={className}>
            <FreeChairLayout>
                <SvgLayout>
                    <StyledMonster type={monsterType} />
                </SvgLayout>

                <PositionLayout>
                    <SubHeadline color={Color.Secondary}>
                        {' '}
                        {position}{' '}
                    </SubHeadline>
                    <Text color={Color.Secondary} variant={'light'}>
                        {' '}
                        {positionLevel}{' '}
                    </Text>
                </PositionLayout>

                <JobDescriptionLayout>
                    <Text color={Color.Secondary2} variant={'light'}>
                        {positionDescription}
                    </Text>
                </JobDescriptionLayout>

                <a
                    href={`mailto:${openPositionDestinationEmail}?subject=${position} - ${positionLevel}`}
                >
                    <Button label="apply" variant={'secondary'} />
                </a>
            </FreeChairLayout>
        </div>
    );
};
