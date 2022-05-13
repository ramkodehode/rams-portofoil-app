import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import ContentPage from './content/content';
import Navbar from './components/Navbar/NavbarElement';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ContentPage />
        <Routes>
          <Route path="/" />
          <Route path="/ommeg" />
          <Route path="/arbeid" />
          <Route path="/Kontakt" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
