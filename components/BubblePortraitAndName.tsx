import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';
import { BubblePortrait } from './BubblePortrait';

type Props = {
    width?: string;
    color?: string;
    imageSource?: string;
    name?: string;
    position?: string; // description of the person's position (e.g. developer) ; do not confuse with 'positioning' in BubbleImage and BubblePortrait 
};

export const BubblePortraitAndName: React.FC<Props> = ({
    color = 'secondary',
    imageSource = '../static/default-member.png',
    name = 'Joe Doe',
    position = 'Chief Anonymous Officer',
    width = '288px',
}) => {

    let BubblePortraitAndNameLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', 
        width: width,         
    })

    let BubblePortraitLayout = styled('div', {
        // width: `calc((228 / 288) * ${width})`,
        // marginLeft: 'calc(50% - 228px/2)', 
        // paddingLeft: 'calc(50% - 228px/2)', 
        width: width,
    })

    let TextLayout = styled('div', {
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
        fontSize: '24px',
        fontWeight: '$medium',
        lineHeight: theme.Bubble.Portrait.Name.LineHeight,
        marginBottom: '$xs',
    })

    let Position = styled('p', {
        color: theme.Bubble.Portrait.Name.Position.Font.Color,
        fontFamily: theme.Bubble.Portrait.Name.FontFamily,
        fontSize: '24px',
        fontWeight: '$light',
        lineHeight: theme.Bubble.Portrait.Name.LineHeight,
    })

    return (
        <BubblePortraitAndNameLayout>
            <BubblePortraitLayout>
                <BubblePortrait
                    imageSource={imageSource}
                    color={color}
                    width={width}
                />
            </BubblePortraitLayout>
            <TextLayout>
                <Name>{name}</Name>
                <Position>{position}</Position>
            </TextLayout>
        </BubblePortraitAndNameLayout>
    );
}