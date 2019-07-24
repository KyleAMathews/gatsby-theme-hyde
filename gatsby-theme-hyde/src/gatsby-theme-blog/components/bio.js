/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Styled, css, Flex } from "theme-ui";
import BioContent from "gatsby-theme-blog/src/components/bio-content.js";

const Bio = () => {
  return (
    <Styled.div>
      <BioContent />
    </Styled.div>
  );
};

export default Bio;
