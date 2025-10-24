import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import NavBar from "./components/NavBar";
import NotFound from "./pages/not found/NotFound";
import Footer from "./components/Footer";
import Themes from "./components/Themes";

function App() {
  return (
    <BrowserRouter basename="/myPortfolio">
      <NavBar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
