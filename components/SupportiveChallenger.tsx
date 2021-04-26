import React from 'react';
import { styled } from '../stitches.config';

type Props = {
    color?: "blue" | "green" | "red" | "white";
    width?: string;
}

export const SupportiveChallenger: React.FC<Props> = ({
    color = 'blue',
    width = '100%',
}) => { 

    function getSupportiveChallenger(){
        switch(color){
            case 'blue':
                return `../static/characters/SupportiveChallenger_blue.svg`
            case 'green':
                return `../static/characters/SupportiveChallenger_green.svg`
            case 'red':
                return `../static/characters/SupportiveChallenger_red.svg`
            case 'white':
                return `../static/characters/SupportiveChallenger_white.svg`
        }
    }

    let Character = styled('img', {
        width: width, 
    })
    
    return (
        <Character 
            color={color} 
            src={getSupportiveChallenger()}
        />        
    );

}