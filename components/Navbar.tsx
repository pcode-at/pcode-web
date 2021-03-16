import React from 'react';
import { theme } from '../theme';
import { styled } from '../stitches.config';
import { Box, Flex, Text } from 'rebass';
import { CONSTANTS } from '../shared/constants';

type Props = { className?: string; }

export const Navbar: React.FC<Props> = ({ className }) => {
 
    let NavbarLayout = styled(Flex, {

    })

    let LogoLayout = styled('a', {
        margin: '17px auto',
        justifyContent: 'center',
        display: 'flex',

    })

    let Logo = styled('img', {
        maxWidth: '60%',
    
    
    })

    let NavbarItemsLayout = styled('nav', {
        // width: theme.Navbar.Items.Width,
        // height: theme.Navbar.Items.Height,
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '35.5px 165px 35.5px 0px',
        marginLeft: 'auto',
        marginRight: 'auto',

    })

    let NavbarItem = styled('a', {
        fontFamily: theme.Font.Default,
        fontSize: theme.Navbar.Items.Font.Size,
        lineHeight: theme.Navbar.Items.LineHeight,
        color: theme.Navbar.Items.Font.Color,
        // fontWeight: theme.Navbar.Items.Font.Weight,
        // marginLeft: 'auto',
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
                <NavbarItem color={'default'} href="">who we are</NavbarItem>
                <NavbarItem color={'default'} href="">what we do</NavbarItem>
                <NavbarItem color={'default'} href="">our clients</NavbarItem>
                <NavbarItem color={'default'} href="">join us</NavbarItem>
                <NavbarItem color={'default'} href="">blog</NavbarItem>
            </NavbarItemsLayout>
        </NavbarLayout>
    );
    
}