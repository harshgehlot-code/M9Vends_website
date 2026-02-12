import { Link } from "react-router-dom";

export default function PartnershipCTA() {
  return (
    <section className="py-16 bg-black text-black text-center bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <h2 className="text-3xl font-norwester">Partner with M9Vends for Smart Automation</h2>
      <button className="mt-6 px-8 py-4 bg-automationTeal font-bold text-black border rounded-2xl hover:bg-cyan-700 transition m9-cta">
        <Link to="/contact" className="text-black font-bold">
        Become a Partner
        </Link>
      </button>
    </section>
  );
}
