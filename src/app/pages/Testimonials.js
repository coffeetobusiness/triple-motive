import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TestimonialsSectionNavigations3 from '../components/navigations/TestimonialsSectionNavigations3';
import TestimonialsSectionTestimonials1 from '../components/testimonials/TestimonialsSectionTestimonials1';
import TestimonialsSectionLogoClouds4 from '../components/logo-clouds/TestimonialsSectionLogoClouds4';
import TestimonialsSectionTestimonials2 from '../components/testimonials/TestimonialsSectionTestimonials2';
import TestimonialsSectionPortfolio5 from '../components/portfolio/TestimonialsSectionPortfolio5';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Testimonials() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <TestimonialsSectionNavigations3 />
      <TestimonialsSectionTestimonials1 />
      <TestimonialsSectionLogoClouds4 />
      <TestimonialsSectionTestimonials2 />
      <TestimonialsSectionPortfolio5 />
    </React.Fragment>
  );
}

