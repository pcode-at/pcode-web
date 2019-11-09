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
  fonts: {
    body: "Raleway"
  },
  styles: {
    p: {
      color: Color.Primary,
      fontFamily: "body"
    }
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

import gray from "gray-percentage";

export const typoStandardDesignTheme = {
  colors: {
    [Color.Primary]: "#F73859",
    [Color.Secondary]: "#263958",
    [Color.Secondary2]: "#7AC7C4",
    [Color.White]: "#fff"
  },
  title: "US Web Design Standards",
  baseFontSize: "17px",
  baseLineHeight: 1.53,
  scale: 2.35,
  googleFonts: [
    {
      name: "Raleway",
      styles: ["700", "500", "300"]
    },
    {
      name: "Raleway",
      styles: ["400", "400i", "700"]
    }
  ],
  headerFontFamily: ["Raleway"],
  bodyFontFamily: ["Raleway"],
  bodyColor: "hsla(0,0%,0%,0.8)",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    h1: scale(5 / 5),
    h2: scale(3 / 5),
    h3: scale(1 / 5),
    h4: scale(0 / 5),
    h5: scale(-1 / 8),
    p: scale(5 / 5),
    h6: {
      ...scale(-2 / 8),
      fontFamily: options.bodyFontFamily.join(","),
      fontWeight: options.bodyWeight,
      textTransform: "uppercase"
    },
    a: {
      color: "#0071bc"
    },
    "a:visited": {
      color: "#4c2c92"
    },
    blockquote: {
      ...scale(1 / 4),
      borderLeft: `${rhythm(1 / 6)} solid`,
      borderColor: gray(93),
      paddingTop: rhythm(1 / 3),
      paddingBottom: rhythm(1 / 3),
      paddingLeft: rhythm(2 / 3),
      paddingRight: rhythm(2 / 3)
    },
    "blockquote > :last-child": {
      marginBottom: 0
    },
    "blockquote cite": {
      ...adjustFontSizeTo(options.baseFontSize),
      color: gray(54, 204),
      fontWeight: options.bodyWeight,
      fontStyle: "normal"
    }
  })
};

export const robotoTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: "Roboto, system-ui, sans-serif",
    heading: "Roboto, system-ui, sans-serif",
    monospace: '"Roboto Mono", monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: "#202124",
    background: "#fff",
    primary: "#1a73e8",
    secondary: "#9c27b0",
    muted: "#f1f3f4"
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body"
    },
    a: {
      color: "primary"
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit"
      }
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit"
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid"
    },
    img: {
      maxWidth: "100%"
    }
  }
};

// {
// "space": [
//   0,
//   4,
//   8,
//   16,
//   32,
//   64,
//   128,
//   256,
//   512
// ],
// "fonts": {
//   "body": "Roboto, system-ui, sans-serif",
//   "heading": "Roboto, system-ui, sans-serif",
//   "monospace": "\"Roboto Mono\", monospace"
// },
// "fontSizes": [
//   12,
//   14,
//   16,
//   20,
//   24,
//   32,
//   48,
//   64,
//   96
// ],
// "fontWeights": {
//   "body": 400,
//   "heading": 600,
//   "bold": 600
// },
// "lineHeights": {
//   "body": 1.5,
//   "heading": 1.125
// },
// "colors": {
//   "text": "#202124",
//   "background": "#fff",
//   "primary": "#1a73e8",
//   "secondary": "#9c27b0",
//   "muted": "#f1f3f4"
// },
// "styles": {
//   "root": {
// "fontFamily": "body",
// "lineHeight": "body",
// "fontWeight": "body"
//   },
//   "h1": {
// "color": "text",
// "fontFamily": "heading",
// "lineHeight": "heading",
// "fontWeight": "heading",
// "fontSize": 5
//   },
//   "h2": {
// "color": "text",
// "fontFamily": "heading",
// "lineHeight": "heading",
// "fontWeight": "heading",
// "fontSize": 4
//   },
//   "h3": {
// "color": "text",
// "fontFamily": "heading",
// "lineHeight": "heading",
// "fontWeight": "heading",
// "fontSize": 3
//   },
//   "h4": {
// "color": "text",
// "fontFamily": "heading",
// "lineHeight": "heading",
// "fontWeight": "heading",
// "fontSize": 2
//   },
//   "h5": {
// "color": "text",
// "fontFamily": "heading",
// "lineHeight": "heading",
// "fontWeight": "heading",
// "fontSize": 1
//   },
//   "h6": {
// "color": "text",
// "fontFamily": "heading",
// "lineHeight": "heading",
// "fontWeight": "heading",
// "fontSize": 0
//   },
//   "p": {
// "color": "text",
// "fontFamily": "body",
// "fontWeight": "body",
// "lineHeight": "body"
//   },
//   "a": {
// "color": "primary"
//   },
//   "pre": {
// "fontFamily": "monospace",
// "overflowX": "auto",
// "code": {
//   "color": "inherit"
// }
//   },
//   "code": {
// "fontFamily": "monospace",
// "fontSize": "inherit"
//   },
//   "table": {
// "width": "100%",
// "borderCollapse": "separate",
// "borderSpacing": 0
//   },
//   "th": {
// "textAlign": "left",
// "borderBottomStyle": "solid"
//   },
//   "td": {
// "textAlign": "left",
// "borderBottomStyle": "solid"
//   },
//   "img": {
// "maxWidth": "100%"
//   }
// }
//   }
