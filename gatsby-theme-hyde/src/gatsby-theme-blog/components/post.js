/** @jsx jsx */
import React from "react";
import { Styled, jsx } from "theme-ui";
import PostFooter from "gatsby-theme-blog/src/components/post-footer";
import SEO from "gatsby-theme-blog/src/components/seo";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title }
    }
  },
  location,
  previous,
  next
}) => (
  <div>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <Styled.h1>{post.title}</Styled.h1>
      <Styled.p
        sx={{
          color: `muted`,
          mt: -3,
          mb: 3
        }}
      >
        {post.date}
      </Styled.p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter
      {...{
        previous,
        next
      }}
    />
  </div>
);

export default Post;
