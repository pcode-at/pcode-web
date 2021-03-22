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
                None: 'none',
                Regular: '$regular',
            },
            Radius: '$circle',
        },
        Font: {
            Weight: '$regular',
            Size: '$s',
        },
        LineHeight: '$s',
        Padding: '16px 24px',
        BoxShadow: '$regular',
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
            Height: '324px',
        },
        TextArea: {
            Width: '1180px',
            Height: '209px',
            LineHeight: '$s',

            Display: 'flex',
            FlexDirection: 'column',
            JustifyContent: 'flex-end',
            AlignItems: 'center',

            Font: {
                Weight: '$regular',
                Size: '$s',
            },

            Contact: {
                Width: '222px',
                Height: '58px',
            },
            Pages: {
                Width: '222px',
                Height: '109px',
            },
            Address: {
                Width: '222px',
                Height: '58px',
            },
            SocialMedia: {
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

    // ---------- BUBBLE ----------
    Bubble: {
        Background: {
            Color: {
                Red: '$red500',
                Blue: '$blue500',
                Green: '$green500',
                White: '$white'
            }
        },
        Blank: {
            Height: '648px',
            Width: '570px',
        },
        Image: {
            Height: '648px',
            Width: '570px',
            Mask: {
                Height: '604px',
                Width: '531px',
                Size: '93%', // MaskWidth / ImageWidth 
            }
        },
        Portrait: {
            Background: {
                Height: '232px',
                Width: '200px',
            },
            Mask: {
                Width: '213px',
                Height: '240px',
            },
            Name: {
                FontFamily: '$default',
                LineHeight: '$l',
                FullName: {
                    Font: {
                        Size: '$l',
                        Weight: '$medium',
                        Color: '$blue500',
                    },
                },
                Position: {
                    Font: {
                        Size: '$l',
                        Weight: '$light',
                        Color: '$blue500',
                    },
                },
            },
            Quotation: { 
                Font: {
                    Family: '$default',
                    Size: '$xl',
                    Weight: '$medium',
                },
                LineHeight: '$xl',
            },
        },
    },

    // ---------- ----------
    // ---------- ----------
    // ---------- ----------

    

}