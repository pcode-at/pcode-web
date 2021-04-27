import React from 'react';
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
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0px $l',
        width: '55%',
    })

    let NavbarItem = styled('a', {
        color: '$blue500',
        fontFamily: '$default',
        fontSize: '$m',
        fontWeight: '$medium',
        lineHeight: '$m',
        marginRight: 'auto',
        textDecoration: 'none',

        '&:hover': {
            color: '$red500',
            textDecoration: 'underline',
            textDecorationColor: '$red500',
            textDecorationThickness: '0.5px',
            textUnderlineOffset: '4px',
        },
        '&::selection': {
            color: '$red500',
            textDecoration: 'underline',
            textDecorationColor: '$red500',
            textDecorationThickness: '0.5px',
            textUnderlineOffset: '4px',
        },
        '&~a': {
            marginLeft: 'auto',
        },

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