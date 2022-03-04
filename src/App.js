import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Home from "./pages/Home";
import News from "./pages/News";
import AboutUs from "./pages/AboutUs";
import Rents from "./pages/Rents";
import Sells from "./pages/Sells";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar";

function App() {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("welcome")}</h2>
      <NavBar className="navbar" />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/news" element={<News />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route path="/rents" element={<Rents />}></Route>
          <Route path="/sells" element={<Sells />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
