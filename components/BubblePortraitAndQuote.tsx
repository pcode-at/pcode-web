import React from 'react';
import { BubblePortrait } from './BubblePortrait';
import { styled } from '../stitches.config';

type Props = {
    alignment?: 'left' | 'right';
    className?: string;
    color?: "blue" | "green" | "red" | "white";
    imageSource?: string;
    name?: string;
    position?: string;
    width?: string;
    quote?: string;
};

export const BubblePortraitAndQuote: React.FC<Props> = ({
    alignment = 'left',
    className,
    color = 'blue',
    imageSource = '../static/default-member.png',
    name = 'John Doe',
    position = 'Chief Anonymous Officer',
    width = '1224px',
    quote = 'working at pcode means one simple thing: working for the future!',
}) => { 

    let BubblePortraitAndQuoteLayout = styled('div', {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: width,
    })

    let TextLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 $l',
        width: `calc((964/1224) * ${width})`,

        variants: {
            alignment: {
                left: {
                    alignItems: 'flex-start',
                },
                right: {
                    alignItems: 'flex-end',
                },
            },
        },
    }) 

    let NameLayout = styled('div', {
        alignItems: 'baseline',
        display: 'flex',
        flexDirection: 'row',
        margin: '$xs 0',
        textAlign: 'left',
    })

    let Quote = styled('h2', {
        fontFamily: '$default',
        fontWeight: '$medium',
        fontSize: '$xl',
        lineHeight: '$xl',
        margin: '0',
    
        variants: {
            color: {
                blue: {
                    color: '$blue500',
                },
                green: {
                    color: '$green500',
                },
                red: {
                    color: '$red500',
                },
                white: {
                    color: '$white',
                },
            }
        }
    })

    let Name = styled('p', {
        fontFamily: '$default',
        fontWeight: '$bold',
        fontSize: '$l',
        lineHeight: '$m',
        marginRight: '$xs',

        variants: {
            color: {
                blue: {
                    color: '$blue500',
                },
                green: {
                    color: '$green500',
                },
                red: {
                    color: '$red500',
                },
                white: {
                    color: '$white',
                },
            }
        }
    })

    let Position = styled('p', {
        fontFamily: '$default',
        fontWeight: '$light',
        fontSize: '$m',
        lineHeight: '$m',

        variants: {
            color: {
                blue: {
                    color: '$blue500',
                },
                green: {
                    color: '$green500',
                },
                red: {
                    color: '$red500',
                },
                white: {
                    color: '$white',
                },
            }
        }
    })

    function getAlignedComponents() {
        switch(alignment){
            case 'left': 
                return  <BubblePortraitAndQuoteLayout>
                            <BubblePortrait 
                                color={color} 
                                imageSource={imageSource}
                            />
                            <TextLayout alignment={alignment}>
                                <Quote color={color}>"{quote}"</Quote>
                                <NameLayout>
                                    <Name color={color}>{name}</Name>
                                    <Position color={color}>{position}</Position>
                                </NameLayout>
                            </TextLayout>
                        </BubblePortraitAndQuoteLayout>
            case 'right':
                return  <BubblePortraitAndQuoteLayout>
                            <TextLayout alignment={alignment}>
                                <Quote color={color}>"{quote}"</Quote>
                                <NameLayout>
                                    <Name color={color}>{name}</Name>
                                    <Position color={color}>{position}</Position>
                                </NameLayout>
                            </TextLayout>
                            <BubblePortrait 
                                color={color} 
                                imageSource={imageSource}
                            />
                        </BubblePortraitAndQuoteLayout>
        }
    }

    return (
        <div className={className}>
            {getAlignedComponents()}
        </div>
    );
}