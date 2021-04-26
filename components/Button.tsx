import React from 'react';
import { styled } from '../stitches.config';
import { theme } from '../theme';

export const Button = styled('button', {

    alignItems:     'flex-end',
    borderRadius:   theme.Button.Border.Radius,
    boxShadow:      theme.Button.BoxShadow,
    display:        'flex',
    flexDirection:  'row',
    fontFamily:     theme.Font.Default,   
    fontSize:       theme.Button.Font.Size,
    fontWeight:     '$regular',
    justifyContent: 'center',
    lineHeight:     theme.Button.LineHeight,
    padding:        theme.Button.Padding,

    variants: {
        variant: {
            // TODO: check out why boxShadow: 'inset $regular' doesn't work
            primaryRed: {
                color: theme.Button.Font.Color.Primary.Default,
                backgroundColor: theme.Button.Background.Color.Primary.Red.Default,
                border: theme.Button.Border.Width.Primary,
                boxShadow: theme.Button.BoxShadow,
    
                '&:hover': {
                    backgroundColor: theme.Button.Background.Color.Primary.Red.Hover,
                },
                '&:disabled': {
                    backgroundColor: theme.Button.Background.Color.Primary.Red.Disabled,
                },
                '&:active': {
                    backgroundColor: theme.Button.Background.Color.Primary.Red.Default,
                    boxShadow: 'inset 0px 4px 16px rgba(0, 0, 0, 0.15)',
                    // boxShadow: 'inset $regular',
                },
            },
            primaryBlue: {
                color: theme.Button.Font.Color.Primary.Default,
                backgroundColor: theme.Button.Background.Color.Primary.Blue.Default,
                border: theme.Button.Border.Width.Primary,
                boxShadow: theme.Button.BoxShadow,

                '&:hover': {
                    backgroundColor: theme.Button.Background.Color.Primary.Blue.Hover,
                },
                '&:disabled': {
                    backgroundColor: theme.Button.Background.Color.Primary.Blue.Disabled,
                },
                '&:active': {
                    backgroundColor: theme.Button.Background.Color.Primary.Blue.Default,
                    boxShadow: 'inset 0px 4px 16px rgba(0, 0, 0, 0.15)',
                    // boxShadow: 'inset $regular',
                },

            },
            primaryWhite: {
                backgroundColor: theme.Button.Background.Color.Primary.White,
                border: theme.Button.Border.Width.Primary,
                boxShadow: theme.Button.BoxShadow,
                color: theme.Button.Font.Color.Primary.White,

                '&:hover': {
                    opacity: '0.8',
                },
                '&:disabled': {
                    opacity: '0.5',
                },
                '&:active': {
                    boxShadow: 'inset 0px 4px 16px rgba(0, 0, 0, 0.15)',
                    // boxShadow: 'inset $regular',
                    opacity: '1',
                },

            },
            secondary: {
                // transparent background, no border
                backgroundColor: theme.Button.Background.Color.Secondary,
                border: theme.Button.Border.Width.Secondary,
                borderWidth: theme.Button.Border.Width.Secondary,
                boxShadow: 'none',
                color: theme.Button.Font.Color.Secondary,

                '&:hover': {
                    textDecoration: theme.Button.TextDecoration.Secondary.TextDecoration,
                    textDecorationColor: theme.Button.Font.Color.Secondary,
                    textDecorationThickness: theme.Button.TextDecoration.Secondary.TextDecorationThickness,
                    textUnderlineOffset: theme.Button.TextDecoration.Secondary.TextUnderlineOffset,
                }

            },
            tertiary: {
                backgroundColor: theme.Button.Background.Color.Tertiary.Default,
                border: theme.Button.Border.Width.Tertiary,
                borderColor: theme.Button.Border.Color.Tertiary.Default,
                borderRadius: theme.Button.Border.Radius,
                borderStyle: 'solid',
                boxShadow: 'none',
                color: theme.Button.Font.Color.Tertiary.Default,

                '&:hover': {
                    backgroundColor: theme.Button.Background.Color.Tertiary.Hover,
                    border: 'none',
                    color: theme.Button.Font.Color.Tertiary.Hover,

                },
                '&:disabled': {
                    backgroundColor: theme.Button.Background.Color.Tertiary.Disabled,
                    border: theme.Button.Border.Width.Tertiary,
                    borderColor: theme.Button.Border.Color.Tertiary.Disabled,
                    borderStyle: 'solid',
                    color: theme.Button.Font.Color.Tertiary.Disabled,

                },
                '&:active': {
                    backgroundColor: theme.Button.Background.Color.Tertiary.Active,
                    border: 'none',
                    boxShadow: 'inset 0px 4px 16px rgba(0, 0, 0, 0.15)',
                    color: theme.Button.Font.Color.Tertiary.Active,

                },
            },
        },
    },

});