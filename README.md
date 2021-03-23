# pcode-web

## Getting started

1. Install dependencies:

```

yarn install

```

2. Run website

```

yarn dev

```

## Environment

It is recommend to use [Visual Studio Code](https://code.visualstudio.com/).

Using these extensions is recommended for great developer experience:

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

-   [Spellchecking](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - prevents typos

-   [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

-   For TODOs:

-   [Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)

-   [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)

## Design Tokens
Further details about  out naming conventions and token structure can be found in [DESIGNTOKENS.md](DESIGNTOKENS.md). 
### Design Options

The design options are defined in [stitches.config.ts](stitches.config.ts). Here you find design-based variables defining which values we are allowed to use. 

e.g. allowed font sizes:

    fontSizes: {   
        $xs: '12px',  
        $s: '14px',   
        $m: '16px',   
        $l: '24px',   
        $xl: '36px',    
        $xxl: '54px'    
    },

or a section of the colors: 

    colors: {    
        $grey500: '#3B3734',  
        $turquoise500: '#42E8E0',   
        $lilac500: '#C5C5FF',   
        $cherry500: '#CC0C00',    
        $white: '#FFFFFF',  
    },

### Design Decisions
Based on the available options we can now make _decisions_ about how and where we use certain tokens. These decisions are defined in [theme.ts](theme.ts). This way we can ensure that the components match the design and further prevent the usage of magic numbers etc. 

e.g. we define, that the option `$cherry500` is used applied in _alert_-scenarios: 

    Color: {   
        Alert: '$cherry500',    
    },

another example is the `Button`-component. Via theme.ts we're able to define, that a `Button`-component has a specified border-radius. 

Within `stitches.config.ts` we defined the possible radii values:   

    radii: {   
        $none: '0px',   
        $rounded: '5px',    
        $circle: '100px'    
    },

Within `theme.ts` we define, that a `Button` has only one border-radius option: 

    Button: {    
        Border: {   
            //** .. */  
            Radius: '$circle',  
        },  

Within `Button.tsx` we can now define that the component has the pre-defined radius `theme.Button.Border.Radius`:   

    export const Button = styled('button', {   
        borderRadius:   theme.Button.Border.Radius,   
        //** .. */  
    });

## Stitches
The [`Stitches` library](https://stitches.dev/docs/installation) enables the simple usage of variants within components using said design tokens. 

    variants: {  
      color: {  
          primary: {  
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
          //** .. */  
          secondary: {  
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
          //** .. */  
      },
    }

By defining the variants and their properties, you can easily decide which color the `Button`-component should have. 

    <Button color={'primary'}>Primary Button</Button> 
    <Button 
      color={'secondary'} 
      disabled={true}
    >
    Secondary Inactive Button
    </Button>

## Styling and layouting conventions

To keep working on the pcode-web project as easy and straight forward as possible we came up with styling and layouting conventions:

In general we group our components in **presentational components** and **layout components**. When creating layout components please use `layout` as a suffix for the component you create, e.g. `CopyTextLayout`.

**Presentational components** are _components that show something_. They must not be layouted directly and they take all the place, that their parent component gives them - that means a presentational component always has 100% of it's parent's height and width by default.

Presentational components can nevertheless be styled (e.g. background-color, border, etc).

Presentational components:

-   deal with visual design,
-   contain no application logic,
-   set no `display` or positioning properties,
-   are (mostly) just decorated HTML elements,
-   should be size agnostic.

**Layout components** are components that define the layout of 1..n included components.

Layout properties such as height, width, margins and paddings may be set in the layout component.

Layout components can include several presentational and also layout components. That means a layout component can be included by another layout component - but make sure, that it should be avoided to leave an empty layout component.

Layout components:

-   own responsibility for layout and nothing more
-   should never apply any presentational styles
-   should not contain any application logic
-   own responsibility for the layout of child items.

E.g. how to give a 50% margin-top and margin-bottom to the `Statement`-component?

```

const StatementLayout = styled(Box)`
    margin-top: 50px;
    margin-bottom: 50px;
`;

<StatementLayout>
    <Statement
        personName={'Christoph Pernsteiner'}
        personPosition={'CEO .founder'}
        imagePath={'../static/pernsteiner_christoph.png'}
    >
        ‘ it would have been impossible to build such a complicated project
        without the skills of the pcode team. ’
    </Statement>
</StatementLayout>;

```

[Here](https://www.madebymike.com.au/writing/css-architecture-for-modern-web-applications/) you can read more about, why we decided to use this conventions

### Sections

When the pages are about to be built together we use section components to group 2..n components, that build a logical and optical section together. An example would be the footer area, that includes a contact form on every page, or the work-at-pcode section [WorkingAtPcodeSection](pages/join-us/sections/WorkingAtPcode.section.tsx).

### theme.ts

Please look at the [theme.ts file](theme.ts), where for example page breakpoints (e.g. used for seperating between mobile and desktop), or spacings are defined. Please do not define hard margins like 15rem - instead use \${theme.space[2]} to use a predefined space. This step unifies the appearance of the website due to increased styling consistency.

## Create a component

You can go to the [ProjectDetailTeaser](components/ProjectDetailTeaser.tsx) component to see how a component is built. Here is the code:

```

import React from 'react';

type TProjectDetailTeaserProps = {
    headline: string;
    description: string;
    imageSrc: string;
    pcodeShapeBackground: boolean;
};

export const ProjectDetailTeaser: React.FC<TProjectDetailTeaserProps> = ({
    headline,
    description,
    imageSrc,
    pcodeShapeBackground,
}) => {
    // write some code

    return (
        <div className="pcode-shape-background">
            <h1>{headline}</h1>
            <p>{description}</p>
            <img src={imageSrc} />
            <style jsx>{`
                .pcode-shape-background {
                    background: ${pcodeShapeBackground
                        ? 'green'
                        : 'transparent'};
                }
            `}</style>
        </div>
    );
};
```

**Important**: Each component has to be created in the [components/](components/) folder.

## Prettier setup

Prettier, as the name says, keeps your code pretty and well-formatted.

-   Visual Studio Code: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Use it with `CMD/CTRL + Shift + P`

-   Webstorm: No Extension needed. Just use `Alt-Shift-Ctrl-P` on Windows and Linux, or `Alt-Shift-Cmd-P`on MAC OS
