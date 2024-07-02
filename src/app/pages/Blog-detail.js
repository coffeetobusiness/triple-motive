import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BlogDetailSectionNavigations2 from '../components/navigations/BlogDetailSectionNavigations2';
import BlogDetailSectionContent1 from '../components/content/BlogDetailSectionContent1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function BlogDetail() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <BlogDetailSectionNavigations2 />
      <BlogDetailSectionContent1 />
    </React.Fragment>
  );
}

