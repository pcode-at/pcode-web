import React from "react";
import { Color } from "../Color.enum";
import { Text } from "rebass";

type TSectionHeadlineProps = {
  color: Color;
  headlinePartOne: string;
  headlinePartTwo: string;
};

export const SectionHeadline: React.FC<TSectionHeadlineProps> = ({
  headlinePartOne,
  headlinePartTwo,
  color
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
      <Text {...defaultProps} fontWeight={300}>
        {headlinePartTwo}
      </Text>
    </React.Fragment>
  );
};
