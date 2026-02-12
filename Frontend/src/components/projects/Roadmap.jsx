const roadmap = ["2025 Prototype", "2026 Field Testing", "2027 Deployment", "2028 Global Expansion"];

export default function Roadmap() {
  return (
    <section className="py-20 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heavitas text-machineBlue text-center">Development Roadmap</h2>

        <div className="flex justify-between mt-12 relative">
          <div className="absolute top-4 left-0 right-0 h-2px bg-machineBlue/20"></div>
          {roadmap.map((r, i) => (
            <div key={i} className="text-center w-1/4 hover:scale-105 transition relative">
              <div className="w-5 h-5 bg-machineBlue mx-auto"></div>
              <p className="mt-4 font-bold">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
