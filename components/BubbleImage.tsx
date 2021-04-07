import React from 'react';
// import { BubbleSvg as Bubble } from '../static/bubble.svg?sprite';
import { BubbleBlank as Bubble } from './Bubble';
import { styled } from '../stitches.config';
import { theme } from '../theme';


type Props = {
    width?: string;
    color?: string;
    imageSource?: string;
    position?: 'left' | 'right';
};

// TODO: implement "right" variant for BubblePortrait
export const BubbleImage: React.FC<Props> = ({
    color = 'secondary',
    imageSource = '../static/stock/stock01.jpg',
    width = '570px',
    position = 'left',
}) => {

    let BubbleImageLayout = styled('div', {
        display: 'flex',
        position: 'relative',
        width: width,  
    })

    let BubbleLayout = styled('div', {
        variants: {
            positioning: {
                left: {
                    position: 'relative',
                    width: '100%',
                },
                right: {
                    
                }
            },
        }, 
        defaultVariant: {
            positioning: {
                left: {
                    position: 'relative',
                    width: '100%',
                }
            },
        }
    })

    let ImageLayout = styled('div', {
        variants: {
            positioning: {
                left: {
                    left: '0px',
                    position: 'absolute',
                    top: `calc( ((648 / 570) * ${width}) * (32.66 / 648))`,           
                },
                right: {
                    position: 'absolute',
                    top: `calc( ((648 / 570) * ${width}) * (32.66 / 648))`,           
                    left: `calc( 15 / 228 * ${width}) `,
                },
            }
        },
        defaultVariant: {
            positioning: {
                left: {
                    left: '0px',
                    position: 'absolute',
                    top: `calc( ((648 / 570) * ${width}) * (32.66 / 648))`,
                    // ((648 / 570) * ${width}) = new height
                    // (32.66 / 648) = top / height = new top value 
                }
            }
        }

    })

    let BubbleMask = styled('img', {
        maskImage: `url(${'../static/bubble.svg'})`,
        maskRepeat: 'no-repeat',
        position: 'relative',    
        scale: 'crop',
        width: '100%',

        variants: {
            positioning: {
                left: {
                    maskPosition: 'left top',
                    maskSize: `calc(${width}*0.9)`, 
                },
                right: {
                    maskPosition: 'right top',
                    maskSize: `calc(${width}*0.93)`, 
                },
            },
        },
        defaultVariant: {
            positioning: {
                left: {
                    maskPosition: 'left top',
                    maskSize: `calc(${width}*0.9)`, 
                },   
            }
        }
    })

    return (
        <BubbleImageLayout>
            <BubbleLayout>
                <Bubble 
                    width={width} 
                    color={color}
                />
            </BubbleLayout>
            {/* <Bubble 
                width={width} 
                color={color}
            /> */}
            <ImageLayout positioning={position}>
                <BubbleMask 
                    src={imageSource} 
                    positioning={position}
                />
            </ImageLayout>
        </BubbleImageLayout>
    );
}