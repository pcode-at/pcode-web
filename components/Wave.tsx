import React from 'react';
import { styled } from '../stitches.config';
import { WaveS } from './WaveS';
import { WaveM } from './WaveM';
import { WaveL } from './WaveL';

type Props = {
    className?: string;
    width?: string;
    color?: string;
    size?: "small" | "medium" | "large";
};

// TODO: use design tokens for colors, not 'regular' strings 
export const Wave: React.FC<Props> = ({ 
    className,
    width = '100%',
    color = 'red',
    size = 'small',
}) => {

    let BaseLayout = styled('div', {
        width: width,
        position: 'relative',
    })

    // returns the correct 'background' wave component based on given size
    function getBaseWaveComponent(size) {
        switch(size){
            case 'small':
                return <WaveS color={color}/>;
            case 'medium':
                return <WaveM color={color}/>;
            case 'large':
                return <WaveL color={color}/>;
        }
    }

    return(
        <BaseLayout className={className}>
            {getBaseWaveComponent(size)}
        </BaseLayout>
    );

}
