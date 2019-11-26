import React from "react";
import { Button } from "rebass";

import { theme } from "../theme";
import { Color } from "../Color.enum";
import { CopyText } from "./CopyText";

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
    <Button
      backgroundColor={theme.colors[thisColor]}
      onClick={onClick}
      style={{
        borderRadius: "15px",
        padding: "0.2rem 2.5rem",
        cursor: "pointer"
      }}
    >
      <CopyText color={Color.White}>{label}</CopyText>
    </Button>
  );
};
