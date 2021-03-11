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
    alignItems:     'flex-end',

    // TODO: Change structure of variants (filled/outlined)
    // reference: https://codesandbox.io/s/ecstatic-meninsky-o6l2d?file=/src/App.js 
    
    variants: {
        color: {
            primaryFilled: {
                backgroundColor: theme.Color.Primary.Default,
                color: theme.Color.White,
                border: theme.Button.Border.Width.None,
                '&:hover': {
                    backgroundColor: theme.Color.Primary.Hover,                 
                },
                '&:disabled': {
                    backgroundColor: theme.Color.Primary.Inactive
                }
            },
            primaryOutlined: {
                backgroundColor: theme.Color.White,
                borderColor: theme.Color.Primary.Default,
                color: theme.Color.Primary.Default,
                borderWidth: theme.Button.Border.Width.Regular,
            },
            secondaryFilled: {
                backgroundColor: theme.Color.Secondary.Default,
                color: theme.Color.White,
                border: theme.Button.Border.Width.None,
                '&:hover': {
                    backgroundColor: theme.Color.Secondary.Hover,
                },
                '&:disabled': {
                    backgroundColor: theme.Color.Secondary.Default,
                }
            },
            secondaryOutlined: {
                backgroundColor: theme.Color.White,
                borderColor: theme.Color.Secondary.Default,
                color: theme.Color.Secondary.Default,
                borderWidth: theme.Button.Border.Width.Regular,
            },
            tertiary: {
                backgroundColor: theme.Color.Tertiary.Default,
                color: theme.Color.Accent.Grey,
                border: theme.Button.Border.Width.None,
            }
        }

    }

});