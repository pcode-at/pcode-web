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
        // height: '432px',
        // height 432px
        // width 1440px 
    })

    let DirectoryLayout = styled('div', {
        width: `calc((1224/1440) * ${width})`,
        paddingTop: `calc(128/1440 * ${width})`,
        paddingLeft: `calc(108/1440 * ${width})`,
        // marginBottom: `calc((88/1440) * ${width})`,
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
        marginRight: `calc((24/1440) * ${width})`,
    })

    let EntryHeader = styled('li', {
        color: theme.Footer.Entry.Header.Font.Color,
        fontSize: theme.Footer.Entry.Header.Font.Size,
        fontFamily: theme.Footer.Entry.Header.Font.Family,
        fontWeight: '$semibold',
        letterSpacing: theme.Footer.Entry.Header.LetterSpacing,
        lineHeight: theme.Footer.Entry.LineHeight,
        listStyle: 'none',
        paddingBottom: `$s`,
        // paddingBottom: `calc((16/1440) * ${width})`,
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
        margin: '$xs 0px',
        textDecoration:'none',

        '&:hover': {
            textDecorationColor: theme.Color.White,
            textDecorationLine: 'underline',
            // textDecorationThickness: '0.5px',
            textUnderlineOffset: '4px',
        }
    })

    let SubFooterLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    })

    let IconLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    })

    let Icon = styled('img', {
        height: '$s',
        margin: '0px $l',
        width: '$s',
    })

    let LegalLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        // width: `calc((283/1440) * ${width})`,
        // width: '283px',
        // left: calc(50% - 283px/2 + 0.5px);
        // top: 521px;

        left: `calc(50% - 283px/2 + 0.5px)`,

    })

    let LegalLink = styled('a', {
        color: theme.Footer.Entry.Links.Font.Color,
        fontFamily: theme.Footer.Entry.Links.Font.Family,
        fontSize: theme.Footer.Entry.Links.Font.Size,
        fontWeight: '$light',
        letterSpacing: theme.Footer.Entry.Links.LetterSpacing,
        lineHeight: theme.Footer.Entry.LineHeight,
        listStyle: 'none',
        margin: '$xs 0px',
        textDecoration:'none',

        // paddingRight: '8px',
        // paddingTop: '4px',
        paddingRight: '$xs',
        paddingTop: '$xxs',

        '&:hover': {
            textDecorationColor: theme.Color.White,
            textDecorationLine: 'underline',
            // textDecorationThickness: '0.5px',
            textUnderlineOffset: '4px',
            // textUnderlineOffset: '$xxs',
        }
    })

    let Copyright = styled('p', {
        color: theme.Footer.Entry.Links.Font.Color,
        fontFamily: theme.Footer.Entry.Links.Font.Family,
        fontSize: theme.Footer.Entry.Links.Font.Size,
        fontWeight: '$light',
        letterSpacing: theme.Footer.Entry.Links.LetterSpacing,
        lineHeight: theme.Footer.Entry.LineHeight,
        // listStyle: 'none',

        // paddingRight: '8px',
        paddingRight: '$xs',
    })

    return (
        <FooterLayout className={className}>
            <DirectoryLayout>
                <EntryLayout>
                    <EntryHeader>Kontakt</EntryHeader>
                    <TextEntry>pcode - Software Engineering</TextEntry>
                    <TextEntry>Peter-Behrens-Platz 9</TextEntry>
                    <TextEntry>Steige D / 3. Stock</TextEntry>
                    <TextEntry>4020 Linz - Austria</TextEntry>
                </EntryLayout>
                <EntryLayout>
                    <EntryHeader>Postfach</EntryHeader>
                    <TextEntry>pcode software engineering</TextEntry>
                    <TextEntry>MMag. Christoph Pernsteiner</TextEntry>
                    <TextEntry>C/O Pernsteiner Christoph</TextEntry>
                    <TextEntry>Peter-Behrens-Platz 9</TextEntry>
                    <TextEntry>4020 Linz - Austria</TextEntry>
                </EntryLayout>
                <EntryLayout>
                    <EntryHeader>Service</EntryHeader>
                    <TextEntry>+43 664 1652141</TextEntry>
                    <TextEntry>office@pcode.at</TextEntry>
                </EntryLayout>
                <EntryLayout>
                    <EntryHeader>Kategorien</EntryHeader>
                    <LinkEntry href="">Home</LinkEntry>
                    <LinkEntry href="./who-we-are">Who we are</LinkEntry>
                    <LinkEntry href="./what-we-dp">What we do</LinkEntry>
                    <LinkEntry href="">Out clients</LinkEntry>
                    <LinkEntry href="./join-us">Join us</LinkEntry>
                    <LinkEntry href="">Blog</LinkEntry>
                </EntryLayout>
            </DirectoryLayout>
            <SubFooterLayout>
                <IconLayout>
                    <LinkEntry href="https://www.instagram.com/pcode.at/">
                        <Icon src={'../static/instagram.svg'}></Icon>
                    </LinkEntry>
                    <LinkEntry href="https://www.facebook.com/pcode.at/">
                        <Icon src={'../static/facebook.svg'}></Icon>
                    </LinkEntry>
                    <LinkEntry href="https://twitter.com/pcode_at">
                        <Icon src={'../static/twitter.svg'}></Icon>
                    </LinkEntry>
                    <LinkEntry href="https://www.linkedin.com/company/pcode">
                        <Icon src={'../static/linkedin.svg'}></Icon>
                    </LinkEntry>
                </IconLayout>
                <LegalLayout>
                    <Copyright>© 2021 pcode</Copyright>
                    <LegalLink href={CONSTANTS.DATA_PRIVACY_LINK}>Datenschutz</LegalLink>
                    <LegalLink href={CONSTANTS.AGB_LINK}>AGB</LegalLink>
                    <LegalLink href={CONSTANTS.IMPRESSUM_LINK}>Impressum</LegalLink>
                </LegalLayout>
            </SubFooterLayout>
        </FooterLayout>
    );
}