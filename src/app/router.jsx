import { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import WhatsAppButton from '../components/ui/WhatsAppButton.jsx';
import Home from '../pages/Home.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ExperiencePage from '../pages/ExperiencePage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import ProjectsPage from '../pages/ProjectsPage.jsx';
import CaseStudyPage from '../pages/CaseStudyPage.jsx';
import NotFound from '../pages/NotFound.jsx';

function ScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function AppRouter() {
  return (
    <HashRouter>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <div id="main">
        <ScrollManager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<CaseStudyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppButton />
    </HashRouter>
  );
}
