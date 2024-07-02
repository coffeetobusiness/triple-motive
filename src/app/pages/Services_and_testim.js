import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ServicesAndTestimSectionTestimonials3 from '../components/testimonials/ServicesAndTestimSectionTestimonials3';
import ServicesAndTestimSectionTestimonials8 from '../components/testimonials/ServicesAndTestimSectionTestimonials8';
import ServicesAndTestimSectionServices7 from '../components/services/ServicesAndTestimSectionServices7';
import ServicesAndTestimSectionServices6 from '../components/services/ServicesAndTestimSectionServices6';
import ServicesAndTestimSectionTestimonials5 from '../components/testimonials/ServicesAndTestimSectionTestimonials5';
import ServicesAndTestimSectionTestimonials4 from '../components/testimonials/ServicesAndTestimSectionTestimonials4';
import ServicesAndTestimSectionServices1 from '../components/services/ServicesAndTestimSectionServices1';
import ServicesAndTestimSectionLogoClouds2 from '../components/logo-clouds/ServicesAndTestimSectionLogoClouds2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function ServicesAndTestim() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ServicesAndTestimSectionTestimonials3 />
      <ServicesAndTestimSectionTestimonials8 />
      <ServicesAndTestimSectionServices7 />
      <ServicesAndTestimSectionServices6 />
      <ServicesAndTestimSectionTestimonials5 />
      <ServicesAndTestimSectionTestimonials4 />
      <ServicesAndTestimSectionServices1 />
      <ServicesAndTestimSectionLogoClouds2 />
    </React.Fragment>
  );
}

