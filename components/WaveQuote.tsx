import React from 'react';
import { styled } from '../stitches.config';
import { Wave } from '../components/Wave';
import { theme } from '../theme';

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
    contentText = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, ',
    color = 'red',
    size = 'small',
    width = '100%',
}) => {

    let WaveQuoteLayout = styled('div', {
        width: width,
        position: 'absolute',
    })

    let QuoteLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '80px 0px 0px',
        // width: `calc( (808/1440) * ${width} )`,

        
    })

    let Quote = styled('p', {
        // position: 'static',
        
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
                    fontsize: theme.Wave.Quote.Small.Font.Size,
                    fontFamily: theme.Wave.Quote.Small.Font.Family,
                    fontWeight: '$light', // TODO: 2 different weights used
                    // lineHeight: theme.Wave.Quote.Small.LineHeight,
                }
            },
        }
    })

    return (
        <WaveQuoteLayout className={className}>
            <Wave color={color} size={size}/>
            <QuoteLayout>
                <Quote color={color} size={size}>
                    {contentText}
                </Quote>
            </QuoteLayout>
        </WaveQuoteLayout>
    );
}
