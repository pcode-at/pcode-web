import React from 'react';
import BubbleSvg from '../assets/bubble.svg?sprite';
import { styled } from '../stitches.config';
import { theme } from '../theme';

type Props = {
    width?: string;
    color?: string;
    imageSource?: string;
    name?: string;
    position?: string;
};

export const BubblePortraitAndName: React.FC<Props> = ({
    color = theme.Bubble.Background.Color.Green,
    imageSource = '../static/default-member.png',
    name = 'Joe Doe',
    position = 'Chief Anonymous Officer',
    // width = '25%',
    width = '228px',
}) => {

    let BubbleLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', 
        width: width,              
    })

    let Bubble = styled(BubbleSvg, {
        color: color, 
        position: 'absolute',
        transform: 'rotateZ(-195deg)',
        width: theme.Bubble.Portrait.Background.Width,
    })

    let BubbleImage = styled('img', {
        alt: '',
        maskImage: `url(${'../static/bubble.svg'})`,
        maskPosition: 'top',
        maskRepeat: 'no-repeat',
        maskSize: theme.Bubble.Portrait.Mask.Size,
        position: 'relative',
        width: '100%',
    })

    let TextLayout = styled('div', {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '$l 0px 0px',      
        textAlign: 'center',

        '&>p': {
            alignItems: 'flex-start',
            flexDirection: 'row',
            padding: '0px',
            position: 'static',
        }
    })

    let Name = styled('p', {
        color: theme.Bubble.Portrait.Name.FullName.Font.Color,
        fontFamily: theme.Bubble.Portrait.Name.FontFamily,
        fontSize: theme.Bubble.Portrait.Name.FullName.Font.Size,
        fontWeight: '$medium',
        // fontWeight: theme.Bubble.Portrait.Name.FullName.Font.Weight,
        lineHeight: theme.Bubble.Portrait.Name.LineHeight,
        marginBottom: '$xs',
    })

    let Position = styled('p', {
        color: theme.Bubble.Portrait.Name.Position.Font.Color,
        fontFamily: theme.Bubble.Portrait.Name.FontFamily,
        fontSize: theme.Bubble.Portrait.Name.Position.Font.Size,
        fontWeight: '$light',
        // fontWeight: theme.Bubble.Portrait.Name.Position.Font.Weight,
        lineHeight: theme.Bubble.Portrait.Name.LineHeight,
    })

    return (
        <BubbleLayout>
            <Bubble/>
            <BubbleImage src={imageSource}/>
            <TextLayout>
                <Name>{name}</Name>
                <Position>{position}</Position>
            </TextLayout>
        </BubbleLayout>
    );
}