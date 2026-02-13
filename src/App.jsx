import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Employers from './pages/Employers';
import Brokers from './pages/Brokers';
import TPAs from './pages/TPAs';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/brokers" element={<Brokers />} />
          <Route path="/tpas" element={<TPAs />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
