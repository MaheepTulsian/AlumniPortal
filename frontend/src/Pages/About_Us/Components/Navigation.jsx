import React, { useState } from 'react';
import './Navigation.css';
import AboutUs from './AboutUs'; 
import VisionAndMission from './sections/VisionAndMission.jsx';
import CoreCommittee from './sections/CoreCommittee.jsx';
import AdvisoryBoard from './sections/AdvisoryBoard.jsx';
import YearBook from './sections/YearBook.jsx';
import Message from './sections/Message.jsx'

const Navigation = () => {
  const [activeContent, setActiveContent] = useState('about');

  const handleNavigationClick = (contentId) => {
    setActiveContent(contentId);
  };

  return (
    <aside className="navigation">
      <ul>
        <li className='sectionText'><a href="#about" onClick={() => handleNavigationClick('about')}>About Us</a></li>
        <li className='sectionText'><a href="#message" onClick={() => handleNavigationClick('message')}>Message from Assistant Director</a></li>
        <li className='sectionText'><a href="#vision" onClick={() => handleNavigationClick('vision')}>Vision and Mission</a></li>
        <li className='sectionText'><a href="#committee" onClick={() => handleNavigationClick('committee')}>Alumni Relations Core Committee</a></li>
        <li className='sectionText'><a href="#advisory" onClick={() => handleNavigationClick('advisory')}>Alumni Advisory Board</a></li>
        <li className='sectionText'><a href="#yearbook" onClick={() => handleNavigationClick('yearbook')}>Year Book</a></li>
      </ul>

      {activeContent === 'about' && <AboutUs />}
      {activeContent === 'vision' && <VisionAndMission />}
      {activeContent === 'committee' && <CoreCommittee />}
      {activeContent === 'advisory' && <AdvisoryBoard />}
      {activeContent === 'yearbook' && <YearBook />}
      {activeContent === 'message' && <Message />}
    </aside>
  );
};

export default Navigation;
