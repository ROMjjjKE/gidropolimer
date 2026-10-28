import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Parking from './pages/Parking';
import Livnevka from './pages/Livnevka';
import Truby from './pages/Truby';
import { useLenis } from './components/useLenis';

export default function App() {
  const { pathname } = useLocation();
  useLenis();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return (
    <>
      <a className="skip" href="#main">К содержанию</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parking" element={<Parking />} />
          <Route path="/livnevka" element={<Livnevka />} />
          <Route path="/truby" element={<Truby />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
