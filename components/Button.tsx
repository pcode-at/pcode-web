import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';

export const Button = styled('button', {

    borderRadius:   theme.Button.Border.Radius,
    fontFamily:     theme.Font.Default,   
    fontSize:       theme.Button.Font.Size,
    fontWeight:     '$regular',
    // fontWeight:  theme.Button.Font.Weight, 
    lineHeight:     theme.Button.LineHeight,
    boxShadow:      theme.Button.BoxShadow,
    padding:        theme.Button.Padding,
    display:        'flex',
    flexDirection:  'row',
    justifyContent: 'center',
    alignItems:     'center',

    variants: {
        variant: {
            primaryRed: {
                boxShadow: theme.Button.BoxShadow,

                backgroundColor: theme.Button.Background.Color.Primary.Red.Default,
                color: theme.Button.Font.Color.Primary.Default,
                border: theme.Button.Border.Width.Primary,

                '&:hover': {
                    backgroundColor: theme.Button.Background.Color.Primary.Red.Hover,
                },
                '&:disabled': {
                    backgroundColor: theme.Button.Background.Color.Primary.Red.Inactive,
                },
            },
            primaryBlue: {
                boxShadow: theme.Button.BoxShadow,

                backgroundColor: theme.Button.Background.Color.Primary.Blue.Default,
                color: theme.Button.Font.Color.Primary.Default,
                border: theme.Button.Border.Width.Primary,

            },
            primaryWhite: {
                boxShadow: theme.Button.BoxShadow,

                backgroundColor: theme.Button.Background.Color.Primary.White,
                color: theme.Button.Font.Color.Primary.White,
                border: theme.Button.Border.Width.Primary,

            },

            secondary: {
                // transparent background, no border
                backgroundColor: theme.Button.Background.Color.Secondary,
                color: theme.Button.Font.Color.Secondary,
                border: theme.Button.Border.Width.Secondary,
                borderWidth: theme.Button.Border.Width.Secondary,
                boxShadow: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: theme.Button.Font.Color.Secondary,
                }
            },
            tertiary: {
                // transparent background 
                // border & font color are identical
                backgroundColor: theme.Button.Background.Color.Tertiary,
                color: theme.Button.Font.Color.Tertiary,
                borderColor: theme.Button.Font.Color.Tertiary,
                borderWidth: theme.Button.Border.Width.Tertiary,
            },
        },
    },
});