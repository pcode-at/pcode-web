# pcode-web

## Getting started
1. Install dependencies:
```
yarn install
```

## Environment
It is recommend to use [Visual Studio Code](https://code.visualstudio.com/).

Using these extensions is recommended for great developer experience:
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [StyledJsx Plugin](https://marketplace.visualstudio.com/items?itemName=AndrewRazumovsky.vscode-styled-jsx-languageserver)
- [Spellchecking](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - prevents typos
- [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
- For TODOs:
  - [Highlight](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight)
  - [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree)


2. Start developing
```
yarn dev
```

## Create a component
You can go to the [ProjectDetailTeaser](components/ProjectDetailTeaser.tsx) component to see how a component is built. Here is the code:
```
import React from "react";

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
  pcodeShapeBackground
}) => {
  // write some code

  return (
    <div className="pcode-shape-background">
      <h1>{headline}</h1>
      <p>{description}</p>
      <img src={imageSrc} />

      <style jsx>{`
        .pcode-shape-background {
          background: ${pcodeShapeBackground ? "green" : "transparent"};
        }
      `}</style>
    </div>
  );
};

```
**Important**: Each component has to be created in the [components/](components/) folder.
