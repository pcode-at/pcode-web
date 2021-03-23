import React from 'react';
import { Text } from 'rebass';
import { theme } from '../theme';
import { styled } from '../stitches.config';
import { CONSTANTS } from '../shared/constants';

type Props = { className?: string; }

export const Footer: React.FC<Props> = ({ className }) => { 

    let FooterLayout = styled('div', {
        alignItems: 'center',
        maxWidth: '100%',
        backgroundImage: `url(${'../static/rectangle.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
    })

    // area containing the whole footer content
    let TextAreaLayout = styled('div', {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '$none',
        maxWidth: '100%',
    })
    // area containing contact, pages and address
    let FooterTextLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '$none',
        margin: '$l $none',
    })
    let FooterTextEntryLayout = styled('div', {
        textAlign: 'center',
        textTransform: 'lowercase',
        marginRight: '$xxl',
        '&~div': {
            marginLeft: '$xxl',
        }
    })

    let SocialMediaIconsLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: '$none',
        margin: '$s $none',
    })
    let ImpressumLayout = styled('div', {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: '$none',
        margin: '$s $none',
    })

    let Text = styled('p', {
        fontFamily: theme.Font.Default,
        fontSize: theme.Footer.TextArea.Font.Size,
        fontWeight: theme.Footer.TextArea.Font.Weight,
        color: theme.Footer.TextArea.Font.Color,
        lineHeight: theme.Footer.TextArea.LineHeight,
    })
    let PageReference = styled('a', {
        fontFamily: theme.Font.Default,
        fontSize: theme.Footer.TextArea.Font.Size,
        fontWeight: theme.Footer.TextArea.Font.Weight,
        color: theme.Footer.TextArea.Font.Color,
        lineHeight: theme.Footer.TextArea.LineHeight,
        textDecoration: 'none',
    })
    let ImpressumEntry = styled(PageReference, {
        '&~a': {
            marginLeft: '1rem',
        },
    })
    let Icon = styled('img', {
        width: '$s',
        height: '$s',
        margin: '$none $l',
    })

    return (
        <FooterLayout className={className}>
            <TextAreaLayout>
                <FooterTextLayout>
                    <FooterTextEntryLayout>
                        <Text>
                        pcode – software engineering <br/>
                        +43 664 1652141 <br/>
                        jobs@pcode.at <br/>
                        </Text>
                    </FooterTextEntryLayout>
                    <FooterTextEntryLayout>
                        <Text>
                            <PageReference href="">home</PageReference><br/>
                            <PageReference href="">who we are</PageReference><br/>
                            <PageReference href="">what we do</PageReference><br/>
                            <PageReference href="">whom we work with</PageReference><br/>
                            <PageReference href="">join us</PageReference><br/>
                            <PageReference href="">contact us</PageReference><br/>
                        </Text>
                    </FooterTextEntryLayout>
                    <FooterTextEntryLayout>
                        <Text>
                        peter-behrens-platz 9 <br/>
                        stiege d / 3. stock <br/>
                        4020 linz – austria <br/>
                        </Text>
                    </FooterTextEntryLayout>
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