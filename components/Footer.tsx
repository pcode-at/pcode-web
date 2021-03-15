import React from 'react';
import { Color } from '../Color.enum';
import { Box, Flex, Text } from 'rebass';
import { CopyText, FontStyle } from './CopyText';
import { theme } from '../theme';
import { styled } from '../stitches.config';
import { CONSTANTS } from '../shared/constants';
import { fontFamily, fontSize, fontWeight } from 'styled-system';

type Props = { className?: string; }

export const Footer: React.FC<Props> = ({ className }) => { 

    let FooterLayout = styled(Flex, {
        width: theme.Footer.Background.Width,
        height: theme.Footer.Background.Height,
        backgroundColor: theme.Footer.Background.Color,
        alignItems: 'center',
        // backgroundImage: ('../static/rectangle.svg'),
    })

    // area containing the whole footer content
    let TextAreaLayout = styled(Box, {
        width: theme.Footer.TextArea.Width,
        height: theme.Footer.TextArea.Height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '$none',
    })
    // area containing contact, pages and address
    let FooterTextLayout = styled(Box, {
        width: theme.Footer.TextArea.FooterText.Width,
        height: theme.Footer.TextArea.FooterText.Height,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '$none',
        order: 0,
        flexGrow: 0,
        margin: '34px 0px',
    })

    // text areas within the footer text layout
    let ContactLayout = styled('div', {
        width: theme.Footer.TextArea.FooterText.Contact.Width,
        height: theme.Footer.TextArea.FooterText.Contact.Height,

        textAlign: 'center',
        textTransform: 'lowercase',

        order: 0,
        flexGrow: 0,
    })
    let PagesLayout = styled('div', {
        width: theme.Footer.TextArea.FooterText.Pages.Width,
        height: theme.Footer.TextArea.FooterText.Pages.Height,

        textAlign: 'center',
        textTransform: 'lowercase',

        order: 1,
        flexGrow: 0,
    })
    let AddressLayout = styled('div', {
        width: theme.Footer.TextArea.FooterText.Address.Width,
        height: theme.Footer.TextArea.FooterText.Address.Height,

        textAlign: 'center',
        textTransform: 'lowercase',

        order: 2,
        flexGrow: 0,
    })

    let SocialMediaIconsLayout = styled('div', {
        width: theme.Footer.TextArea.SocialMedia.Width,
        height: theme.Footer.TextArea.SocialMedia.Height,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        
        padding: '$none',
        margin: '12px 0px',

        order: 1,
        flexGrow: 0,
    })
    let ImpressumLayout = styled('div', {
        width: theme.Footer.TextArea.Impressum.Width,
        height: theme.Footer.TextArea.Impressum.Height,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        
        padding: '$none',

        order: 2,
        flexGrow: 0,
        margin: '12px 0px',
    })

    let Text = styled('p', {
        fontFamily: theme.Font.Default,
        fontSize: theme.Footer.TextArea.Font.Size,
        // fontWeight: theme.Footer.TextArea.Font.Weight,
        color: theme.Footer.TextArea.Font.Color,
        lineHeight: theme.Footer.TextArea.LineHeight,
    })
    let PageReference = styled('a', {
        fontFamily: theme.Font.Default,
        fontSize: theme.Footer.TextArea.Font.Size,
        // fontWeight: theme.Footer.TextArea.Font.Weight,
        color: theme.Footer.TextArea.Font.Color,
        lineHeight: theme.Footer.TextArea.LineHeight,
        textDecoration: 'none',
    })
    let ImpressumEntry = styled(PageReference, {
        paddingRight: '1rem',
    })
    let Icon = styled('img', {
        width: '16px',
        height: '16px',
        margin: '0px 30px',
    })

    return (
        <FooterLayout className={className}>
            <TextAreaLayout>
                <FooterTextLayout>
                    <ContactLayout>
                        <Text>
                        pcode – software engineering <br/>
                        +43 664 1652141 <br/>
                        jobs@pcode.at <br/>
                        </Text>
                    </ContactLayout>
                    <PagesLayout>
                        <Text>
                            <PageReference href="">home</PageReference><br/>
                            <PageReference href="">who we are</PageReference><br/>
                            <PageReference href="">what we do</PageReference><br/>
                            <PageReference href="">whom we work with</PageReference><br/>
                            <PageReference href="">join us</PageReference><br/>
                            <PageReference href="">contact us</PageReference><br/>
                        </Text>
                    </PagesLayout>
                    <AddressLayout>
                        <Text>
                        peter-behrens-platz 9 <br/>
                        stiege d / 3. stock <br/>
                        4020 linz – austria <br/>
                        </Text>
                    </AddressLayout>
                </FooterTextLayout>
                <SocialMediaIconsLayout>
                    <PageReference href="">
                        <Icon src={'../static/instagram.svg'}></Icon>
                    </PageReference>
                    <PageReference href="">
                        <Icon src={'../static/facebook.svg'}></Icon>
                    </PageReference>
                    <PageReference href="">
                        <Icon src={'../static/twitter.svg'}></Icon>
                    </PageReference>
                    <PageReference href="">
                        <Icon src={'../static/linkedin.svg'}></Icon>
                    </PageReference>
                </SocialMediaIconsLayout>
                <ImpressumLayout>
                    <ImpressumEntry href={CONSTANTS.DATA_PRIVACY_LINK}>datenschutz</ImpressumEntry>
                    <ImpressumEntry href={CONSTANTS.AGB_LINK}>agb</ImpressumEntry>
                    <ImpressumEntry href={CONSTANTS.IMPRESSUM_LINK}>impressum</ImpressumEntry>
                </ImpressumLayout>
            </TextAreaLayout>
        </FooterLayout>
    );
}