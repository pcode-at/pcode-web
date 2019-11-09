import React from "react";
import { Button } from "rebass";
import { theme } from "../theme";

type TActionButtonProps = {
  thisColor: string;
  label: string;
  clickFunction: () => void;
};

export const ActionButton: React.FC<TActionButtonProps> = ({
  thisColor,
  label,
  clickFunction
}) => {
  var finalColor = "orange";
  var colorTest = thisColor.toLowerCase();

  if (colorTest == "primary") {
    finalColor = theme.colors.primary;
  }

  if (colorTest == "secondary") {
    finalColor = theme.colors.secondary;
  }

  return (
    <span>
      <Button
        backgroundColor={finalColor}
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
