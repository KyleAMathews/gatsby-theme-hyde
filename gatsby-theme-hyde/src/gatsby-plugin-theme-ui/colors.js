import gray from "gray-percentage";

const brightRed = `#D94B18`;
const brightYellow = `#F2B705`;
const darkBlue = `#0B2559`;
const brightBlue = `#88A5BF`;
const brightBlue30 = `hsla(208, 30%, 64%, 0.3)`;

export default {
  text: gray(10),
  background: `#fff`,
  primary: brightRed,
  secondary: darkBlue,
  muted: brightYellow,
  highlight: brightBlue30,
  prism: {
    background: gray(96),
    comment: `#7D8B99`,
    string: `#2f9c0a`,
    var: `#a67f59`,
    number: `#c92c2c`,
    constant: `#2f9c0a`,
    punctuation: `#5F6364`,
    className: `#1990b8`,
    tag: `#1990b8`,
    boolean: `#c92c2c`,
    property: `#c92c2c`,
    namespace: `#c92c2c`
  },
  modes: {
    dark: {
      text: `#fff`,
      background: gray(15),
      primary: `#f55921`,
      highlight: `hsla(208, 30%, 64%, 0.15)`,
      prism: {
        background: gray(5)
      },
      secondary: `#88A5BF`
    }
  }
};
