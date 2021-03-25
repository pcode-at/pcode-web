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
        BoxShadow: '$regular',
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
        }
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
                Default: '$green500',
                Alert: '$cherry500',
            },
            Width: '$medium',
            Radius: '$rounded',
        }
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