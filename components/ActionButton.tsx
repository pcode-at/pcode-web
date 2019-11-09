import React from "react";
import { Button } from "rebass";

import { theme } from "../theme";
import { Color } from "../Color.enum";

type TActionButtonProps = {
  thisColor: Color;
  label: string;
  onClick?(): void;
};

export const ActionButton: React.FC<TActionButtonProps> = ({
  thisColor,
  label,
  onClick
}) => {
  return (
    <span>
      <Button
        backgroundColor={theme.colors[thisColor]}
        onClick={onClick}
        style={{
          borderRadius: "15px"
        }}
      >
        {label}
      </Button>
    </span>
  );
};
