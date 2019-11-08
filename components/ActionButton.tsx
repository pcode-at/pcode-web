import React from "react";
import { Button } from "rebass";
import { CONSTANTS } from "../constants";
import { border, marginRight } from "styled-system";

type TActionButtonProps = {
  thisColor: string;
  label: string;
};

export const ActionButton: React.FC<TActionButtonProps> = ({
  thisColor,
  label
}) => {
  var finalColor = "orange";
  var colorTest = thisColor.toLowerCase();

  if (colorTest == "red") {
    var finalColor = CONSTANTS.colors.red;
  }

  if (colorTest == "lightblue") {
    var finalColor = CONSTANTS.colors.lightBlue;
  }

  if (colorTest == "darkblue") {
    var finalColor = CONSTANTS.colors.darkBlue;
  }

  return (
    <span>
      <Button
        className="buttonSetup"
        backgroundColor={finalColor}
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
