import React from "react";

import { Color } from "../Color.enum";
import { ActionButton } from "./ActionButton";
import { SectionHeadline } from "./SectionHeadline";
import { PcodeShape } from "./PcodeShape";
import { Flex } from "rebass";

type TSwiperProps = {
  color?: Color;
  textPartOne: string;
  textPartTwo: string;
};

export const Swiper: React.FC<TSwiperProps> = ({
  textPartOne,
  textPartTwo,
  color = Color.Secondary
}) => {
  return (
    <React.Fragment>
      <Flex alignItems="center" justifyContent="space-between" padding="0 2rem">
        <div className="text-button-wrapper">
          <div className="text-wrapper">
            <SectionHeadline
              color={color}
              headlinePartOne={textPartOne}
              headlinePartTwo={textPartTwo}
              separateWithBreak={true}
            />
          </div>
          <ActionButton
            thisColor={Color.Secondary2}
            padding="0.2rem 1.7rem"
            label="learn more"
          />
        </div>

        <PcodeShape width="150" />
      </Flex>

      <style jsx>{`
        .text-button-wrapper {
          width: 300px;
        }
        .text-wrapper {
          margin-bottom: 0.7rem;
        }
        .wrapper {
          padding: 1em;
        }
      `}</style>
    </React.Fragment>
  );
};
