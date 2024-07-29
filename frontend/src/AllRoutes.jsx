// AllRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import AboutUs from './Pages/About_Us/About_Us';
import Policy from './Pages/Policy/Policy';
import Members from './Pages/Members/Members';
import MemberDetails from './Pages/Dashboard/Dashboard';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
export default function AllRoutes() {   
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/members" element={<Members />} />
      <Route path='/members/:id' element={<MemberDetails/>}/>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
