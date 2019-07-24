/** @jsx jsx */
import React from "react";
import { Link } from "gatsby";
import { Styled, jsx } from "theme-ui";
import SEO from "gatsby-theme-blog/src/components/seo";
import Footer from "gatsby-theme-blog/src/components/home-footer";

const Posts = ({ location, posts, siteTitle, socialLinks }) => (
  <div>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug;
        const keywords = node.keywords || [];
        return (
          <div sx={{ mb: [3, 4] }} key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <div>
              <Styled.h2
                sx={{
                  mb: 0
                }}
              >
                <Styled.a
                  as={Link}
                  sx={{
                    textDecoration: `none`,
                    color: `secondary`,
                    "&, &:active, &:visited": {
                      color: `secondary`
                    }
                  }}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <Styled.p sx={{ color: `muted` }}>{node.date}</Styled.p>
              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </div>
        );
      })}
    </main>
    <Footer socialLinks={socialLinks} />
  </div>
);

export default Posts;
