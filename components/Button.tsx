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
    fontFamily: '$default',
    boxShadow: '$regular',

    // figma
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',

    margin: '$xxs',

    variants: {
        color: {
            primaryFilled: {
                backgroundColor: '$red77',
                color: '$white',
                border: 'none',
                '&:hover': {
                    backgroundColor: '$red60',                 
                },
                '&:disabled': {
                    backgroundColor: '$red30'
                }
            },
            primaryOutlined: {
                backgroundColor: '$white',
                borderColor: '$red77',
                color: '$red77',
                borderWidth: '$regular'
            },
            secondaryFilled: {
                backgroundColor: '$blue35',
                color: '$white',
                border: 'none',
                '&:hover': {
                    backgroundColor: '$blue50'
                },
                '&:disabled': {
                    backgroundColor: '$blue60'
                }
            },
            secondaryOutlined: {
                backgroundColor: '$white',
                borderColor: '$blue35',
                color: '$blue35',
                borderWidth: '$regular'
            },
            tertiary: {
                backgroundColor: '$green',
                color: '$grey',
                border: 'none'
            }
        }

    }

});