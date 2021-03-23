# Design Tokens
## Options 
* definition of tokens is located in stitches.config.ts     
* 14 pre-defined token types    
* naming of the options/choices based on what they are, not what they do (@see [`Choices`](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab))
* consider reasonable scaling 
* later design decisions are based upon the available options 

### Scaling 
#### Clothing Size 
* naming based on clothing sizes
    - `$xxs`, `$xs`, `$s`, `$m`, `$l`, ..
* the mid-value/the most common value is used as $m 
* if the sizing contains three or more `x`, you abbreviate it numerically
    - `$3xl`, `$4xl`, ..
* useful for a wide scale of options 

#### Weighting
* e.g. for 
* `$light` -> `$regular` -> `$medium`
    * when using in the context of font: `$semibold` -> `$bold`
    * otherwise: `$heavy` -> .. 

#### Looseness 
* horizontal spacing, e.g. letterSpacings 
* `$tight` -> `$regular` -> `$wide` 

#### Roundness
* degree of roundness, e.g. radii
* `$none` -> `$rounded` -> `$circle` 

#### Level of Height 
* vertical spacing, e.g. zIndices
* `$regular` -> `$higher` -> `$highest` -> `$focus` -> `$top` 

#### Colors
* use as few 'base' colors as possible 
* the 'base' of a color is numbered with the value `500` 
* variations are numbered regarding wether they are lighter or darker than the base color
    - lighter -> lower number
    - darker -> higher number 
    - steps are usually +/-100  
* colors, which do not have any variations, are numbered too
    - exceptions: e.g. white

### Naming in the current project 

## Decisions 
* decisions are build by several building blocks 
* the usage of the building blocks and their order may vary, but has to be defined 
* definitions are located in `theme.ts`  

### Building Blocks 
* 4 categories, each containing 3-4 building blocks 
* the `marked` building blocks are actually used in this project
#### Namespace
* system: e.g. pcds (pcode-design-system)
* theme
* domain
#### Object
* group
* `component`: e.g. ContactForm, Bubble, Statement, Footer, ..
* `element`: e.g. Button, Text, Image, .. // components, which are used as sub-components within others
#### Base 
* `category`: e.g. Background, Color, Font, ..
* concept
* `property`: e.g. Color, Size, Family, Weight, ..  
#### Modifier
* `variant`: e.g. primary, main, ..
* `state`: e.g. default, hover, disabled, ..
* `scale`: e.g. s, m, l, .. 
* mode: e.g. light, dark, ..

### Examples
#### Button 
A simple component which is often reused in other components.   

    Button: { // component
        Border: { // category
            Width: '$default', // property 
            Radius: '$circle', 
        },
        Font: { // category
            Weight: '$regular', // property
            Size: '$s', 
        },
        LineHeight: '$s', // category
        Padding: '16px 24px', 
        BoxShadow: '$regular',
    },

#### ContactForm

    ContactForm: { // component
        Height: '473px', // property
        Width: '580px',  // property
        Input: { // element
            Width: '580px', // property
            Height: { // property
                Small: '40px', // variant
                Large: '201px' // variant
            },
            Border: { // category
                Color: { // property
                    Default: '$green500', // state
                    Alert: '$cherry500',  // state
                },
                Width: '$medium',   // property
                Radius: '$rounded', // property
            },
        },
        Button: { // element
            Font: { // category
                Color: '$white', // property
                Family: '$default',
                Weight: '$regular',
                Size: '$s',
            },
            Background: { // category
                Color: { // property
                    Default: '$red500', // state 
                    Hover: '$red300',
                    Inactive: '$red100',
                }
            },
            Border: { // category
                Width: '$default', // property
                Radius: '$circle', 
            },
        }
    },

## Literature

* [Stitches Documentation: Tokens](https://stitches.dev/docs/tokens)
* [Design tokens — What are they & how will they help you?](https://lukasoppermann.medium.com/design-tokens-what-are-they-how-will-they-help-you-b73f80f602ab)
* [Tokens in Design Systems](https://medium.com/eightshapes-llc/tokens-in-design-systems-25dd82d58421)
* [Naming Tokens in Design Systems](https://medium.com/eightshapes-llc/naming-tokens-in-design-systems-9e86c7444676)
* [Kalo UI Kit: Design Tokens](https://kalo.design/foundations/design-tokens/)
* [Size in Design Systems](https://medium.com/eightshapes-llc/size-in-design-systems-64f234aec519)