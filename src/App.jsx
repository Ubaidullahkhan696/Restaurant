import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Pages/Menu";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import SectionEight from "./Components/SectionEight";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop /> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SectionEight/>
      </BrowserRouter>
    </>
  );
};

export default App;
