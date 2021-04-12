import React from 'react';
import { styled } from '../stitches.config';
import { Wave } from '../components/Wave';

type Props = {
    className?: string;
    width?: string;
    color?: string;
    size?: "small" | "medium" | "large";
};

// idea: 
// * introduce WaveQuote as variant in Wave
// problems/aspects to consider: 
// * WaveQuote uses Wave as 'background'  
// * WaveQuote can not take any size (small, large)  
// * WaveQuote can not take any color (primary, secondary, tertiary)
// * ! respect the theme ! each Wave color has a specific font color 
// * a given content text is obligatory
//      -> default: lorem ipsum 

export const WaveQuote = styled(Wave, {

})


