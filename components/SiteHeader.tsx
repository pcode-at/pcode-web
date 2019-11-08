import React from "react";
import Headroom from "react-headroom";
import { borderRadius, marginRight } from "styled-system";
import { CONSTANTS } from "../constants";

type TSiteHeaderProps = {
  headline: string;
};

export const SiteHeader: React.FC<TSiteHeaderProps> = ({ headline }) => {
  // write some code

  return (
    <Headroom>
      <div
        style={{
          margin: 0,
          paddingLeft: "1em",
          paddingRight: "1em",
          height: "50px",
          backgroundColor: CONSTANTS.colors.lightBlue,
          color: "black"
        }}
      >
        <h1 style={{ marginTop: "0px", lineHeight: "50px" }}>{headline}</h1>
      </div>
    </Headroom>
  );
};
