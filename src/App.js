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
          <Route path="/" extact element={<Home />} />
          <Route path="/kontakt" extact />
        </Routes>
      </Router>
    </>
  );
};

export default App;
