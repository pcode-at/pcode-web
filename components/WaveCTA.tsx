import React from 'react';
import { Button } from 'rebass';
import { styled } from '../stitches.config';
import { theme } from '../theme';

type Props = {
    className?: string;
    color?: "red" | "blue" | "green"; // color describes the background color 
    size?: "medium" | "large";
    width?: string;
    headerText?: string;
    paragraphText?: string;
    buttonText?: string;
};

export const WaveCTA: React.FC<Props> = ({
    className,
    color = 'red',
    size = 'large',
    width = '100%',
    headerText = "wir verwandeln komplexe probleme in einfache lösungen",
    paragraphText = "Unsere besondere Fähigkeit leigt darin, dass wir den Dingen auf den Grund gehen und mutige Entscheidungen treffen.",
    buttonText = "Jetzt Lösungen anzeigen",
}) => {

    let WaveCTALayout = styled('div', {
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
                medium: {
                    maskImage: `url(${'../static/wave/wave-m.svg?sprite'})`,
                    maskRepeat: 'no-repeat',
                    // TODO: flip mask
                    // transform: 'rotate(180deg)', // flips whole component
                },
                large: {
                    maskImage: `url(${'../static/wave/wave-l.svg?sprite'})`,
                    maskRepeat: 'no-repeat',
                }
            }
        }

    })

    let TextLayout = styled('div', {

    })

    let HeaderLayout = styled('div',{

    })

    let ParagraphLayout = styled('div', {

    })

    let Header = styled('h1', {

    })
    
    let Paragraph = styled('p', {

    })

    return (
        <WaveCTALayout
            className={className}
            color={color}
            size={size}
        >

            <TextLayout>
                <HeaderLayout>
                    <Header>{headerText}</Header>
                </HeaderLayout>
                <ParagraphLayout>
                    <Paragraph>{paragraphText}</Paragraph>
                </ParagraphLayout>
                <Button>{buttonText}</Button>
            </TextLayout>

        </WaveCTALayout>
    );
}