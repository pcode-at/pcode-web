import { DeprecatedColor } from './DeprecatedColor.enum';
import React from "react";

export const themeDeprecated = {

  colors: {
    [DeprecatedColor.Primary]: "#F73859",
    [DeprecatedColor.SecondaryDark]: "#263958",
    [DeprecatedColor.SecondaryLight]: "#7AC7C4",
    [DeprecatedColor.White]: "#fff"
  },
  font: {
    light: {
      fontFamily:"raleway",
      fontWeight: 300
    },
    normal: {
      fontFamily:"raleway",
      fontWeight: 400
    }
  },
  radii: {
    default: 4
  },
  shadows: {
    card: "0 0 4px rgba(0, 0, 0, .125)"
  },
  variants: {
    card: {
      p: 3,
      borderRadius: "default",
      bg: "white",
      boxShadow: "card"
    },
    badge: {
      color: "white",
      bg: "primary",
      p: 1,
      borderRadius: "default"
    }
  }
};
