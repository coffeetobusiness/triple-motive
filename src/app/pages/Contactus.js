import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ContactusSectionNavigations2 from '../components/navigations/ContactusSectionNavigations2';
import ContactusSectionContact1 from '../components/contact/ContactusSectionContact1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Contactus() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <ContactusSectionNavigations2 />
      <ContactusSectionContact1 />
    </React.Fragment>
  );
}

