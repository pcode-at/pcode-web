import React from "react";
import { Button } from "rebass";
type TActionButtonProps = {
  colorBright: boolean;
  label: string;
};

export const ActionButton: React.FC<TActionButtonProps> = ({
  colorBright,
  label
}) => {
  // write some code

  return (
    <div>
      <Button className="buttonClass">{label}</Button>

      <style jsx>{`
        .buttonClass {
          background: ${colorBright ? "green" : "orange"};
        }
      `}</style>
    </div>
  );
};
