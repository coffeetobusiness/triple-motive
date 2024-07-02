import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MoreComponentsSectionNavigations1 from '../components/navigations/MoreComponentsSectionNavigations1';
import MoreComponentsSectionHeaders2 from '../components/headers/MoreComponentsSectionHeaders2';
import MoreComponentsSectionHeaders4 from '../components/headers/MoreComponentsSectionHeaders4';
import MoreComponentsSectionHeaders6 from '../components/headers/MoreComponentsSectionHeaders6';
import MoreComponentsSectionHeaders5 from '../components/headers/MoreComponentsSectionHeaders5';
import MoreComponentsSectionHeaders8 from '../components/headers/MoreComponentsSectionHeaders8';
import MoreComponentsSectionHeaders7 from '../components/headers/MoreComponentsSectionHeaders7';
import MoreComponentsSectionHeaders3 from '../components/headers/MoreComponentsSectionHeaders3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function MoreComponents() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <MoreComponentsSectionNavigations1 />
      <MoreComponentsSectionHeaders2 />
      <MoreComponentsSectionHeaders4 />
      <MoreComponentsSectionHeaders6 />
      <MoreComponentsSectionHeaders5 />
      <MoreComponentsSectionHeaders8 />
      <MoreComponentsSectionHeaders7 />
      <MoreComponentsSectionHeaders3 />
    </React.Fragment>
  );
}

