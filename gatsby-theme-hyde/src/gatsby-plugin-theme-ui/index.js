import merge from "deepmerge";
import typography from "./typography";
import colors from "./colors";
import styles from "./styles";
import prism from "./prism";

export default merge.all([
  {},
  typography,
  {
    initialColorMode: `gray`,
    // Enable custom properties
    // to help avoid a flash of colors on page load
    useCustomProperties: true,
    colors,
    fonts: {
      monospace: `"SFMono-Regular", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace`,
      stylized: `"Abril Fatface", serif`
    },
    sizes: {
      mobileSidebar: typography.typography.rhythm(11),
      sidebar: typography.typography.rhythm(12),
      container: typography.typography.rhythm(26)
    },
    textStyles: {
      display: {
        fontSize: `25px`,
        lineHeight: `38px`,
        color: `muted`
      },
      subtleLink: {
        color: `altText`,
        "&, &:active, &:visited": {
          color: `altText`
        },
        ":hover": {
          textDecoration: `underline`
        },
        textDecoration: `none`
      }
    },
    styles,
    prism
  }
]);
