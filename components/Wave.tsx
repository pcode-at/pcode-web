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

export const Wave: React.FC<Props> = ({ 
    className,
    width = '100%',
    color = 'tertiary',
    size = 'small',
}) => {

    let WaveLayout = styled('div', {
        width: width,
    })

    function getWaveComponent(size) {
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
        <WaveLayout className={className}>
            {getWaveComponent(size)}
        </WaveLayout>

    );

}


