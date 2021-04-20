import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';
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

export const WaveCTA: React.FC<Props> = ({
    className,
    color = 'red',
    size = 'large',
    width = '100%',
    headerText = "wir verwandeln komplexe probleme in einfache lösungen",
    bodyText = "Unsere besondere Fähigkeit leigt darin, dass wir den Dingen auf den Grund gehen und mutige Entscheidungen treffen.",
    buttonText = "Jetzt Lösungen anzeigen",
}) => {

    let WaveCTALayout = styled('div', {
        position: 'relative',
        width: width,
        height: `calc( (576/1440) * ${width} )`,
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
                medium: {
                    maskImage: `url(${'../static/wave/wave-m.svg?sprite'})`,
                    maskRepeat: 'no-repeat',
                },
                large: {
                    maskImage: `url(${'../static/wave/wave-l.svg?sprite'})`,
                    maskRepeat: 'no-repeat',
                    maskSize: 'cover', 
                }
            }
        }

    })

    let TextLayout = styled('div', {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: `calc(80/1440 * ${width})`,
        paddingBottom: `calc(104/1440 * ${width})`,
        position: 'relative',
        width: `calc((600/1440) * ${width})`,
        left: `calc( (108/1440) * ${width})`,
    })

    let HeaderLayout = styled('div',{
        // margin: '32px 0px',
    })

    let BodyLayout = styled('div', {
        margin: '32px 0px',
    })

    let Header = styled('h1', {
        fontFamily: theme.Wave.CallToAction.Large.Header.Font.Family,
        textTransform: 'lowercase',
        variants: {
            color: {
                blue: {
                    color: theme.Wave.CallToAction.Large.Header.Font.Color.Blue,
                },
                green: {
                    color: theme.Wave.CallToAction.Large.Header.Font.Color.Green,
                },
                red: {
                    color: theme.Wave.CallToAction.Large.Header.Font.Color.Red,
                },
            },
            size: {
                medium: {
                    // TODO
                },
                large: {
                    fontSize: theme.Wave.CallToAction.Large.Header.Font.Size,
                    fontWeight: '$light',
                    lineHeight: theme.Wave.CallToAction.Large.Header.LineHeight,
                    letterSpacing: theme.Wave.CallToAction.Large.Header.LetterSpacing,
                },
            },
        }

    })
    
    let Body = styled('p', {
        fontFamily: theme.Wave.CallToAction.Large.Header.Font.Family,
        variants: {
            color: {
                blue: {
                    color: theme.Wave.CallToAction.Large.Body.Font.Color.Blue,
                },
                green: {
                    color: theme.Wave.CallToAction.Large.Body.Font.Color.Green,
                },
                red: {
                    color: theme.Wave.CallToAction.Large.Body.Font.Color.Red,
                },
            },
            size: {
                medium: { 
                    fontSize: theme.Wave.CallToAction.Medium.Font.Size,
                    fontWeight: '$regular',
                    lineHeight: theme.Wave.CallToAction.Medium.LineHeight,
                },
                large: {
                    fontSize: theme.Wave.CallToAction.Large.Body.Font.Size,
                    fontWeight: '$regular',
                    lineHeight: theme.Wave.CallToAction.Large.Body.LineHeight,
                    // letterSpacing: theme.Wave.CallToAction.Large.Body.LetterSpacing,
                },
            }
        }
    })

    function getButton(color) {
        switch(color) {
            case 'blue': 
                return <Button variant={'primaryRed'}>{buttonText}</Button>
            case 'green':
                return <Button variant={'primaryBlue'}>{buttonText}</Button>
            case 'red':
                return <Button variant={'primaryWhite'}>{buttonText}</Button>
        }
    }

    return (
        <WaveCTALayout
            className={className}
            color={color}
            size={size}
        >
            <TextLayout>
                <HeaderLayout>
                    <Header color={color} size={size}>{headerText}</Header>
                </HeaderLayout>
                <BodyLayout>
                    <Body color={color}>{bodyText}</Body>
                </BodyLayout>
                {getButton(color)}
            </TextLayout>
        </WaveCTALayout>
    );
}