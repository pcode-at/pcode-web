import React from 'react';
import { theme } from '../theme';
import { styled } from '../stitches.config';

type Props = { className?: string; }

export const Navbar: React.FC<Props> = ({ className }) => {
 
    let NavbarLayout = styled('div', {
        display: 'flex',
        maxWidth: '100%',
    })

    let LogoLayout = styled('a', {
        display: 'flex',
        justifyContent: 'center',
        margin: '17px auto',
        maxWidth: '45%',
    })

    let Logo = styled('img', {
        maxWidth: '60%',    
    })

    let NavbarItemsLayout = styled('nav', {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0px $l',
        width: '55%',
    })

    let NavbarItem = styled('a', {
        color: theme.Navbar.Items.Font.Color.Default,
        fontFamily: theme.Font.Default,
        fontSize: theme.Navbar.Items.Font.Size,
        fontWeight: '$medium',
        // fontWeight: theme.Navbar.Items.Font.Weight,
        lineHeight: theme.Navbar.Items.LineHeight,
        marginRight: 'auto',
        textDecoration: 'none',

        variants: {
            color: {
                default: {
                    color: theme.Navbar.Items.Font.Color.Default,
                    '&:hover': {
                        color: theme.Navbar.Items.Font.Color.Hover,
                        textDecoration: theme.Navbar.Items.TextDecoration,
                        textDecorationColor: theme.Navbar.Items.TextDecorationColor,
                        textDecorationThickness: theme.Navbar.Items.TextDecorationThickness,
                        textUnderlineOffset: theme.Navbar.Items.TextUnderlineOffset,
                    },
                    '&::selection': {
                        color: theme.Navbar.Items.Font.Color.Hover,
                        textDecoration: theme.Navbar.Items.TextDecoration,
                        textDecorationColor: theme.Navbar.Items.TextDecorationColor,
                        textDecorationThickness: theme.Navbar.Items.TextDecorationThickness,
                        textUnderlineOffset: theme.Navbar.Items.TextUnderlineOffset,
                    },
                    '&~a': {
                        marginLeft: 'auto',
                    },
                },
            }
        }
    })

    return (
        <NavbarLayout>
            <LogoLayout href="">
                <Logo src={'../static/logoLarge.jpg'}/>
            </LogoLayout>
            <NavbarItemsLayout>
                <NavbarItem color={'default'} href="">home</NavbarItem>
                <NavbarItem color={'default'} href="./who-we-are">who we are</NavbarItem>
                <NavbarItem color={'default'} href="./what-we-do">what we do</NavbarItem>
                <NavbarItem color={'default'} href="">our clients</NavbarItem>
                <NavbarItem color={'default'} href="./join-us">join us</NavbarItem>
                <NavbarItem color={'default'} href="">blog</NavbarItem>
            </NavbarItemsLayout>
        </NavbarLayout>
    );
    
}