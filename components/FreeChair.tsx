import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { CopyText, FontStyle } from './CopyText';
import { PositionLevel } from '../shared/PositionLevel.enum';
import { ActionButton } from './ActionButton';
import { SubHeadline } from './SubHeadline';
import { MonsterType } from '../shared/MonsterType.enum';
import { CONSTANTS } from '../shared/constants';
import { Monster } from './Monster';
import styled from 'styled-components';

type TFreeChairProps = {
    position: string;
    positionLevel: PositionLevel;
    positionDescription: string;
    monsterType?: MonsterType;
    colorMonster?: Color;
    className?: string;
};

const { openPositionDestinationEmail } = CONSTANTS;

export const FreeChair: React.FC<TFreeChairProps> = ({
     colorMonster: color = Color.Primary,
     position,
     positionLevel,
     positionDescription,
     className,
}) => {

    const FreeChairWrapper = styled.div`
        width: 200px;
        text-align: center;
    `;

    const SvgWrapper = styled.div`
        display: flex;
        justify-content: center;
        margin-bottom: 1.5rem;
    `;

    const StyledPcodeShapeSvg = styled(PcodeShapeSvg)`
        color: ${theme.colors[color]};
        width: 100px;
    `;

    const PositionWrapper = styled.div`
        margin-bottom: 0.8rem;
    `;

    const DescriptionWrapper = styled.div`
        display: block;
        margin-bottom: 0.8rem;
    `;

    return (
        <div className={className}>
            <FreeChairWrapper>
                {/* TODO: use this instead of pcode shape after resolving the monster svg bug */}
                {/*
                    <Monster
                        type={MonsterType.SupportiveChallenger}
                        color={Color.Secondary2}
                        width="20%"
                    />
                */}

                <SvgWrapper>
                    <PcodeShapeSvg
                        style={{ color: theme.colors[color], width: '100px' }}
                    />
                </SvgWrapper>

                <PositionWrapper>
                    <SubHeadline color={Color.Secondary}>
                        {' '}
                        {position}{' '}
                    </SubHeadline>
                    <CopyText color={Color.Secondary} fontStyle={FontStyle.Light}>
                        {' '}
                        {positionLevel}{' '}
                    </CopyText>
                </PositionWrapper>

                <DescriptionWrapper>
                    <CopyText color={Color.Secondary2} fontStyle={FontStyle.Light}>
                        {positionDescription}
                    </CopyText>
                </DescriptionWrapper>

                <a
                    href={`mailto:${openPositionDestinationEmail}?subject=${position} - ${positionLevel}`}
                >
                    <ActionButton color={Color.Secondary2} label="apply"/>
                </a>
            </FreeChairWrapper>
        </div>
    );
};
