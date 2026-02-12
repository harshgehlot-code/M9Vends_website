
import { Link } from "react-router-dom";


export default function DeploymentCTA() {
  return (
    <section className="py-16 bg-machineBlue text-black text-center bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <h2 className="text-3xl font-norwester">Deployment Ready for Scalable Cities</h2>
      <button className="mt-6 px-8 py-3 bg-limeAccent text-black font-bold border-2 rounded-2xl hover:bg-cyan-700 transition m9-cta">
      <Link to="/contact" className="text-black font-bold">
        Partner for Deployment
      </Link>        
      </button>
    </section>
  );
}
