import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarElement";
import GlobalStyle from "./globalStyles";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/om-meg" />
          <Route path="/prosjekter" />
          <Route path="/kontakt" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
