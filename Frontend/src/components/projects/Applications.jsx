const apps = ["Street Vendors", "Food Startups", "Events", "Branded Outlets", "Chaupatis"];

export default function Applications() {
  return (
    <section className="py-20 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heavitas text-machineBlue">Applications</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {apps.map((a, i) => (
            <div key={i} className="p-6 border shadow-sm text-center hover:shadow-2xl transition rounded-xl m9-card">
              <h3 className="font-bold">{a}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
