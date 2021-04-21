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
        },
    },

    // ---------- NAVBAR ----------
    Navbar: {
        Items: {
            Font: {
                Weight: '$medium',
                Size: '$m',
                Color: '$blue500',
            }
        }
    },

    // ----------  WAVE ----------
    Wave: {
        Color: {
            Red: '$red500',
            Blue: '$blue500',
            Green: '$green500',
            White: '$white',
        },
        // Font.Color does NOT describe the actual color, but the background color. 
        // > Why? The font color depends on the background color
        //          -> no arbitrary choices/combinations allowed
        // same with button variants
        Quote: {
            Small: {
                Color: {
                    Blue: '$blue500',
                    Green: '$green500',
                    Red: '$red500',
                },
                Font: {
                    Color: {
                        Blue: '$white',
                        Green: '$blue500',
                        Red: '$blue500',
                    },
                    Family: '$default',
                    Size: '$xl',
                    Weight: {
                        Light: '$light',
                        Medium: '$medium'
                    },
                },
                LineHeight: '$xl',
            },
            Large: {
                Color: {
                    Blue: '$blue500',
                    Green: '$green500',
                    Red: '$red500',
                },
                Font: {
                    Color: {
                        Blue: '$white',
                        Green: '$blue500',
                        Red: '$white',
                    },
                    Family: '$default',
                    Size: '$xxl',
                    Weight: {
                        Light: '$light',
                        Medium: '$medium'
                    },
                },
                LineHeight: '$xxl',
            },
        },

        CallToAction: {
            Medium: {
                Button: 'primaryWhite',
                Bubble: {
                    Color: '$green500',
                },
                Color: '$blue500',
                Font: {
                    Color: {
                        Blue: '$green500',
                    },
                    Family: '$default',
                    Size: '$xl',
                    Weight: {
                        Light: '$light',
                        Medium: '$medium',
                    },
                },
                LineHeight: '$xl',
            },
            Large: {
                Button: {
                    Blue: 'primaryRed',
                    Green: 'primaryBlue',
                    Red: 'primaryWhite',
                },
                Color: {
                    Red: '$red500',
                    Blue: '$blue500',
                    Green: '$green500',
                },
                Header: {
                    Font: {
                        Color: {
                            Blue: '$white',
                            Green: '$blue500',
                            Red: '$blue500',
                        },
                        Family: '$default',
                        Size: '$xxl',
                        Weight: {
                            Light: '$light',
                            Medium: '$medium',
                        },
                    },
                    LetterSpacing: '$tight',
                    LineHeight: '$xxl',
                },
                Body: {
                    Font: {
                        Color: {
                            Blue: '$white',
                            Green: '$blue500',
                            Red: '$blue500',
                        },
                        Family: '$default',
                        Size: '$m',
                        Weight: '$regular',
                    },
                    LineHeight: '$m',
                },
            }
        },      
    }
    // ---------- ----------
    // ---------- ----------
}