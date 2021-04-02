import React from 'react';
import { createStyled } from '@stitches/react';

export const theme = {

    Font: {
        Default: '$default',
    },
    
    // ---------- COLORS ---------- 
    Color: {
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
        Accent: {
            Grey: '$grey500',
            Lilac: '$lilac500',
            Turquoise: '$turquoise500',
        },
        White: '$white',
        Alert: '$cherry500',
    },

    // ---------- BUTTON ----------
    Button: {
        Background: {
            Color: {
                Primary: {
                    Red: {
                        Default: '$red500',
                        Hover: '$red300',
                        Disabled: '$red100',
                        Active: '$red500',
                    },
                    Blue: {
                        Default: '$blue500',
                        Hover: '$blue300',
                        Disabled: '$blue100',
                        Active: '$blue500',
                    },
                    White: '$white',
                },
                Secondary: 'transparent',
                Tertiary: {
                    Default: 'transparent',
                    Hover: '$red100',
                    Disabled: 'transparent',
                    Active: '$red500',
                },
            }
        },
        Border: {
            Color: {
                Tertiary: {
                    Default: '$red500',
                    Disabled: '$red100',
                },
            },
            Radius: '$circle',
            Width: {
                Primary: 'none',
                Secondary: 'none',
                Tertiary: '$regular',
            },
        },
        BoxShadow: '$regular',
        Font: {
            Weight: '$regular',
            Size: '$s',
            Color: {
                Primary: {
                    Default: '$white',
                    White: '$blue500',
                },
                Secondary: '$red500',
                Tertiary: {
                    Default: '$red500',
                    Hover: '$white',
                    Disabled: '$red100',
                    Active: '$white',
                },
            },
        },
        LineHeight: '$s',
        Padding: '$s $m',
        TextDecoration: {
            Secondary: {
                TextDecoration: 'underline',
                TextDecorationThickness: '0.063rem', // Figma: 1px
                TextUnderlineOffset: '0.25rem', // Figma: 4px

            },
        },
    },

    // ---------- CONTACT FORM ----------
    ContactForm: {
        Width: '85%',
        H1: {
            Font: {
                Family: '$default',
                Size: '$xxl',
                Weight: '$medium',
                Color: '$blue500',
            },
            LineHeight: '$xxl',
            LetterSpacing: '$tight',
            
        },
        Input: {
            Width: '580px',
            Height: {
                Small: '40px',
                Large: '201px'
            },
            Font: {
                Family: '$default',
                Color: '$blue500',
                Size: '$m',
                Weight: '$medium',
            },
            LineHeight: '24px',
        },
        Border: {
            Color: {
                Default: '$blue500',
                Alert: '$cherry500',
            },
            Width: '$medium',
            Radius: '$rounded',
        },
        Label: {
            Font: {
                Family: '$default',
                Size: '$xs',
                Weight: '$semibold',
            },
            LineHeight: '$s',
            LetterSpacing: '$wide',

            /**
             * 
             * //styleName: label 1 12 600;
                font-family: Raleway;
                font-size: 12px;
                font-style: normal;
                font-weight: 600;
                line-height: 16px;
                letter-spacing: 0.006em;
                text-align: left;

             */

        },
    },

    // ---------- FOOTER ----------
    Footer: {
        Background: {
            Color: '$blue500',
        },
        TextArea: { 
            LineHeight: '$s',
            Font: {
                Weight: '$regular',
                Size: '$s',
                Color: '$green500',
            },
        },
    },

    // ---------- NAVBAR ----------
    Navbar: {
        Items: {
            LineHeight: '$m',
            Font: {
                Weight: '$medium',
                Size: '$m',
                Color: '$blue500',

            }
        }
    }

    // ---------- ----------
    // ---------- ----------
    // ---------- ----------

    

}