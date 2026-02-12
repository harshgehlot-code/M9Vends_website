import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="py-16 bg-industrialDark text-black text-center bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <h2 className="text-3xl font-norwester mb-10">
        Let’s Build the Future of Automated Street Food
      </h2>

    <button className="px-10 py-3 text-black font-bold rounded-xl hover:bg-cyan-700 transition border-2 m9-cta">
      <Link className="  text-black font-bold  " to="/contact">
      Contact M9Vends
      </Link>
    </button>
    </section>
  );
}
