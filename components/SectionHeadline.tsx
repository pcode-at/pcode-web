import React from "react";
import { Color } from "../Color.enum";
import { Text } from "rebass";

type TSectionHeadlineProps = {
  color: Color;
  headlinePartOne: string;
  headlinePartTwo: string;
  separateWithBreak?: boolean;
};

export const SectionHeadline: React.FC<TSectionHeadlineProps> = ({
  headlinePartOne,
  headlinePartTwo,
  color,
  separateWithBreak = false
}) => {
  const defaultProps = {
    color,
    fontFamily: "raleway",
    display: "inline",
    fontSize: "1.4rem"
  };

  return (
    <React.Fragment>
      <Text {...defaultProps} fontWeight={500}>
        {headlinePartOne}
      </Text>
      &nbsp;
      {separateWithBreak && <br />}
      <Text {...defaultProps} fontWeight={300}>
        {headlinePartTwo}
      </Text>
    </React.Fragment>
  );
};
