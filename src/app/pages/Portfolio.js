import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PortfolioSectionNavigations2 from '../components/navigations/PortfolioSectionNavigations2';
import PortfolioSectionPortfolio1 from '../components/portfolio/PortfolioSectionPortfolio1';
import PortfolioSectionHowItWorks3 from '../components/how-it-works/PortfolioSectionHowItWorks3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Portfolio() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <PortfolioSectionNavigations2 />
      <PortfolioSectionPortfolio1 />
      <PortfolioSectionHowItWorks3 />
    </React.Fragment>
  );
}

