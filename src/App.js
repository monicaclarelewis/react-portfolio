import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectPage from './pages/ProjectPage';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="ProjectPage" element={<ProjectPage />} />
          {/* Define a route that will have descendant routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
