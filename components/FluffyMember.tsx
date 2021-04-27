import React from 'react';
import { styled } from '../stitches.config';

type Props = {
    color?: "blue" | "green" | "red" | "white";
    width?: string;
}

export const FluffyMember: React.FC<Props> = ({
    color = 'blue',
    width = '100%',
}) => { 

    function getFluffyMember(){
        switch(color){
            case 'blue':
                return `../static/characters/FluffyMember_blue.svg`
            case 'green':
                return `../static/characters/FluffyMember_green.svg`
            case 'red':
                return `../static/characters/FluffyMember_red.svg`
            case 'white':
                return `../static/characters/FluffyMember_white.svg`
        }
    }

    let Character = styled('img', {
        width: width, 
    })
    
    return (
        <Character 
            src={getFluffyMember()}
        />        
    );

}