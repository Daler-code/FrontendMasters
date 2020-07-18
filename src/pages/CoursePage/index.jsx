import React from 'react';

import NavbarMain from '../../components/Navbar';
import HeaderCoursePage from '../../components/HeaderCoursePage';
import CoursesTechsContainer from '../../containers/CoursesTechsContainer';
import CallToActionSectionTwo from '../../components/CallToActionSectionTwo';
import WhatYouLearnSection from '../../components/WhatYouLearnSection';
import PreRequisities from '../../components/PreRequisities';
import JoinITCommunitySection from '../../components/JoinITCommunitySection';
import CallToActionSection from '../../components/CallToActionSection';
import Footer from '../../components/Footer';


const styles = {
  width: '100vw',
  height: 'fit-content',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};


const CoursePage = () => {
  return (
    <div style={styles}>
      <NavbarMain />
      <HeaderCoursePage />
      <CoursesTechsContainer />
      <CallToActionSectionTwo />
      <WhatYouLearnSection />
      <PreRequisities />
      <JoinITCommunitySection />
      <CallToActionSection />
      <Footer />
    </div>
  )
};

export default CoursePage;