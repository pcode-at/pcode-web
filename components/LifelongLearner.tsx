import React from 'react';
import { styled } from '../stitches.config';

type Props = {
    color?: "blue" | "green" | "red" | "white";
    width?: string;
}

export const LifelongLearner: React.FC<Props> = ({
    color = 'blue',
    width = '100%',
}) => { 

    function getLifelongLearner(){
        switch(color){
            case 'blue':
                return `../static/characters/LifelongLearner_blue.svg`
            case 'green':
                return `../static/characters/LifelongLearner_green.svg`
            case 'red':
                return `../static/characters/LifelongLearner_red.svg`
            case 'white':
                return `../static/characters/LifelongLearner_white.svg`
        }
    }

    let Character = styled('img', {
        width: width, 
    })
    
    return (
        <Character 
            color={color} 
            src={getLifelongLearner()}
        />        
    );

}