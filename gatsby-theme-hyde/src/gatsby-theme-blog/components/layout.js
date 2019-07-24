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
        width: [
          `mobileSidebar`,
          `mobileSidebar`,
          `mobileSidebar`,
          `sidebar`,
          `sidebar`
        ],
        position: `fixed`,
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
          t => t.sizes.mobileSidebar,
          t => t.sizes.mobileSidebar,
          t => t.sizes.mobileSidebar,
          t => parseInt(t.sizes.sidebar.slice(0, -2), 10) + t.space[4] + `px`,
          t => parseInt(t.sizes.sidebar.slice(0, -2), 10) + t.space[6] + `px`
        ],
        px: 4,
        pt: 5,
        pb: 4
      }}
    >
      {children}
    </div>
  </Styled.root>
);
