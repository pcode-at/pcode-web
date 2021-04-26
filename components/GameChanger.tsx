import React from 'react';
import { styled } from '../stitches.config';

type Props = {
    color?: "blue" | "green" | "red" | "white";
    width?: string;
}

export const GameChanger: React.FC<Props> = ({
    color = 'blue',
    width = '100%',
}) => { 

    function getGameChanger(){
        switch(color){
            case 'blue':
                return `../static/characters/GameChanger_blue.svg`
            case 'green':
                return `../static/characters/GameChanger_green.svg`
            case 'red':
                return `../static/characters/GameChanger_red.svg`
            case 'white':
                return `../static/characters/GameChanger_white.svg`
        }
    }

    let Character = styled('img', {
        width: width, 
    })
    
    return (
        <Character 
            src={getGameChanger()}
        />        
    );

}