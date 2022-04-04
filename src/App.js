import './App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
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
          <Route path="/ommeg" />
          <Route path="/arbeid" />
          <Route path="/Kontakt" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
