import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './navbar/navBar';
import ContentPage from './content/content';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <ContentPage />

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
