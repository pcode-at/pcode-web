import React from 'react';
import { styled } from '../stitches.config';

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
                    backgroundColor: '$blue500',
                },
                green: {
                    backgroundColor: '$green500',
                },
                red: {
                    backgroundColor: '$red500',
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
                    color: '$white',
                },
                green: {
                    color: '$blue500',
                },
                red: {
                    color: '$blue500',
                },
            },
            size: {
                small: {
                    fontSize: '$xl',
                    fontFamily: '$default',
                    fontWeight: '$light', // TODO: 2 different weights used
                    lineHeight: '$xl',
                },
                large: {
                    color: '$white',
                    fontSize: '$xxl',
                    fontFamily: '$default',
                    fontWeight: '$light', // TODO: 2 different weights used
                    lineHeight: '$xxl',
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