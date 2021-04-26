import React from 'react';
import { styled } from '../stitches.config';
import { Character } from './Character';

type Props = {
    className?: string;
    character?: string;
    color?: "blue" | "green" | "red" | "white";
    link?: string;
    paragraph?: string;
    subtitle?: string;
    title?: string;
    width?: string;
}

export const CharacterAndParagraph: React.FC<Props> = ({
    className,
    character   = 'GameChanger',
    color       = 'blue',
    link,
    paragraph   = 'Das ist ein kleiner Blindtext. Hiermit wird ein Absatz markiert, in dem mittelmäßig viele Wörter stehen. Noch eine kleine Beschreibung und fertig',
    subtitle    = 'experienced',
    title       = 'copywriter',
    width       = '288px', 
}) => { 

    let CharacterAndParagraphLayout = styled('div', {
        alignItems:     'center',
        display:        'flex',
        flexDirection:  'column',
        width:          width,
    })

    let CharacterLayout = styled('div', {
        alignItems:     'center',
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        marginTop:      '63px',
        // 295px / 288px | height/width of design
        height:         `calc( 295 / 288 * ${width})`,
    })

    let ParagraphLayout = styled('div', {
        alignItems:     'center',
        display:        'flex',
        flexDirection:  'column',
    })

    let Title = styled('h3', {
        color:      '$blue500',
        fontFamily: '$default',
        fontWeight: '$medium',
        fontSize:   '$l',
        lineHeight: '$l',
        margin:     '0',
        padding:    '$s $m 0px',
        textAlign:  'center',
    })

    let Subtitle = styled('p', {
        color:      '$blue500',
        fontFamily: '$default',
        fontWeight: '$regular',
        fontSize:   '$m',
        lineHeight: '$l',
        margin:     '0',
        padding:    '$xxs $m $xs',
        textAlign:  'center',
    })

    let Paragraph = styled('p', {
        color:      '$blue500',
        fontFamily: '$default',
        fontWeight: '$regular',
        fontSize:   '$s',
        lineHeight: '$l',
        margin:     '0',
        padding:    '$s $m',
    })

    return (
        <CharacterAndParagraphLayout className={className}>
            <CharacterLayout>
                <Character 
                    character={character} 
                    color={color}
                />
            </CharacterLayout>
            <ParagraphLayout>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
                <Paragraph>{paragraph}</Paragraph>
                {/* TODO: add Button w/ variant=secondary */}
            </ParagraphLayout>
        </CharacterAndParagraphLayout>
    );
}