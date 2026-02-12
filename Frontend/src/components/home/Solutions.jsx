const solutions = [
  { title: "Semi-Automated Vending", desc: "Controlled dispensing and hygienic preparation." },
  { title: "Embedded Systems Integration", desc: "Sensors, Arduino control panels, diagnostics." },
  { title: "Full Automation", desc: "IoT, AI optimization, scalable vending ecosystem." },
];

export default function Solution() {
  return (
    <section className="py-20 bg-gray-50 bg-linear-to-br from-green-100 via-teal-100 to-green-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heavitas text-machineBlue text-center">
          Our Solution
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-12 animate-fadeIn">
          {solutions.map((s, i) => (
            <div key={i} className="p-6 shadow-md rounded-xl flex gap-4 hover:shadow-2xl transition m9-card">
              <div className="w-10 h-10 bg-automationTeal rounded"></div>
              <div>
                <h3 className="font-bold text-xl">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
