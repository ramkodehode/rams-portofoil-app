import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './navbar/navBar';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/services" />
          <Route path="/aboutus" />
          <Route path="/contact" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
