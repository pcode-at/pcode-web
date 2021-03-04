import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
    prefix: '',
    tokens: {
        colors: {
            // accent colors            
            $grey: '#3B3734',
            $turquoise: '#42E8E0',
            $lilac: '#C5C5FF',
            
            // alert
            $red: '#CC0C00',
            $alert: '$red',

            $white: '#FFFFFF',

            // tertiary
            $green: '#7AC7C4',
            $tertiaryDefault: '$green',

            // secondary
            $blue35: '#263958',
            $blue50: '#375380',
            $blue60: '#7A8699',

            $secondaryDefault: '$blue35',
            $secondaryHover: '$blue50',
            $secondaryInactive: '$blue60',

            // primary
            $red77: '#F73859',
            $red60: '#F7637C',
            $red30: '#F7ADBA',

            $primaryDefault: '$red77',
            $primaryHover: '$red60',
            $primaryInactive: '$red30'

        },
        space: {
            $xxs: '4px',
            $xs: '8px',
            $s: '16px',
            $m: '24px',
            $l: '36px',
            $xl: '40px',
            $xxl: '56px',
            $3xl: '64px',
            $4xl: '72px',
            $5xl: '80px'
        },
        fontSizes: {
            $xs: '12px',
            $s: '14px',
            $m: '16px',
            $l: '24px',
            $xl: '36px',
            $xxl: '54px'  
        },
        fontWeights: {
            $light: '300',
            $regular: '400',
            $medium: '500',
            $semibold: '600',
            $bold: '700'
        },
        fonts: {
            $default: 'raleway'
        },
        letterSpacings: {
            $tight: '-0.3rem',
            $wide: '0.6rem'
        },
        borderWidths: {
            $regular: '1px',
            $medium: '2px'
        },
        radii: {
            $none: '0px',
            $rounded: '5px',
            $circle: '100px'
        },
        shadows: {
            $regular: '0px 4px 16px rgba(0, 0, 0, 0.15)',
            $heavy: '0px 16px 24px rgba(0, 0, 0, 0.15)'
        },
        lineHeights: {
            $s: '16px',
            $m: '24px',
            $l: '32px',
            $xl: '40',
            $xxl: '64px',
        },
        zIndices: {
            $regular: '0',
            $higher: '10',
            $highest: '20', 
            $focus: '30',
            $top: '1000'
        }
    },
    breakpoints: {},
    utils: {},
});