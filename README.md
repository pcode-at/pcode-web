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

## Styled Components

In this project we don't use inline styling in order to keep the html code clean from confusinc styles. Check out the [website of styled-components](https://styled-components.com/) to learn more about this way to style your components.

Standard html tags may be styled e.g.

```

const StyledHeaderDiv = styled.div`

border-width: 3px;

`;

```

You can also style Rebass, or custom made components e.g.

```

const StyledButton = styled(Button)`

border-radius: 10px;

`;

```

Please use styled-components for all components.

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
    description,

    headline,

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
