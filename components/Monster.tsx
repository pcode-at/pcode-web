import React from 'react';

import GameChangerSvg from '../assets/game_changer.svg?sprite';
import StrategicWizardSvg from '../assets/strategic_wizard.svg?sprite';
import SupportiveChallengerSvg from '../assets/supportive_challenger.svg?sprite';
import EarBearSvg from '../assets/ear_bear.svg?sprite';
import TentacleEyeSvg from '../assets/tentacle_eye.svg?sprite';

import { MonsterType } from '../shared/enums/MonsterType.enum';

type TMonsterProps = {
    type: MonsterType;
    className?: string;
};

export const Monster: React.FC<TMonsterProps> = ({ type, className }) => {
    switch (type) {
        case MonsterType.GameChanger: {
            return (
                <div className={className}>
                    <GameChangerSvg />
                </div>
            );
        }
        case MonsterType.StrategicWizard: {
            return (
                <div className={className}>
                    <StrategicWizardSvg />
                </div>
            );
        }
        case MonsterType.SupportiveChallenger: {
            return (
                <div className={className}>
                    <SupportiveChallengerSvg />
                </div>
            );
        }
        case MonsterType.EarBear: {
            return (
                <div className={className}>
                    <EarBearSvg />
                </div>
            );
        }
        case MonsterType.TentacleEye: {
            return (
                <div className={className}>
                    <TentacleEyeSvg />
                </div>
            );
        }
        default: {
            return <p>INVALID MONSTER TYPE</p>;
        }
    }
};
