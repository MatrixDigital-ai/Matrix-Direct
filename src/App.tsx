import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Divisions from './pages/Divisions';
import Clients from './pages/Clients';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="divisions" element={<Divisions />} />
          <Route path="clients" element={<Clients />} />
          <Route path="awards" element={<Awards />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}
