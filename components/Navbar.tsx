import React from 'react';
import { theme } from '../theme';
import { styled } from '../stitches.config';

type Props = { className?: string; }

export const Navbar: React.FC<Props> = ({ className }) => {
 
    let NavbarLayout = styled('div', {
        maxWidth: '100%',
        display: 'flex',

    })

    let LogoLayout = styled('a', {
        margin: '17px auto',
        justifyContent: 'center',
        display: 'flex',
        maxWidth: '45%',
    })

    let Logo = styled('img', {
        maxWidth: '60%',    
    })

    let NavbarItemsLayout = styled('nav', {
        width: '55%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0px $l',
        marginLeft: 'auto',
        marginRight: 'auto',

    })

    let NavbarItem = styled('a', {
        fontFamily: theme.Font.Default,
        fontSize: theme.Navbar.Items.Font.Size,
        lineHeight: theme.Navbar.Items.LineHeight,
        color: theme.Navbar.Items.Font.Color,
        fontWeight: '$medium',
        // fontWeight: theme.Navbar.Items.Font.Weight,
        marginRight: 'auto',
        textDecoration: 'none',

        variants: {
            color: {
                default: {
                    color: theme.Navbar.Items.Font.Color,
                    '&:hover': {
                        color: theme.Color.Primary.Default,
                        textDecorationColor: theme.Color.Primary.Default,
                        textDecorationLine: 'underline',
                    },
                    '&::selection': {
                        color: theme.Color.Primary.Default,
                        textDecorationColor: theme.Color.Primary.Default,
                        textDecorationLine: 'underline',
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