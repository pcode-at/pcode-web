import React from 'react';
import { BubbleBlank as Bubble } from './Bubble';
import { styled } from '../stitches.config';

type Props = {
    width?: string;
    color?: string;
    imageSource?: string;
    position?: 'left' | 'right';
};

export const BubbleImage: React.FC<Props> = ({
    color = 'blue',
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
        position: 'relative',
        // variants: {
        //     positioning: {
        //         left: { },
        //         right: {
        //             // right: `calc(28 / 228 * ${width})`,
        //             // bottom: `calc(8 / 228 * ${width})`,
                    
        //         }
        //     }
        // },
        // defaultVariant: {
        //     positioning: {
        //         left: { },
        //     }
        // }
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
                    left: `calc(15 / 228 * ${width})`,
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

        variants: {
            positioning: {
                left: {
                    maskPosition: 'left top',
                    maskSize: `calc(${width}*0.9)`, 
                    width: `calc((531.3 / 570) * ${width})`,
                },
                right: {
                    maskPosition: 'right top',
                    maskSize: `calc(${width}*0.93)`,
                    width: `calc((213 / 228) * ${width})`,  
                },
            },
        },
        defaultVariant: {
            positioning: {
                left: {
                    maskPosition: 'left top',
                    maskSize: `calc(${width}*0.9)`, 
                    width: `calc((531.3 / 570) * ${width})`,
                },   
            }
        }
    })

    let BubbleBackground = styled(Bubble, {
        variants: {
            positioning: {
                left: { }, 
                right: {
                    // width: '200px',
                    // width: `calc((200/228) * ${width})`,
                    // width: `calc(${width} * 0.87)`,
                },
            }
        },
        defaultVariant: {
            positioning: {
                left: { },
            }
        }
    })

    return (
        <BubbleImageLayout>
            <BubbleLayout>
                <Bubble
                    color={color}    
                    width={width}
                />
            </BubbleLayout>
            {/* <BubbleLayout positioning={position}>
                <BubbleBackground 
                    color={color}    
                    width={width}
                    positioning={position}
                />
            </BubbleLayout> */}
            <ImageLayout positioning={position}>
                <BubbleMask 
                    src={imageSource} 
                    positioning={position}
                />
            </ImageLayout>
        </BubbleImageLayout>
    );
}