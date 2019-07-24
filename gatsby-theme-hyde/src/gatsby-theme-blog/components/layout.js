/** @jsx jsx */
import React from "react";
import { jsx, Styled } from "theme-ui";
import Header from "gatsby-theme-blog/src/components/header";
export default ({ children, ...props }) => (
  <Styled.root>
    <div
      sx={{
        backgroundColor: `altBackground`,
        color: `altText`,
        width: [`100%`, `mobileSidebar`, `mobileSidebar`, `sidebar`],
        position: [`initial`, `fixed`],
        top: 0,
        left: 0,
        bottom: 0,
        textAlign: `left`
      }}
    >
      <Header {...props} />
    </div>
    <div
      sx={{
        maxWidth: `container`,
        ml: [
          0,
          t => t.sizes.mobileSidebar,
          t => t.sizes.mobileSidebar,
          t => parseInt(t.sizes.sidebar.slice(0, -2), 10) + t.space[4] + `px`
        ],
        px: [3, 4],
        pt: [4, 5],
        pb: [3, 4]
      }}
    >
      {children}
    </div>
  </Styled.root>
);
