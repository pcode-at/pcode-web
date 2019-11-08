import React from "react";
// @ts-ignore
import PcodeShapeSvg from "../assets/pcode_shape.svg?sprite";

type TPcodeShape = {
  width: string;
  color: string;
};

export const PcodeShape: React.FC<TPcodeShape> = ({
  width = "200px",
  color = "#111111"
}) => {
  return (
    <React.Fragment>
      <PcodeShapeSvg
        style={{ color: color, width: width }}
        className="pcode-shape"
      />
    </React.Fragment>
  );
};
