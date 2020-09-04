import { createStyled } from '@stitches/react';
import { Color } from './Color.enum';

export const { styled, css } = createStyled({
    prefix: '',
    tokens: {
        colors: {
            ['$' + Color.Primary]: '#F73859',
            ['$' + Color.Secondary]: '#263958',
            ['$' + Color.Secondary2]: '#7AC7C4',
            ['$' + Color.White]: '#fff',
        },
        fonts: {
            $light: 'raleway',
            $normal: 'raleway',
        },
        fontWeights: {
            $light: '300',
            $normal: '400',
        },
        lineHeights: {
            $light: '1.333',
            $normal: '1.333',
        },
        radii: {
            $default: '4',
        },
        shadows: {
            $card: '0 0 4px rgba(0, 0, 0, .125)',
        },
        fontSizes: {
            $helperText: '1rem',
            $paragraph: '1.333rem',
            $headline5: '1.777rem',
            $headline4: '2.369rem',
            $headline3: '3.157rem',
            $headline2: '4.209rem',
            $headline1: '5.61rem',
        },
        space: {
            $extraSmall: '4px',
            $small: '8px',
            $medium: '16px',
            $large: '32px',
            $extraLarge: '64px',
            $ultraLarge: '128px',
        },
    },
    breakpoints: {
        tablet: rule => `@media (min-width: 768px) { ${rule} }`,
        desktop: rule => `@media (min-width: 1024px) { ${rule} }`,
    },
    utils: {},
});
