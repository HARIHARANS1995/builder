import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent } from '@builder.io/react';
import '../components/CodeBlock';

interface PageTemplateProps {
  data: { allBuilderModels: { page: { content: any }[] } };
}


const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
  <BuilderComponent content={data.allBuilderModels.page[0].content} />
);

export default PageTemplate;
export const pageQuery = graphql`
  query($path: String!) {
    allBuilderModels {
      page(target: { urlPath: $path }, limit: 1) {
        content
      }
    }
  }
`

