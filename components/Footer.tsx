import React from 'react';
import { theme } from '../theme';
import { styled } from '../stitches.config';
import { CONSTANTS } from '../shared/constants';

type Props = { className?: string; }

export const Footer: React.FC<Props> = ({ className }) => { 

    // area containing the whole footer content
    let FooterLayout = styled('nav', {
        alignItems: 'center',
        backgroundImage: `url(${'../static/rectangle.svg'})`, // TO DO: rename rectangle
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        maxWidth: '100%',
    })
    // area containing contact, pages and address
    let TextLayout = styled('div', {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '$l 0px',
    })
    let TextEntryLayout = styled('ul', {
        marginRight: '$xxl',
        textAlign: 'center',
        textTransform: 'lowercase',

        '&~div': {
            marginLeft: '$xxl',
        }
    })
    let ReferencesLayout = styled('ul', {
        alignItems: 'flex-start',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '$s 0px',
        listStyleType: 'none', 
    })
    let ListItem = styled('li', {
        color: theme.Footer.TextArea.Font.Color,
        fontFamily: theme.Font.Default,
        fontSize: theme.Footer.TextArea.Font.Size,
        fontWeight: '$regular',
        lineHeight: theme.Footer.TextArea.LineHeight,
        listStyleType: 'none', 
    })
    let PageReference = styled('a', {
        color: theme.Footer.TextArea.Font.Color,
        fontFamily: theme.Font.Default,
        fontSize: theme.Footer.TextArea.Font.Size,
        fontWeight: '$regular',
        lineHeight: theme.Footer.TextArea.LineHeight,
        textDecoration: theme.Footer.TextArea.TextDecoration.Default,

        '&:hover': {
            textDecoration: theme.Footer.TextArea.TextDecoration.Hover,
            textDecorationThickness: theme.Footer.TextArea.TextDecorationThickness,
            textUnderlineOffset: theme.Footer.TextArea.TextUnderlineOffset,
        }

    })
    let ImpressumEntry = styled(PageReference, {
        '&~a': {
            marginLeft: '1rem',
        },
    })
    let Icon = styled('img', {
        height: '$s',
        margin: '0px $l',
        width: '$s',
    })

    return (
        <FooterLayout className={className}>
            <TextLayout>
                <TextEntryLayout>
                    <ListItem>pcode – software engineering</ListItem>
                    <ListItem>+43 664 1652141</ListItem>
                    <ListItem>jobs@pcode.at</ListItem>
                </TextEntryLayout>
                <TextEntryLayout>
                    <PageReference href="">home</PageReference><br/>
                    <PageReference href="./who-we-are">who we are</PageReference><br/>
                    <PageReference href="./what-we-do">what we do</PageReference><br/>
                    <PageReference href="">our clients</PageReference><br/>
                    <PageReference href="./join-us">join us</PageReference><br/>
                    <PageReference href="">contact us</PageReference><br/>
                </TextEntryLayout>
                <TextEntryLayout>
                    <ListItem>peter-behrens-platz 9</ListItem>
                    <ListItem>stiege d / 3. stock</ListItem>
                    <ListItem>4020 linz – austria</ListItem>
                </TextEntryLayout>
            </TextLayout>
            <ReferencesLayout>
                <PageReference href="https://www.instagram.com/pcode.at/">
                    <Icon src={'../static/instagram.svg'}></Icon>
                </PageReference>
                <PageReference href="https://www.facebook.com/pcode.at/">
                    <Icon src={'../static/facebook.svg'}></Icon>
                </PageReference>
                <PageReference href="https://twitter.com/pcode_at">
                    <Icon src={'../static/twitter.svg'}></Icon>
                </PageReference>
                <PageReference href="https://www.linkedin.com/company/pcode">
                    <Icon src={'../static/linkedin.svg'}></Icon>
                </PageReference>
            </ReferencesLayout>
            <ReferencesLayout>
                <ImpressumEntry href={CONSTANTS.DATA_PRIVACY_LINK}>datenschutz</ImpressumEntry>
                <ImpressumEntry href={CONSTANTS.AGB_LINK}>agb</ImpressumEntry>
                <ImpressumEntry href={CONSTANTS.IMPRESSUM_LINK}>impressum</ImpressumEntry>
            </ReferencesLayout>
        </FooterLayout>
    );
}