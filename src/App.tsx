
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Policy from './pages/Policy';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import { AdminProvider } from './context/AdminContext';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <AdminProvider>
      <HashRouter>
        <ScrollToTop /> {/* Ensure page starts at top on navigation */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/policy-education" element={<Policy />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </HashRouter>
    </AdminProvider>
  );
};

export default App;
