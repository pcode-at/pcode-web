import React from "react";
import Headroom from "react-headroom";
import { theme } from "../theme";
import { Color } from "../Color.enum";

type TSiteHeaderProps = {
  headline: string;
  thisColor: Color;
};

export const SiteHeader: React.FC<TSiteHeaderProps> = ({
  headline,
  thisColor
}) => {
  // write some code

  return (
    <Headroom>
      <div
        style={{
          margin: 0,
          paddingLeft: "1em",
          paddingRight: "1em",
          height: "50px",
          backgroundColor: theme.colors[thisColor],
          color: "black"
        }}
      >
        <h1 style={{ marginTop: "0px", lineHeight: "50px" }}>{headline}</h1>
      </div>
    </Headroom>
  );
};
