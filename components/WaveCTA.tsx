import React from 'react';
import { styled } from '../stitches.config';
import { Button } from './Button';

type Props = {
    className?: string;
    color?: "red" | "blue" | "green"; // color describes the background color 
    size?: "medium" | "large";
    width?: string;
    headerText?: string;
    bodyText?: string;
    buttonText?: string;
};
// TODO: different font weights within text 
export const WaveCTA: React.FC<Props> = ({
    className,
    color = 'blue',
    bodyText = "Unsere besondere Fähigkeit leigt darin, dass wir den Dingen auf den Grund gehen und mutige Entscheidungen treffen.",
    buttonText = "Jetzt Lösungen anzeigen",
    headerText = "wir verwandeln komplexe probleme in einfache lösungen",
    size = 'large',
    width = '100%',
}) => {

    let WaveCTALayout = styled('div', {
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
                medium: {
                    maskImage: `url(${'../static/wave/wave-m.svg?sprite'})`,
                    maskPosition: 'top',
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

    let ContentLayout = styled('div', {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        // calculations are based on the relations in the design, e.g.
        // the width of ContentLayout in the design is 600px
        // the width of the whole design page is 1440px
        left: `calc( (108/1440) * ${width})`,
        paddingTop: `calc(80/1440 * ${width})`,
        paddingBottom: `calc(104/1440 * ${width})`,
        position: 'relative',
        width: `calc((600/1440) * ${width})`,
    })

    let BodyLayout = styled('div', {
        margin: '$l 0px',
    })

    let Header = styled('h1', {
        fontFamily: '$default',
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
                medium: {
                    // 'medium'-cta has different font color 
                    color: '$green500',
                    fontSize: '$xl',
                    fontWeight: '$light',
                    lineHeight: '$xl',
                },
                large: {
                    fontSize: '$xxl',
                    // fontWeight: '$light',
                    fontWeight: '$medium',
                    letterSpacing: '$tight',
                    lineHeight: '$xxl',
                },
            },
        }

    })
    
    let Body = styled('p', {
        fontFamily: '$default',
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
                large: {
                    fontSize: '$m',
                    fontWeight: '$regular',
                    lineHeight: '$m',
                },
            }
        }
    })

    function getButton() {
        switch(color) {
            case 'blue': 
                if (size === "large"){
                    return <Button variant={'primaryRed'}>{buttonText}</Button>
                } else { // if size === medium 
                    return <Button variant={'primaryWhite'}>{buttonText}</Button>
                }
            case 'green':
                return <Button variant={'primaryBlue'}>{buttonText}</Button>
            case 'red':
                return <Button variant={'primaryWhite'}>{buttonText}</Button>
        }
    }

    function getText() {
        switch(size){
            case "large":
                return <div>
                            <Header color={color} size={size}>{headerText}</Header>    
                            <BodyLayout>
                                <Body color={color}>{bodyText}</Body>
                            </BodyLayout>
                        </div>             
            case "medium":
                return <Header color={color} size={size}>{headerText}</Header>
        }
    }

    return (
        <WaveCTALayout
            className={className}
            color={color}
            size={size}
        >
            <ContentLayout>
                {getText()}
                {getButton()}
            </ContentLayout>
        </WaveCTALayout>
    );
}