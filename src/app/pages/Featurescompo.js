import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FeaturescompoSectionHowItWorks9 from '../components/how-it-works/FeaturescompoSectionHowItWorks9';
import FeaturescompoSectionFeatures8 from '../components/features/FeaturescompoSectionFeatures8';
import FeaturescompoSectionFeatures1 from '../components/features/FeaturescompoSectionFeatures1';
import FeaturescompoSectionHowItWorks7 from '../components/how-it-works/FeaturescompoSectionHowItWorks7';
import FeaturescompoSectionHowItWorks6 from '../components/how-it-works/FeaturescompoSectionHowItWorks6';
import FeaturescompoSectionHowItWorks5 from '../components/how-it-works/FeaturescompoSectionHowItWorks5';
import FeaturescompoSectionHowItWorks3 from '../components/how-it-works/FeaturescompoSectionHowItWorks3';
import FeaturescompoSectionFeatures10 from '../components/features/FeaturescompoSectionFeatures10';
import FeaturescompoSectionFeatures4 from '../components/features/FeaturescompoSectionFeatures4';
import FeaturescompoSectionFeatures2 from '../components/features/FeaturescompoSectionFeatures2';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Featurescompo() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <FeaturescompoSectionHowItWorks9 />
      <FeaturescompoSectionFeatures8 />
      <FeaturescompoSectionFeatures1 />
      <FeaturescompoSectionHowItWorks7 />
      <FeaturescompoSectionHowItWorks6 />
      <FeaturescompoSectionHowItWorks5 />
      <FeaturescompoSectionHowItWorks3 />
      <FeaturescompoSectionFeatures10 />
      <FeaturescompoSectionFeatures4 />
      <FeaturescompoSectionFeatures2 />
    </React.Fragment>
  );
}

