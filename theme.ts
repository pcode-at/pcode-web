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
            Width: {
                Primary: 'none',
                Secondary: 'none',
                Tertiary: '$regular',
            },
            Radius: '$circle',
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
                Tertiary: '$red500',
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
                        Inactive: '$red100',
                    },
                    Blue: {
                        Default: '$blue500',
                        Hover: '$blue300',
                        Inactive: '$blue100',
                    },
                    White: '$white',
                },
                Secondary: 'transparent',
                Tertiary: 'transparent',
            }
        }
    },

    // ---------- CONTACT FORM ----------
    ContactForm: {
        Height: '473px',
        Width: '580px',
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
            Width: '1440px',
            Height: '336px',
            Color: '$blue500',
        },
        TextArea: { 
            Width: '1180px',
            Height: '196px',
            LineHeight: '$s',
            
            Font: {
                Weight: '$regular',
                Size: '$s',
                Color: '$green500',
            },
            FooterText: {
                Width: '',
                Height: '',
                Contact: {
                    Width: '222px',
                    Height: '58px',
                },
                Pages: {
                    Width: '222px',
                    Height: '96px',
                },
                Address: {
                    Width: '222px',
                    Height: '58px',
                },
            },
            SocialMedia: {
                Width: '154px',
                Height: '16px',
                FlexDirection: 'row',
                JustifyContent: 'center',
                AlignItems: 'flex-end',
            },
            Impressum: {
                Width: '238px',
                Height: '16px',

                FlexDirection: 'row',
                AlignItems: 'flex-start',
            },
        },
    },

    // ---------- NAVBAR ----------
    Navbar: {
        Width: '1440px',
        Height: '88px',
        
        Items: {
            Width: '795px',
            Height: '88px',
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