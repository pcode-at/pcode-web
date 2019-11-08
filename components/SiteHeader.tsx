import React from "react";
import Headroom from "react-headroom";
import { borderRadius, marginRight } from "styled-system";

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
          color: "black",
          backgroundColor: "white"
        }}
      >
        {headline}
      </div>
    </Headroom>
  );
};
