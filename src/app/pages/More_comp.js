import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MoreCompSectionContact1 from '../components/contact/MoreCompSectionContact1';
import MoreCompSectionHttpCodes5 from '../components/http-codes/MoreCompSectionHttpCodes5';
import MoreCompSectionFooter7 from '../components/footer/MoreCompSectionFooter7';
import MoreCompSectionStats6 from '../components/stats/MoreCompSectionStats6';
import MoreCompSectionCta4 from '../components/cta/MoreCompSectionCta4';
import MoreCompSectionContact3 from '../components/contact/MoreCompSectionContact3';
import MoreCompSectionFaq10 from '../components/faq/MoreCompSectionFaq10';
import MoreCompSectionPortfolio11 from '../components/portfolio/MoreCompSectionPortfolio11';
import MoreCompSectionContact2 from '../components/contact/MoreCompSectionContact2';
import MoreCompSectionFooter8 from '../components/footer/MoreCompSectionFooter8';
import MoreCompSectionAbout9 from '../components/about/MoreCompSectionAbout9';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function MoreComp() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <MoreCompSectionContact1 />
      <MoreCompSectionHttpCodes5 />
      <MoreCompSectionFooter7 />
      <MoreCompSectionStats6 />
      <MoreCompSectionCta4 />
      <MoreCompSectionContact3 />
      <MoreCompSectionFaq10 />
      <MoreCompSectionPortfolio11 />
      <MoreCompSectionContact2 />
      <MoreCompSectionFooter8 />
      <MoreCompSectionAbout9 />
    </React.Fragment>
  );
}

