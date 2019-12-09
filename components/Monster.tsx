import React from 'react';

import GameChangerSvg from '../assets/game_changer.svg?sprite';
import StrategicWizardSvg from '../assets/strategic_wizard.svg?sprite';
import SupportiveChallengerSvg from '../assets/supportive_challenger.svg?sprite';
import EarBearSvg from '../assets/ear_bear.svg?sprite';
import TentacleEyeSvg from '../assets/tentacle_eye.svg?sprite';

import { Color } from '../Color.enum';
import { MonsterType } from '../shared/MonsterType.enum';

type TMonsterProps = {
    type: MonsterType;
    color: Color;
    width: string;
};

export const Monster: React.FC<TMonsterProps> = ({ type, color, width }) => {
    switch (type) {
        case MonsterType.GameChanger: {
            return <GameChangerSvg />;
        }
        case MonsterType.StrategicWizard: {
            return <StrategicWizardSvg />;
        }
        case MonsterType.SupportiveChallenger: {
            return <SupportiveChallengerSvg />;
        }
        case MonsterType.EarBear: {
            return <EarBearSvg />;
        }
        case MonsterType.TentacleEye: {
            return <TentacleEyeSvg />;
        }
        default: {
            return <p>INVALID MONSTER TYPE</p>;
        }
    }
};
