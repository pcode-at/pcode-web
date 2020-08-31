import { Color } from './Color.enum';
import React from 'react';

const breakpoints = ['768px', '1024px'];

export const theme = {
    colors: {
        [Color.Primary]: '#F73859',
        [Color.Secondary]: '#263958',
        [Color.Secondary2]: '#7AC7C4',
        [Color.White]: '#fff',
    },
    font: {
        light: {
            fontFamily: 'raleway',
            fontWeight: 300,
            lineHeight: 1.333,
        },
        normal: {
            fontFamily: 'raleway',
            fontWeight: 400,
            lineHeight: 1.333,
        },
    },
    radii: {
        default: 4,
    },
    shadows: {
        card: '0 0 4px rgba(0, 0, 0, .125)',
    },
    variants: {
        card: {
            p: 3,
            borderRadius: 'default',
            bg: 'white',
            boxShadow: 'card',
        },
        badge: {
            color: 'white',
            bg: 'primary',
            p: 1,
            borderRadius: 'default',
        },
    },
    breakpoints,
    fontSizes: {
        helperText: 16,
        paragraph: 21.33,
        h5: 28.43,
        h4: 37.9,
        h3: 50.52,
        h2: 67.34,
        h1: 89.76,
    },
    space: {
        xs: 4,
        s: 8,
        m: 16,
        l: 32,
        xl: 64,
    },
    mediaQueries: {
        tablet: `@media screen and (min-width: ${breakpoints[0]})`,
        desktop: `@media screen and (min-width: ${breakpoints[1]})`,
    },
};
