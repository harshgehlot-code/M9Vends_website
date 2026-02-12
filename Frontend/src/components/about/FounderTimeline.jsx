const timeline = [
  { year: "2022", text: "Concept born during college experiments" },
  { year: "2023", text: "Prototype semi-automated pani-puri system" },
  { year: "2024", text: "Real street testing and system refinement" },
  { year: "2025", text: "Engineering structured automation platform" },
  { year: "2026+", text: "Scaling to smart vending ecosystems" },
];

export default function FounderTimeline() {
  return (
    <section className="py-20 bg-gray-50 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6">

        <h2 className="text-3xl font-heavitas text-machineBlue text-center">
          Founder Journey Timeline
        </h2>

        <div className="flex flex-wrap md:flex-nowrap justify-between items-start mt-12 relative">

          {/* Horizontal Line */}
          <div className="absolute top-6 left-0 right-0 h-2px bg-machineBlue/20"></div>

          {timeline.map((item, i) => (
            <div key={i} className="relative text-center w-full md:w-1/5">
              <div className="w-6 h-6 bg-machineBlue rounded-full mx-auto"></div>
              <h4 className="mt-4 font-bold">{item.year}</h4>
              <p className="text-sm text-gray-600 mt-2 px-2">{item.text}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
