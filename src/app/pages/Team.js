import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import TeamSectionNavigations2 from '../components/navigations/TeamSectionNavigations2';
import TeamSectionTeam1 from '../components/team/TeamSectionTeam1';
import TeamSectionTeam3 from '../components/team/TeamSectionTeam3';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Team() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <TeamSectionNavigations2 />
      <TeamSectionTeam1 />
      <TeamSectionTeam3 />
    </React.Fragment>
  );
}

