import React from 'react';
import { createStyled } from '@stitches/react';

export const theme = {

    Font: {
        Default: '$default',
    },
    
    // ---------- COLORS ---------- 
    Color: {
        Accent: {
            Grey: '$grey500',
            Lilac: '$lilac500',
            Turquoise: '$turquoise500',
        },
        Alert: '$cherry500',
        Primary: {
            Default: '$red500',
            Hover: '$red300',
            Inactive: '$red100'
        },
        Secondary: {
            Default: '$blue500',
            Hover: '$blue300',
            Inactive: '$blue100',
        },
        Tertiary: {
            Default: '$green500',
        },
        White: '$white',
    },

    // ---------- BUTTON ----------
    Button: {
        Border: {
            Radius: '$circle',
            Width: {
                None: 'none',
                Regular: '$regular',
            },
        },
        BoxShadow: '$regular',
        Font: {
            Size: '$s',
            Weight: '$regular',
        },
        LineHeight: '$s',
        Padding: '16px 24px',
    },

    // ---------- CONTACT FORM ----------
    ContactForm: {
        Input: {
            Width: '580px',
            Height: {
                Small: '40px',
                Large: '201px'
            }
        },
        Border: {
            Color: {
                Alert: '$cherry500',
                Default: '$green500',
            },
            Radius: '$rounded',
            Width: '$medium',
        }
    },

    // ---------- FOOTER ----------
    Footer: {
        Background: {
            Color: '$blue500',
        },
        TextArea: { 
            Font: {
                Weight: '$regular',
                Size: '$s',
                Color: '$green500',
            },
            LineHeight: '$s',
            TextDecoration: {
                Default: 'none',
                Hover: 'underline',
            },
            TextDecorationThickness: '0.063rem',
            TextUnderlineOffset: '0.25rem', 
        },
    },

    // ---------- NAVBAR ----------
    Navbar: {
        Items: {
            Font: {
                Weight: '$medium',
                Size: '$m',
                Color: {
                    Default: '$blue500',
                    Hover: '$red500',
                }
            },
            LineHeight: '$m',
            TextDecoration: 'underline',
            TextDecorationColor: '$red500',
            TextDecorationThickness: '0.063rem', 
            TextUnderlineOffset: '0.25rem', 
        },
    },
}