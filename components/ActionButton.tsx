import React from "react";
import { Button } from "rebass";

import { theme } from "../theme";
import { Color } from "../Color.enum";
import { CopyText } from "./CopyText";

type TActionButtonProps = {
  thisColor?: Color;
  label: string;
  padding?: string;
  noBackground?: boolean;
  onClick?(): void;
};

export const ActionButton: React.FC<TActionButtonProps> = ({
  thisColor = Color.Primary,
  label,
  onClick,
  padding = "0.2rem 2.8rem",
  noBackground = false
}) => {
  return (
    <Button
      backgroundColor={noBackground ? "transparent" : theme.colors[thisColor]}
      onClick={onClick}
      style={{
        padding,
        borderRadius: "15px",
        cursor: "pointer"
      }}
    >
      <CopyText color={Color.White}>{label}</CopyText>
    </Button>
  );
};
