import gray from "gray-percentage";

const backgroundDark = `#202020`;
const brightBlue = `#268bd2`;
const brightBlue30 = `hsla(208, 30%, 64%, 0.3)`;

export default {
  text: `#515151`,
  background: `#fff`,
  altBackground: backgroundDark,
  altText: gray(90, 0, true),
  altDisplay: `#9a9a9a`,
  primary: brightBlue,
  link: brightBlue,
  secondary: backgroundDark,
  muted: `#9a9a9a`,
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
    red: {
      altBackground: `#ac4142`,
      altDisplay: `#290b0b`,
      link: `#ac4142`
    },
    orange: {
      altBackground: `#AE5D1D`,
      altText: `#fff`,
      altDisplay: `#130901`,
      link: `#AE5D1D`
    },
    yellow: {
      altBackground: `#f4bf75`,
      altText: `#44443f`,
      altDisplay: `#44443f`,
      link: `#946a2f`
    },
    green: {
      altBackground: `#69774A`,
      altDisplay: gray(5, 0),
      altText: `#f9f9f9`,
      link: `#69774A`
    },
    blue: {
      altBackground: `#5862B5`,
      altDisplay: gray(5),
      link: `#5862B5`
    },
    purple: {
      altBackground: `#916387`,
      link: `#916387`,
      altDisplay: gray(0)
    },
    brown: {
      altBackground: `#8f5536`,
      link: `#8f5536`,
      altDisplay: `#000000`
    }
  }
};
