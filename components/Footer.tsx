import React from 'react';
import { theme } from '../theme';
import { styled } from '../stitches.config';
import { CONSTANTS } from '../shared/constants';
import { Link } from 'rebass';
import { marginRight } from 'styled-system';

type Props = { 
    className?: string; 
    width?: string; 
}

export const Footer: React.FC<Props> = ({ 
    className,
    width = '100%',
}) => { 

    // area containing the whole footer content
    let FooterLayout = styled('nav', {
        backgroundColor: theme.Footer.Background.Color,
        maskImage: `url(${'../static/wave/wave-s.svg?sprite'})`,
        maskPosition: 'top',
        maskRepeat: 'no-repeat',
        maskSize: 'cover', 
        width: width,
        // height: `calc((432/1440) * ${width})`,
        height: '432px',
        // height 432px
        // width 1440px 
    })

    let TextLayout = styled('div', {
        width: `calc((1224/1440) * ${width})`,
        paddingTop: `calc(128/1440 * ${width})`,
        paddingLeft: `calc(108/1440 * ${width})`,
        // height 216
        // width 1224
        // top 128 // 47.95%
        // bottom 88 // 15.07% 
        // left right 108 // 7.5%

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',

    })

    let EntryLayout = styled('ul', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: `calc((288/1440) * ${width})`,
        // marginRight: `calc((24/1440) * ${width})`,
    })

    let EntryHeader = styled('li', {
        color: theme.Footer.Entry.Header.Font.Color,
        fontSize: theme.Footer.Entry.Header.Font.Size,
        fontFamily: theme.Footer.Entry.Header.Font.Family,
        fontWeight: '$semibold',
        letterSpacing: theme.Footer.Entry.Header.LetterSpacing,
        lineHeight: theme.Footer.Entry.LineHeight,
        listStyle: 'none',

    })

    let EntryLinksLayout = styled('div', {

    })

    let TextEntry = styled('li', {
        color: theme.Footer.Entry.Links.Font.Color,
        fontFamily: theme.Footer.Entry.Links.Font.Family,
        fontSize: theme.Footer.Entry.Links.Font.Size,
        fontWeight: '$light',
        letterSpacing: theme.Footer.Entry.Links.LetterSpacing,
        lineHeight: theme.Footer.Entry.LineHeight,
        listStyle: 'none',
    })

    let LinkEntry = styled('a', {
        color: theme.Footer.Entry.Links.Font.Color,
        fontFamily: theme.Footer.Entry.Links.Font.Family,
        fontSize: theme.Footer.Entry.Links.Font.Size,
        fontWeight: '$light',
        letterSpacing: theme.Footer.Entry.Links.LetterSpacing,
        lineHeight: theme.Footer.Entry.LineHeight,
        listStyle: 'none',
    })

    return (
        <FooterLayout className={className}>
            <TextLayout>
                <EntryLayout>
                    <EntryHeader>Kontakt</EntryHeader>
                    <EntryLinksLayout>
                        <TextEntry>pcode - Software Engineering</TextEntry>
                        <TextEntry>Peter-Behrens-Platz 9</TextEntry>
                        <TextEntry>Steige D / 3. Stock</TextEntry>
                        <TextEntry>4020 Linz - Austria</TextEntry>
                    </EntryLinksLayout>
                </EntryLayout>
                <EntryLayout>
                    <EntryHeader>Postfach</EntryHeader>
                    <EntryLinksLayout>
                        <TextEntry>pcode software engineering</TextEntry>
                        <TextEntry>MMag. Christoph Pernsteiner</TextEntry>
                        <TextEntry>C/O Pernsteiner Christoph</TextEntry>
                        <TextEntry>Peter-Behrens-Platz 9</TextEntry>
                        <TextEntry>4020 Linz - Austria</TextEntry>
                    </EntryLinksLayout>
                </EntryLayout>
                <EntryLayout>
                    <EntryHeader>Service</EntryHeader>
                    <EntryLinksLayout>
                        <TextEntry>+43 664 1652141</TextEntry>
                        <TextEntry>office@pcode.at</TextEntry>
                    </EntryLinksLayout>
                </EntryLayout>
                <EntryLayout>
                    <EntryHeader>Kategorien</EntryHeader>
                    <LinkEntry>Home</LinkEntry>
                    <LinkEntry>Who we are</LinkEntry>
                    <LinkEntry>What we do</LinkEntry>
                    <LinkEntry>Out clients</LinkEntry>
                    <LinkEntry>Join us</LinkEntry>
                    <LinkEntry>Blog</LinkEntry>
                </EntryLayout>
            </TextLayout>
        </FooterLayout>
    );
}