import React from 'react';
import { styled } from '../stitches.config';
import { GameChanger} from './GameChanger';
import { FluffyMember } from './FluffyMember';
import { LifelongLearner } from './LifelongLearner';
import { SupportiveChallenger } from './SupportiveChallenger';
import { StrategicWizard } from './StrategicWizard';

type Props = {
    className?: string;
    character?: string;
    color?: "blue" | "green" | "red" | "white";
    width?: string;
}

export const Character: React.FC<Props> = ({
    className,
    character = 'GameChanger',
    color = 'blue',
    width = '100%',
}) => { 

    function getCharacter() {
        switch(character){
            case 'GameChanger':
                return <GameChanger color={color}/>
            case 'FluffyMember':
                return <FluffyMember color={color}/>
            case 'LifelongLearner':
                return <LifelongLearner color={color}/>
            case 'SupportiveChallenger':
                return <SupportiveChallenger color={color}/>
            case 'StrategicWizard':
                return <StrategicWizard color={color}/>
        }
    }

    let CharacterLayout = styled('div', {
        width: width,
    })

    return (
        <CharacterLayout className={className}>
            {getCharacter()}
        </CharacterLayout>
    );
}