import { Color } from "./Color.enum";

export const theme = {
  colors: {
    [Color.Primary]: "#F73859",
    [Color.Secondary]: "#263958",
    [Color.Secondary2]: "#7AC7C4",
    [Color.White]: "#fff"
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
