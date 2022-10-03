import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/HomePage/Home';
import GlobalStyle from './globalStyles';
import ContactPage from './pages/contact';

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
