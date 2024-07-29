// App.js
import React from 'react';
import { BrowserRouter,useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
function AppContent() {
  const location = useLocation();
  const hideNavbarRoutes = ['/profile'];

  const shouldHideNavbar = hideNavbarRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <AllRoutes />
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
