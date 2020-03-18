import { Color } from './Color.enum';

const theme = {
    breakpoints: ['768px'],
    fontSizes: [11],
    space: ['3px', '10px' ,'15px', '20px', '40px','50px'],
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
        },
        normal: {
            fontFamily: 'raleway',
            fontWeight: 400,
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
};

export { theme };
