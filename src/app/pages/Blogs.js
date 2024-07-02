import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import BlogsSectionNavigations1 from '../components/navigations/BlogsSectionNavigations1';
import BlogsSectionBlog2 from '../components/blog/BlogsSectionBlog2';
import BlogsSectionBlog3 from '../components/blog/BlogsSectionBlog3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Blogs() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <BlogsSectionNavigations1 />
      <BlogsSectionBlog2 />
      <BlogsSectionBlog3 />
    </React.Fragment>
  );
}

