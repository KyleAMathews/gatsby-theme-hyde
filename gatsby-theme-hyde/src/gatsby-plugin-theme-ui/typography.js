import "typeface-pt-sans";
import "typeface-abril-fatface";
import { toTheme } from "@theme-ui/typography";

let theme = {
  baseFontSize: `18px`,
  scaleRatio: 2.75,
  headerFontFamily: [`PT Sans`, `sans-serif`],
  bodyFontFamily: [`PT Sans`, `sans-serif`],
  baseLineHeight: 1.5,
  blockMarginBottom: 0.8
};

export default toTheme(theme);
