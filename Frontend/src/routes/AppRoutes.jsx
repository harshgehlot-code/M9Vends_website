import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import HelpDesk from "../pages/Help-Term-Policy";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import TeamInfo from "../pages/TeamInfo";
// import Collaboration from "../components/home/Collaboration";

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/Collaborations" element={<Collaboration />} /> */}
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/helpdesk" element={<HelpDesk />} />
        <Route path="/team" element={<TeamInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
