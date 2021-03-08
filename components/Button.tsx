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
                backgroundColor: '$red500',
                color: '$white',
                border: 'none',
                '&:hover': {
                    backgroundColor: '$red300',                 
                },
                '&:disabled': {
                    backgroundColor: '$red100'
                }
            },
            primaryOutlined: {
                backgroundColor: '$white',
                borderColor: '$red500',
                color: '$red500',
                borderWidth: '$regular'
            },
            secondaryFilled: {
                backgroundColor: '$blue500',
                color: '$white',
                border: 'none',
                '&:hover': {
                    backgroundColor: '$blue300'
                },
                '&:disabled': {
                    backgroundColor: '$blue100'
                }
            },
            secondaryOutlined: {
                backgroundColor: '$white',
                borderColor: '$blue500',
                color: '$blue500',
                borderWidth: '$regular'
            },
            tertiary: {
                backgroundColor: '$green500',
                color: '$grey500',
                border: 'none'
            }
        }

    }

});