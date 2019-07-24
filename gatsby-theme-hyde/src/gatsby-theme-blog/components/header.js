import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { css, useColorMode, Styled } from "theme-ui";
import Switch from "gatsby-theme-blog/src/components/switch";
import Bio from "gatsby-theme-blog/src/components/bio";
import sun from "gatsby-theme-blog/assets/sun.png";
import moon from "gatsby-theme-blog/assets/moon.png";

const Title = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Styled.h1
      css={css({
        fontFamily: `stylized`,
        mb: 0,
        fontSize: 5,
        color: `altText`
      })}
    >
      <Styled.a
        as={Link}
        css={css({
          color: `altText`,
          "&, &:active, &:visited": {
            color: `altText`
          },
          boxShadow: `none`,
          textDecoration: `none`
        })}
        to={`/`}
      >
        {data.site.siteMetadata.title}
      </Styled.a>
    </Styled.h1>
  );
};

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: `none`,
      margin: 4
    }}
  />
);
const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={{
      pointerEvents: `none`,
      margin: 4
    }}
  />
);
export default () => {
  const [colorMode, setColorMode] = useColorMode();
  const modes = [
    `light`,
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `blue`,
    `purple`,
    `brown`
  ];

  const toggleColorMode = e => {
    const index = modes.indexOf(colorMode);
    let nextItem;
    if (index >= 0 && index < modes.length - 1) {
      nextItem = modes[index + 1];
    } else {
      nextItem = modes[0];
    }
    setColorMode(nextItem);
  };

  return (
    <header>
      <div
        css={css({
          position: [`initial`, `absolute`],
          right: 0,
          left: 0,
          bottom: 0,
          p: 4
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `baseline`,
            mb: 2
          })}
        >
          <Title />
          <button
            aria-label="Set color mode"
            css={css({
              bg: `altBackground`,
              color: `altText`,
              borderColor: `muted`,
              borderRadius: 1,
              fontSize: 0,
              p: 2,
              ml: 2,
              cursor: `pointer`,
              fontWeight: `bold`
            })}
            onClick={toggleColorMode}
          >
            {colorMode}
          </button>
        </div>
        <Bio />
      </div>
    </header>
  );
};
