import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarElement";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages/HomePage/Home";

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-meg" />
          <Route path="/prosjekter" />
          <Route path="/kontakt" />
        </Routes>
      </Router>
    </>
  );
};

export default App;
