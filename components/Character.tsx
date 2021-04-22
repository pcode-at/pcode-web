import React from 'react';
import { theme } from '../theme';
import { styled } from '../stitches.config';

type Props = {
    className?: string;
}

export const Character: React.FC<Props> = ({
    className,
}) => { 

    let CharacterLayout = styled('div', {

    })

    return (
        <CharacterLayout className={className}>

        </CharacterLayout>
    );
}