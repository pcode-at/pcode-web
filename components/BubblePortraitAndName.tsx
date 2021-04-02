import { url } from 'node:inspector';
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
    // width = '45%',
    width = '228px',
}) => {

    let BubblePortraitAndNameLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', 
        width: width,       
        height: '344px',   
    })

    let BubblePortraitLayout = styled('div', {
        // width: '228px',

    })

    let Bubble = styled(BubbleSvg, {
        color: color, 
        position: 'absolute',
        transform: 'rotateZ(-195deg)',
        width: theme.Bubble.Portrait.Background.Width,
    })

    let Portrait = styled('img', {
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
        display: 'block',
        padding: '$l 0px 0px',      
        textAlign: 'center',
        width: '100%',
        '&>p': {
            alignItems: 'flex-start',
            flexDirection: 'row',
            margin: '$xs',
            padding: '0px',
            position: 'static',
        }
    })

    let Name = styled('p', {
        color: theme.Bubble.Portrait.Name.FullName.Font.Color,
        fontFamily: theme.Bubble.Portrait.Name.FontFamily,
        fontSize: '1.5rem',
        fontWeight: '$medium',
        lineHeight: theme.Bubble.Portrait.Name.LineHeight,
        marginBottom: '$xs',
    })

    let Position = styled('p', {
        color: theme.Bubble.Portrait.Name.Position.Font.Color,
        fontFamily: theme.Bubble.Portrait.Name.FontFamily,
        fontSize: '1.5rem',
        fontWeight: '$light',
        lineHeight: theme.Bubble.Portrait.Name.LineHeight,
    })

    return (
        <BubblePortraitAndNameLayout>
            <BubblePortraitLayout>
                <Bubble/>
                <Portrait src={imageSource}/>
            </BubblePortraitLayout>
            <TextLayout>
                <Name>{name}</Name>
                <Position>{position}</Position>
            </TextLayout>
        </BubblePortraitAndNameLayout>
    );
}