import { NONAME } from 'dns';
import React from 'react';
import { alignItems, justifyContent } from 'styled-system';
import { styled } from '../stitches.config';

export const Button = styled('button', {
    // theme 
    borderRadius: '$circle',
    fontSize: '$s',
    fontWeight: '$regular',
    lineHeight: '$s',
    border: 'none',
    fontFamily: '$default',
    boxShadow: '$regular',

    // figma
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',

    variants: {
        color: {
            primary: {
                backgroundColor: '$red77',
                color: '$white',
                '&:hover': {
                    backgroundColor: '$red60',                 
                },
                '&:disabled': {
                    backgroundColor: '$red30'
                }
            },
            secondary: {
                backgroundColor: '$blue35',
                color: '$white',
                '&:hover': {
                    backgroundColor: '$blue50'
                },
                '&:disabled': {
                    backgroundColor: '$blue60'
                }
            }
        }

    }

// height: 48px;
// width: 169px;
// left: 505px;
// top: 400.5px;
// border-radius: 29px;
// padding: 16px, 24px, 16px, 24px;



});