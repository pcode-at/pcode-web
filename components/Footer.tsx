import React from 'react';
import { theme } from '../theme';
import { styled } from '../stitches.config';
import { CONSTANTS } from '../shared/constants';

type Props = { 
    className?: string; 
    width?: string; 
}

export const Footer: React.FC<Props> = ({ 
    className,
    width = '100%',
}) => { 

    // whole footer area 
    let FooterLayout = styled('nav', {
        backgroundColor: theme.Footer.Background.Color,
        maskImage: `url(${'../static/wave/wave-s.svg?sprite'})`,
        maskPosition: 'top',
        maskRepeat: 'no-repeat',
        maskSize: 'cover', 
        width: width,
    })

    // area containing 'Kontakt', 'Postfach', 'Services', 'Kategorien'
    let DirectoryLayout = styled('div', {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: `calc(108/1440 * ${width})`,
        paddingTop: `calc(128/1440 * ${width})`,
        width: `calc((1224/1440) * ${width})`,
    })

    // area for a directory section (e.g. 'Kontakt')
    let DirectoryEntryLayout = styled('ul', {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: `calc((288/1440) * ${width})`,
        marginRight: `calc((24/1440) * ${width})`,
    })

    // header of directory entry 
    let DirectoryEntryHeader = styled('li', {
        color: theme.Footer.Entry.Header.Font.Color,
        fontSize: theme.Footer.Entry.Header.Font.Size,
        fontFamily: theme.Footer.Entry.Header.Font.Family,
        fontWeight: '$semibold',
        letterSpacing: theme.Footer.Entry.Header.LetterSpacing,
        lineHeight: theme.Footer.Entry.LineHeight,
        listStyle: 'none',
        paddingBottom: `$s`,
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

    // area containing social media icons and legal information
    let SubFooterLayout = styled('div', {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: '47px',
    })

    // area containing social media icons 
    let IconLayout = styled('div', {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: '49px',
    })

    let Icon = styled('img', {
        height: '$s',
        margin: '0px $xl',
        width: '$s',
    })

    // area containing legal information
    let LegalLayout = styled('div', {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
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

        paddingRight: '$xs',
        paddingTop: '$xxs',

        '&:hover': {
            textDecorationColor: theme.Color.White,
            textDecorationLine: 'underline',
            // textDecorationThickness: '0.5px',
            textUnderlineOffset: '4px',
        }
    })

    let Copyright = styled('p', {
        color: theme.Footer.Entry.Links.Font.Color,
        fontFamily: theme.Footer.Entry.Links.Font.Family,
        fontSize: theme.Footer.Entry.Links.Font.Size,
        fontWeight: '$light',
        letterSpacing: theme.Footer.Entry.Links.LetterSpacing,
        lineHeight: theme.Footer.Entry.LineHeight,
        paddingRight: '$xs',
    })

    return (
        <FooterLayout className={className}>
            <DirectoryLayout>
                <DirectoryEntryLayout>
                    <DirectoryEntryHeader>Kontakt</DirectoryEntryHeader>
                    <TextEntry>pcode - Software Engineering</TextEntry>
                    <TextEntry>Peter-Behrens-Platz 9</TextEntry>
                    <TextEntry>Stiege D / 3. Stock</TextEntry>
                    <TextEntry>4020 Linz - Austria</TextEntry>
                </DirectoryEntryLayout>
                <DirectoryEntryLayout>
                    <DirectoryEntryHeader>Postfach</DirectoryEntryHeader>
                    <TextEntry>pcode software engineering</TextEntry>
                    <TextEntry>MMag. Christoph Pernsteiner</TextEntry>
                    <TextEntry>C/O Pernsteiner Christoph</TextEntry>
                    <TextEntry>Peter-Behrens-Platz 9</TextEntry>
                    <TextEntry>4020 Linz - Austria</TextEntry>
                </DirectoryEntryLayout>
                <DirectoryEntryLayout>
                    <DirectoryEntryHeader>Service</DirectoryEntryHeader>
                    <TextEntry>+43 664 1652141</TextEntry>
                    <TextEntry>office@pcode.at</TextEntry>
                </DirectoryEntryLayout>
                <DirectoryEntryLayout>
                    <DirectoryEntryHeader>Kategorien</DirectoryEntryHeader>
                    <LinkEntry href="">Home</LinkEntry>
                    <LinkEntry href="./who-we-are">Who we are</LinkEntry>
                    <LinkEntry href="./what-we-dp">What we do</LinkEntry>
                    <LinkEntry href="">Our clients</LinkEntry>
                    <LinkEntry href="./join-us">Join us</LinkEntry>
                    <LinkEntry href="">Blog</LinkEntry>
                </DirectoryEntryLayout>
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