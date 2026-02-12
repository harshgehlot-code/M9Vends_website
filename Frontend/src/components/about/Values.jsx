const values = [
  "Authenticity",
  "Hygiene & Safety",
  "Innovation with Purpose",
  "Reliability",
  "Scalability",
];

export default function Values() {
  return (
    <section className="py-20 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6 text-center">

        <h2 className="text-3xl font-heavitas text-machineBlue">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mt-12 ">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow-sm  hover:-translate-y-3  transition m9-card"
            >
              <div className="w-12  mx-auto bg-automationTeal rounded"></div>
              <h3 className="mt-4 font-bold text-lg">{v}</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Engineering-driven principle guiding every system design.
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
