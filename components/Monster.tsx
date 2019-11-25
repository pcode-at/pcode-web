import React from "react";

import GameChangerSvg from "../assets/game_changer.svg?sprite";
import StrategicWizardSvg from "../assets/strategic_wizard.svg?sprite";
import SupportiveChallengerSvg from "../assets/supportive_challenger.svg?sprite";
import EarBearSvg from "../assets/ear_bear.svg?sprite";
import TentacleEyeSvg from "../assets/tentacle_eye.svg?sprite";

import { Color } from "../Color.enum";
import { MonsterSvgPath } from "../shared/MonsterType.enum";

type TMonsterProps = {
  type: MonsterSvgPath;
  color: Color;
  width: string;
};

export const Monster: React.FC<TMonsterProps> = ({ type, color, width }) => {
  switch (type) {
    case MonsterSvgPath.GameChanger: {
      return <GameChangerSvg />;
    }
    case MonsterSvgPath.StrategicWizard: {
      return <StrategicWizardSvg />;
    }
    case MonsterSvgPath.SupportiveChallenger: {
      return <SupportiveChallengerSvg />;
    }
    case MonsterSvgPath.EarBear: {
      return <EarBearSvg />;
    }
    case MonsterSvgPath.TentacleEye: {
      return <TentacleEyeSvg />;
    }
    default: {
      return <p>INVALID MONSTER TYPE</p>;
    }
  }
};
