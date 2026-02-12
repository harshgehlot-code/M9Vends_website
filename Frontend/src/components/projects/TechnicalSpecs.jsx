const specs = [
  ["Cart Dimensions", "3 ft × 5 ft base, 6.5 ft height"],
  ["Dispensing System", "6-Flavor, 6-Nozzle system"],
  ["Operation Modes", "IR sensor automatic + Manual override"],
  ["Mixing System", "Continuous masala-water mixing motors"],
  ["Control System", "6 Arduino microcontrollers"],
  ["Sensors & Controls", "6 IR sensors, volume buttons, relay motors"],
  ["Mobility", "Alloy wheels, MS frame, SS surfaces"],
];

export default function TechnicalSpecs() {
  return (
    <section className="py-20 bg-gray-50 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heavitas text-machineBlue">
          Technical Specifications
        </h2>

        <div className="mt-8 border rounded-2xl m9-card">
          {specs.map(([key, value], i) => (
            <div key={i} className="grid grid-cols-2 p-4 hover:bg-gray-100 transition border-b last:border-b-0 rounded-tl-2xl rounded-bl-2xl m9-card">
              <div className="font-bold">{key}</div>
              <div className="text-gray-700">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
