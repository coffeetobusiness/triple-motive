"use client"
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionCta18 from '../components/cta/IndexSectionCta18';
import IndexSectionFeatures2 from '../components/features/IndexSectionFeatures2';
import IndexSectionServices4 from '../components/services/IndexSectionServices4';
import IndexSectionAbout14 from '../components/about/IndexSectionAbout14';
import IndexSectionPortfolio5 from '../components/portfolio/IndexSectionPortfolio5';
import IndexSectionCta6 from '../components/cta/IndexSectionCta6';
import IndexSectionCta8 from '../components/cta/IndexSectionCta8';
import IndexSectionTestimonials11 from '../components/testimonials/IndexSectionTestimonials11';
import IndexSectionTeam12 from '../components/team/IndexSectionTeam12';
import IndexSectionBlog19 from '../components/blog/IndexSectionBlog19';
import IndexSectionCta20 from '../components/cta/IndexSectionCta20';
import IndexSectionFooter13 from '../components/footer/IndexSectionFooter13';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
      <IndexSectionCta18 />
      <IndexSectionFeatures2 />
      <IndexSectionServices4 />
      <IndexSectionAbout14 />
      <IndexSectionPortfolio5 />
      <IndexSectionCta6 />
      <IndexSectionCta8 />
      <IndexSectionTestimonials11 />
      <IndexSectionTeam12 />
      <IndexSectionBlog19 />
      <IndexSectionCta20 />
      <IndexSectionFooter13 />
    </React.Fragment>
  );
}

