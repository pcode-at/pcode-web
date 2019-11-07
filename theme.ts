export const theme = {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    secondary: "red"
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
