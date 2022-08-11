import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/NavbarElement";
import GlobalStyle from "./globalStyles";
import { Home } from "./pages/HomePage/Home";
import Contact from "./pages/ContactPage/Contact";

const App = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
