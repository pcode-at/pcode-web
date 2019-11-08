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
          <div className="burger-bar-1"></div>
          <div className="burger-bar-2"></div>

          <style jsx>{`
            .burger-bar-1 {
              width: 2em;
              height: 0.1em;
              background-color: black;
              margin: 0.6em 0 0.23em 0;
              border-radius: 0.05em;
            }

            .burger-bar-2 {
              width: 2em;
              height: 0.1em;
              background-color: black;
              margin: 0.23em 0;
              border-radius: 0.05em;
            }
          `}</style>
        </div>

        {headline}
      </div>
    </Headroom>
  );
};
