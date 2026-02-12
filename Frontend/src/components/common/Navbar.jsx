import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo_file.jpg";
// import Link from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 transition-all duration-300" >
   <nav className="bg-linear-to-br from-gren-100 to-teal-100 from-green-100 sticky top-0 z-50 backdrop-blur-md transition-all duration-300">


      <div className="container mx-auto px-6 flex items-center justify-between h-20 ">

        {/* ================= Logo ================= */}
        <div className="flex items-center gap-3 mr-5 " >
          <Link to="/" className="flex items-center gap-3" >
          <img src={logo} alt="M9Vends Logo" className="h-10 w-10 object-contain " />
          <span className="text-xl font-heavitas text-machineBlue tracking-wide font-bold">
            M9Vends
          </span>
          </Link>
        </div>


        {/* ================= Desktop Menu ================= */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-bold ml-10" >

          <Link to="/" className=" hover:text-cyan-700 transition">Home</Link>
          <Link to="/projects" className=" hover:text-cyan-700 transition">Projects</Link>
          <Link to="/about" className=" hover:text-cyan-700 transition">About</Link>
          <Link to="/team" className=" hover:text-cyan-700 transition">Team</Link>
          <Link to="/careers" className="hover:text-cyan-700 transition">Careers</Link>
          <Link to="/helpdesk" className="hover:text-cyan-700 transition">
            Help 
          </Link>
          <Link to="/contact" className="hover:text-cyan-700 transition">Contact</Link>
        </div>


        {/* ================= Mobile Hamburger ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-machineBlue focus:outline-none"
        >
          {open ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>


      {/* ================= Mobile Menu ================= */}
      {open && ( 
        <div className="md:hidden border-t shadow-lg ">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">

            <Link onClick={() => setOpen(false)} to="/">Home</Link>
            <Link onClick={() => setOpen(false)} to="/projects">Projects</Link>
            <Link onClick={() => setOpen(false)} to="/about">About</Link>
            <Link onClick={() => setOpen(false)} to="/careers">Careers</Link>
            <Link onClick={() => setOpen(false)} to="/helpdesk">Help</Link>
            <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>

          </div>
        </div>
      )}
    </nav>
  );
}
