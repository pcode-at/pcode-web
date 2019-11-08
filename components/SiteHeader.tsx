import React from "react";
import Headroom from "react-headroom";
import { borderRadius, marginRight } from "styled-system";

type TSiteHeaderProps = {
  headline: string;
};

export const SiteHeader: React.FC<TSiteHeaderProps> = ({ headline }) => {
  // write some code

  return (
    <Headroom
      onPin={() => console.log("pinned")}
      onUnpin={() => console.log("unpinned")}
      onUnfix={() => console.log("unfix")}
    >
      <div
        style={{
          margin: 0,
          paddingLeft: "1em",
          paddingRight: "1em",
          color: "black",
          backgroundColor: "white"
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "1em"
          }}
        >
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>

          <style jsx>{`
            .burger-bar {
              width: 2em;
              height: 1px;
              background-color: black;
              margin: 0.23em 0;
            }
          `}</style>
        </div>

        {headline}
      </div>
    </Headroom>
  );
};
