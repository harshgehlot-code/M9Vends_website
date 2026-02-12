

export default function WhyM9Vends() {
  return (
    <section className="py-24 bg-white bg-linear-to-br from-green-100 via-teal-100 to-green-100">
      <div className="container mx-auto px-6">

        {/* ================= Section 1 – Industry Problem ================= */}
        <div className="max-w-4xl mx-auto text-center animate-fadeIn">
          <h2 className="text-4xl font-heavitas text-machineBlue tracking-wide">
            Why M9Vends
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Indian street food is loved everywhere, but it deserves better hygiene,
            consistency, and engineered systems. Traditional vending lacks automation,
            structured workflows, and scalable infrastructure.
            <br /><br />
            <span className="font-semibold text-gray-900">
              M9Vends builds engineered vending platforms designed for real-world street conditions.
            </span>
          </p>
        </div>


        {/* ================= Section 2 – Differentiation Grid ================= */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fadeIn ">

          {/* Card 1 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition m9-card ">
            <h3 className="font-bold text-xl text-machineBlue">
              Hygiene-First Engineering
            </h3>
            <p className="mt-2 text-gray-600">
              Semi-automated dispensing, food-grade pipelines, and reduced hand contact.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition m9-card">
            <h3 className="font-bold text-xl text-machineBlue">
              Consistent Taste System
            </h3>
            <p className="mt-2 text-gray-600">
              Controlled masala-water dispensing and continuous mixing for uniform flavor.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition m9-card">
            <h3 className="font-bold text-xl text-machineBlue">
              Real Street Engineering
            </h3>
            <p className="mt-2 text-gray-600">
              Tested in real vending environments with dust, crowds, and water exposure.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition m9-card">
            <h3 className="font-bold text-xl text-machineBlue">
              Scalable Platform Design
            </h3>
            <p className="mt-2 text-gray-600">
              Modular architecture for single carts to multi-city vending networks.
            </p>
          </div>

          {/* Card 5 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition m9-card">
            <h3 className="font-bold text-xl text-machineBlue">
              Industrial Durability
            </h3>
            <p className="mt-2 text-gray-600">
              MS structure, SS components, alloy wheels, and weather-resistant finish.
            </p>
          </div>

          {/* Card 6 */}
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-xl transition m9-card">
            <h3 className="font-bold text-xl text-machineBlue">
              Tradition + Technology
            </h3>
            <p className="mt-2 text-gray-600">
              Authentic Indian flavors delivered through modern automation systems.
            </p>
          </div>

        </div>


        {/* ================= Section 3 – Scalability Section ================= */}
        <div className="grid md:grid-cols-2 gap-12 mt-24 items-center">

          {/* Left Text */}
          <div>
            <h3 className="text-2xl font-heavitas text-machineBlue">
              Built for Scalable Deployment
            </h3>

            <p className="mt-4 text-gray-700 leading-relaxed">
              M9Vends systems are engineered as scalable platforms — starting from
              a single vendor cart to multi-city automated vending infrastructure.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Single smart cart deployment</li>
              <li>• Multi-cart organized food hubs</li>
              <li>• Franchise-ready smart vending networks</li>
            </ul>
          </div>

          {/* Right Visual Placeholder */}
          {/* <div className=" border rounded-xl p-8 text-center">
            <p className="text-gray-500 font-mono">
              [Scalability Architecture Diagram Placeholder]
            </p>
          </div> */}

        </div>

      </div>
    </section>
  );
}

