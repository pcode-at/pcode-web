import React from 'react';
import { styled } from '../stitches.config';

export const Button = styled('button', {

    alignItems:     'flex-end',
    borderRadius:   '$circle',
    boxShadow:      '$regular',
    display:        'flex',
    flexDirection:  'row',
    fontFamily:     '$default',
    fontSize:       '$s',
    fontWeight:     '$regular',
    justifyContent: 'center',
    lineHeight:     '$s',
    padding:        '$s $m',

    variants: {
        variant: {
            // TODO: check out why boxShadow: 'inset $regular' doesn't work
            primaryRed: {
                backgroundColor:'$red500',
                border: 'none',
                color: '$white',

                '&:hover': {
                    backgroundColor: '$red300',
                },
                '&:disabled': {
                    backgroundColor: '$red100',
                },
                '&:active': {
                    backgroundColor: '$red500',
                    boxShadow: 'inset 0px 4px 16px rgba(0, 0, 0, 0.15)',
                    // boxShadow: 'inset $regular',
                },
            },
            primaryBlue: {
                backgroundColor: '$blue500',
                border: 'none',
                color: '$white',

                '&:hover': {
                    backgroundColor:'$blue300',
                },
                '&:disabled': {
                    backgroundColor: '$blue100',
                },
                '&:active': {
                    backgroundColor: '$blue500',
                    boxShadow: 'inset 0px 4px 16px rgba(0, 0, 0, 0.15)',
                    // boxShadow: 'inset $regular',
                },

            },
            primaryWhite: {
                backgroundColor: '$white',
                border: 'none',
                color: '$blue500',

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
                backgroundColor: 'transparent',
                border: 'none',
                boxShadow: 'none',
                color: '$red500',

                '&:hover': {
                    textDecoration: 'underline',
                    textDecorationColor: '$red500',
                    textDecorationThickness: '0.063rem',
                    textUnderlineOffset: '0.25rem',
                }

            },
            tertiary: {
                backgroundColor: 'transparent',
                border: '$regular',
                borderColor: '$red500',
                borderRadius: '$circle',
                borderStyle: 'solid',
                boxShadow: 'none',
                color: '$red500',

                '&:hover': {
                    backgroundColor: '$red100',
                    border: 'none',
                    color: '$white',
                },
                '&:disabled': {
                    backgroundColor: 'transparent',
                    border: '$regular',
                    borderColor: '$red100',
                    borderStyle: 'solid',
                    color: '$red100',
                },
                '&:active': {
                    backgroundColor: '$red500',
                    border: 'none',
                    boxShadow: 'inset 0px 4px 16px rgba(0, 0, 0, 0.15)',
                    color: '$white',
                },
            },
        },
    },

});