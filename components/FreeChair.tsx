import React from 'react';

import PcodeShapeSvg from '../assets/pcode_shape.svg?sprite';
import { Color } from '../Color.enum';
import { theme } from '../theme';
import { CopyText } from './CopyText';
import { PositionLevel } from '../shared/PositionLevel.enum';
import { ActionButton } from './ActionButton';
import { SubHeadline } from './SubHeadline';
import { MonsterType } from '../shared/MonsterType.enum';
import { CONSTANTS } from '../shared/constants';
import { Monster } from './Monster';

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
    return (
        <div className={className}>
            <div className="free-chair-wrapper">
                {/* TODO: use this instead of pcode shape after resolving the monster svg bug */}
                {/*
                    <Monster
                        type={MonsterType.SupportiveChallenger}
                        color={Color.Secondary2}
                        width="20%"
                    />
                */}

                <div className="svg-wrapper">
                    <PcodeShapeSvg
                        style={{ color: theme.colors[color], width: '100px' }}
                    />
                </div>
                <div className="position-with-level-wrapper">
                    <SubHeadline color={Color.Secondary}>
                        {' '}
                        {position}{' '}
                    </SubHeadline>
                    <CopyText color={Color.Secondary}>
                        {' '}
                        {positionLevel}{' '}
                    </CopyText>
                </div>
                <div className="position-description-wrapper">
                    <CopyText color={Color.Secondary2}>
                        {positionDescription}
                    </CopyText>
                </div>

                <a
                    href={`mailto:${openPositionDestinationEmail}?subject=${position} - ${positionLevel}`}
                >
                    <ActionButton thisColor={Color.Secondary2} label="apply"/>
                </a>
            </div>

            <style jsx>{`
                .free-chair-wrapper {
                    width: 200px;
                    text-align: center;
                }
                .svg-wrapper {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 1.5rem;
                }
                .position-with-level-wrapper {
                    margin-bottom: 0.8rem;
                }
                .position-description-wrapper {
                    display: block;
                    margin-bottom: 0.8rem;
                }
            `}</style>
        </div>
    );
};
