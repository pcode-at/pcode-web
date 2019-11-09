import React from "react";
import { Button } from "rebass";

import { theme } from "../theme";
import { Color } from "../Color.enum";

type TActionButtonProps = {
  thisColor: Color;
  label: string;
  clickFunction: () => void;
};

export const ActionButton: React.FC<TActionButtonProps> = ({
  thisColor,
  label,
  clickFunction
}) => {
  console.log(thisColor);

  return (
    <span>
      <Button
        backgroundColor={theme.colors[thisColor]}
        onClick={clickFunction}
        style={{
          borderRadius: "15px",
          marginRight: "5px",
          marginLeft: "5px"
        }}
      >
        {label}
      </Button>
    </span>
  );
};
