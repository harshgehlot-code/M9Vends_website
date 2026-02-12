const layers = [
  { title: "Mechanical Layer", items: ["MS frame", "SS tanks & nozzles", "Waterproof lamination"] },
  { title: "Fluid & Dispensing Layer", items: ["Food-grade pipes", "Individual flavor lines", "Anti-contamination design"] },
  { title: "Electronics & Control Layer", items: ["Arduino control", "ACS712 sensors", "Induction motors", "Failure logic"] },
];

export default function EngineeringArchitecture() {
  return (
    <section className="py-20 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heavitas text-machineBlue">Engineering Architecture</h2>

        <div className="space-y-6 mt-10">
          {layers.map((l, i) => (
            <div key={i} className="p-6 border shadow-sm hover:shadow-2xl transition rounded-2xl m9-card">
              <h3 className="font-bold text-xl">{l.title}</h3>
              <ul className="mt-3 list-disc ml-6 text-gray-700">
                {l.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
