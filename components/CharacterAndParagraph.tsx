import React from 'react';
import { styled } from '../stitches.config';

type Props = {
    className?: string;
    character?: string;
    color?: "blue" | "green" | "red" | "white";
    width?: string;
}

export const CharacterAndParagraph: React.FC<Props> = ({
    className,
    character = 'GameChanger',
    color = 'blue',
    width = '100%',
}) => { 

    let CharacterAndParagraphLayout = styled('div', {

    })

    return (
        <CharacterAndParagraphLayout>
            
        </CharacterAndParagraphLayout>
    );
}