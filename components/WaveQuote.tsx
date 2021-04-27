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
    // boldText = 'Unsere besondere Fähigkeit liegt darin, ',
    // boldText,
    // contentText = 'dass wir den Dingen auf den Grund gehen und mutige Entscheidungen treffen.',
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
                    maskImage: `url(${'../static/wave/wave-s-flipped.svg?sprite'})`,
                    maskPosition: 'bottom',
                    maskRepeat: 'no-repeat',
                    maskSize: 'cover', 
                },
                large: {
                    maskImage: `url(${'../static/wave/wave-l.svg?sprite'})`,
                    maskPosition: 'bottom',
                    maskRepeat: 'no-repeat',
                    maskSize: 'cover', 
                }
            }
        }
    })

    let QuoteLayout = styled('div', {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        // calculations are based on the relations in the design, e.g.
        // the width of QuoteLayout in the design is 808px
        // the width of the whole design page is 1440px
        marginLeft: `calc( (108/1440) * ${width} )`,
        paddingTop: `calc(80/1440 * ${width})`,
        paddingBottom: `calc(176/1440 * ${width})`,
        position: 'relative',
        width: `calc( (808/1440) * ${width} )`,        
    })

    let Quote = styled('p', {
        textTransform: 'lowercase',
        variants: {
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
                    color: theme.Wave.Quote.Large.Font.Color.Red,
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