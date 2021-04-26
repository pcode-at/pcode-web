import React from 'react';
import { styled } from '../stitches.config';

type Props = {
    color?: "blue" | "green" | "red" | "white";
    width?: string;
}

export const StrategicWizard: React.FC<Props> = ({
    color = 'blue',
    width = '100%',
}) => { 

    function getStrategicWizard(){
        switch(color){
            case 'blue':
                return `../static/characters/StrategicWizard_blue.svg`
            case 'green':
                return `../static/characters/StrategicWizard_green.svg`
            case 'red':
                return `../static/characters/StrategicWizard_red.svg`
            case 'white':
                return `../static/characters/StrategicWizard_white.svg`
        }
    }

    let Character = styled('img', {
        width: width, 
    })
    
    return (
        <Character 
            color={color} 
            src={getStrategicWizard()}
        />        
    );

}