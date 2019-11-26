import React from "react";
import { Color } from "../Color.enum";
import { Text } from "rebass";

type TSubHeadlineProps = {
  color: Color;
};

export const SubHeadline: React.FC<TSubHeadlineProps> = ({
  children,
  color
}) => {
  // write some code

  return (
    <Text color={color} fontFamily="raleway" fontWeight={500}>
      {children}
    </Text>
  );
};
