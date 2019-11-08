import React from "react";
import { Button } from "rebass";
import { CONSTANTS } from "../constants";
import { border, marginRight } from "styled-system";

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

  if (colorTest == "red") {
    finalColor = CONSTANTS.colors.red;
  }

  if (colorTest == "lightblue") {
    finalColor = CONSTANTS.colors.lightBlue;
  }

  if (colorTest == "darkblue") {
    finalColor = CONSTANTS.colors.darkBlue;
  }

  return (
    <span>
      <Button
        className="buttonSetup"
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

      <style jsx>{`
        .buttonSetup {
          border: 5px solid green;
        }
      `}</style>
    </span>
  );
};
