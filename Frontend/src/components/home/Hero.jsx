
import machine_1 from "../../assets/images/Our_projects_Black.jpg";
import {Link} from "react-router-dom";
// import Logo from "../../assets/images/Logo_file.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-linear-to-br  from-green-100 via-teal-100 to-green-100 overflow-hidden ">
      {/* <img src={Logo} alt="logoimage" className="" /> */}
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6  animate-fadeIn">
        {/* Left Content */}
        <div className="mt-10 ">
          <h1 className="text-4xl md:text-6xl font-norwester font-bold text-machineBlue ">
            Building the Future of Street Food Through a Smart Automation Ecosystem
          </h1>

          <p className="mt-6 text-lg max-w-xl">
            M9Vends integrates authentic street flavours with advanced automation,
            hygiene-first systems, and engineered infrastructure, evolving traditional
            vending into a scalable, technology-driven ecosystem.
          </p>

          <p className="mt-4 font-semibold text-automationTeal">
            Making street food cleaner, smarter, and ready for modern cities.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 border border-machineBlue text-machineBlue font-bold rounded-lg hover:bg-cyan-600 shadow-lg hover:text-white transition m9-cta">
              <Link to="/projects" className=" font-bold">
                  Our Projects
              </Link>
            </button>

            <button className="px-6 py-3 border  font-bold rounded-lg hover:bg-cyan-600 shadow-lg hover:text-white transition m9-cta">
              <Link to="/contact" className="text-machineBlue font-bold">
                Partner With Us
              </Link>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img src={machine_1} alt="machine_image" className="w-full max-w-md border rounded-3xl " />
        </div>

      </div>
    </section>
  );
}
