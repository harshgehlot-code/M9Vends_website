

import aman_gupta from "../../assets/images/Our_collaborations_Aman_Gupta.jpg";
import anubhav_dubey from "../../assets/images/Our_collaborations_Anubhav_Dubey.jpg";
import { Link } from "react-router-dom";

export default function Collaborations() {
  return (
    <section className="py-24 bg-white bg-linear-to-br from-green-100 via-teal-100 to-green-100">
      <div className="container mx-auto px-6">

        {/* ================= Section 1 – Intro Banner ================= */}
        <div className="text-center max-w-4xl mx-auto animate-fadeIn">
          <h1 className="text-4xl font-heavitas text-machineBlue tracking-wide">
            Collaboration Through Conversations
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At M9Vends, we believe growth comes not only from engineering innovation
            but also from engaging with industry leaders who have built scalable brands.
            <br /><br />
            Our interactions with founders across consumer brands strengthen our vision
            of structured, scalable, and globally recognized street food automation systems.
          </p>
        </div>


        {/* ================= Section 2 – Aman Gupta ================= */}
        <div className="grid md:grid-cols-2 gap-12 mt-20 items-center animate-fadeIn">

          {/* Image */}
          <div className="bg-gray-100  rounded-xl h-72 flex items-center justify-center bg-linear-to-br from-green-100 to-teal-100 ">
            <img src={aman_gupta}  alt="Image" class="max-h-full" />
          </div>

          {/* Text */}
          <div >
            <h2 className="text-2xl font-heavitas text-machineBlue">
              Interaction with Aman Gupta
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Co-Founder & CMO, boAt
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We had the opportunity to interact with Aman Gupta, Co-Founder of boAt,
              one of India’s most recognized consumer electronics brands.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Strong brand positioning</li>
              <li>• Deep understanding of Indian consumers</li>
              <li>• Product–market alignment</li>
              <li>• Scalable operational execution</li>
            </ul>

            <p className="mt-4 text-gray-700">
              This reinforced our belief that Indian-origin brands can scale globally
              when supported by strong systems and execution clarity.
            </p>
          </div>
        </div>


        {/* ================= Section 3 – Anubhav Dubey ================= */}
        <div className="grid md:grid-cols-2 gap-12 mt-24 items-center animate-fadeIn">

          {/* Text */}
          <div>
            <h2 className="text-2xl font-heavitas text-machineBlue">
              Interaction with Anubhav Dubey
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Founder, Chai Sutta Bar
            </p>

            <p className="mt-4 text-gray-700 leading-relaxed">
              We also engaged with Anubhav Dubey, Founder of Chai Sutta Bar — a brand
              that transformed a traditional tea concept into a structured franchise model.
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Standardization of taste across locations</li>
              <li>• Strong youth-focused branding</li>
              <li>• Franchise scalability</li>
              <li>• Operational consistency</li>
            </ul>

            <p className="mt-4 text-gray-700">
              This aligned strongly with M9Vends’ mission of converting traditional
              street food into organized, scalable systems without losing authenticity.
            </p>
          </div>

          {/* Image */}
          <div className="bg-gray-100 rounded-xl h-72 flex items-center justify-center bg-linear-to-br from-green-100 to-teal-100">
            <img src={anubhav_dubey} alt="Image" class="max-h-full" />
          </div>
        </div>


        {/* ================= Section 4 – Strategic Meaning ================= */}
        <div className="mt-24 max-w-5xl mx-auto text-center animate-fadeIn">
          <h3 className="text-2xl font-heavitas text-machineBlue">
            Strategic Meaning for M9Vends
          </h3>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            These conversations validated M9Vends’ direction: transforming traditional
            street food into structured, brand-ready, and scalable automation systems.
            Indian street concepts can become globally recognized brands when backed
            by engineering systems, operational frameworks, and strong branding.
          </p>
        </div>


        {/* ================= Section 5 – CTA ================= */}
        <div className="mt-20 text-center animate-fadeIn">
          <button className="px-10 py-4 text-black font-bold rounded-xl hover:bg-cyan-700 transition border-2 m9-cta">
            <Link to="/contact" className="text-black font-bold ">
              Partner With M9Vends
            </Link>
          </button>
        </div>

      </div>
    </section>
  );
}
