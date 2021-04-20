import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';

type Props = {
    className?: string;
    contentText?: string;    
    boldText?: string;
    color?: "red" | "blue" | "green"; // color describes the background color 
    size?: "small" | "large";
    width?: string;
};

export const WaveQuote: React.FC<Props> = ({
    className,
     contentText = 'Unsere besondere Fähigkeit liegt darin, dass wir den Dingen auf den Grund gehen und mutige Entscheidungen treffen.',
    //boldText = 'Unsere besondere Fähigkeit liegt darin, ',
    //contentText = 'dass wir den Dingen auf den Grund gehen und mutige Entscheidungen treffen.',
    color = 'red',
    size = 'small',
    width = '100%',
}) => {

    let WaveQuoteLayout = styled('div', {
        position: 'relative',
        width: width,
        
        variants: {
            color: {
                blue: {
                    backgroundColor: theme.Wave.Color.Blue,
                },
                green: {
                    backgroundColor: theme.Wave.Color.Green,
                },
                red: {
                    backgroundColor: theme.Wave.Color.Red,
                },
            },
            size: {
                small: {
                    maskImage: `url(${'../static/wave/wave-s.svg?sprite'})`,
                    maskRepeat: 'no-repeat',
                    maskSize: 'cover', 
                    maskPosition: 'top',
                    // TODO: flip mask
                    // transform: 'rotate(180deg)', // flips whole component
                },
                large: {
                    maskImage: `url(${'../static/wave/wave-l.svg?sprite'})`,
                    maskRepeat: 'no-repeat',
                    maskSize: 'cover', 
                    maskPosition: 'bottom',
                }
            }
        }

    })

    let QuoteLayout = styled('div', {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        marginLeft: `calc( (108/1440) * ${width} )`,
        padding: '80px 0px 0px',
        position: 'relative',
        width: `calc( (808/1440) * ${width} )`,        
    })

    let Quote = styled('p', {
        textTransform: 'lowercase',
        variants: {
            // TODO: find solution for font color of large, red wave (fontColor of 'red' wave depends on size)
            color: {
                blue: {
                    color: theme.Wave.Quote.Small.Font.Color.Blue,
                },
                green: {
                    color: theme.Wave.Quote.Small.Font.Color.Green,
                },
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
                },
                large: {
                    fontSize: theme.Wave.Quote.Large.Font.Size,
                    fontFamily: theme.Wave.Quote.Large.Font.Family,
                    fontWeight: '$light', // TODO: 2 different weights used
                    lineHeight: theme.Wave.Quote.Large.LineHeight,
                },
            },
        }
    })

    return (
        <WaveQuoteLayout 
            className={className} 
            color={color} 
            size={size}
        >
            <QuoteLayout>
                <Quote 
                    color={color} 
                    size={size}
                >
                    {contentText}
                </Quote>
            </QuoteLayout>
        </WaveQuoteLayout>
    );
}