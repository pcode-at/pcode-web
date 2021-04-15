import React from 'react';
import { styled } from '../stitches.config';
import { Wave } from '../components/Wave';
import { theme } from '../theme';
import { rootCertificates } from 'node:tls';

// idea: 
// * introduce WaveQuote as variant in Wave
// problems/aspects to consider: 
// * WaveQuote uses Wave as 'background'  
// * WaveQuote can not take any size (small, large)  
// * WaveQuote can not take any color (primary, secondary, tertiary)
// * ! respect the theme ! each Wave color has a specific font color 
// * a given content text is obligatory
//      -> default: lorem ipsum 

type Props = {
    className?: string;
    contentText?: string;    
    color?: string; // color describes the background color 
    size?: "small" | "large";
    width?: string;
};

export const WaveQuote: React.FC<Props> = ({
    className,
    contentText = 'Unsere besondere Fähigkeit liegt darin, dass wir den Dingen auf den Grund gehen und mutige Entscheidungen treffen.',
    color = 'red',
    size = 'small',
    width = '100%',
    // width = '1440px',
}) => {

    let WaveQuoteLayout = styled('div', {
        width: width,
        position: 'relative',
    })

    let WaveLayout = styled('div', {
        position: 'relative',
        transform: 'rotate(180deg)',
    })

    let QuoteLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '80px 0px 0px',
        
        position: 'absolute',

        // width: `calc( (808/1440) * ${width} )`,

        // transform: 'translate(-50%, -50%)',
        
    })

    let Quote = styled('p', {
        // position: 'relative',
        // position: 'static',
        // position: 'absolute',
        
        // top: '20.83%',
        // left: `calc(50% - 808px/2)`,

        textTransform: 'lowercase',

        variants: {
            color: {
                red: {
                    color: theme.Wave.Quote.Small.Font.Color.Red,
                },
            },
            size: {
                small: {
                    fontSize: theme.Wave.Quote.Small.Font.Size,
                    fontFamily: theme.Wave.Quote.Small.Font.Family,
                    fontWeight: '$light', // TODO: 2 different weights used
                    lineHeight: theme.Wave.Quote.Small.LineHeight,
                }
            },
        }
    })

    return (
        <WaveQuoteLayout className={className}>
            <WaveLayout>
                <Wave color={color} size={size}/>
            </WaveLayout>
            <QuoteLayout>
                <Quote color={color} size={size}>
                    {contentText}
                </Quote>
            </QuoteLayout>
        </WaveQuoteLayout>
    );
}
