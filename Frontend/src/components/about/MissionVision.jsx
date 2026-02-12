export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6">

        {/* Mission */}
        <div className="p-8  border rounded-xl shadow-sm hover:shadow-2xl transition m9-card">
          <h3 className="text-2xl font-heavitas text-machineBlue">Our Mission</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Redefine Indian street food vending with hygienic practices, smart automation,
            and scalable engineering solutions empowering vendors and entrepreneurs.
          </p>
        </div>

        {/* Vision */}
        <div className="p-8  border rounded-xl shadow-sm hover:shadow-2xl transition m9-card">
          <h3 className="text-2xl font-heavitas text-machineBlue">Our Vision</h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Build M9Vends as a global street-food vending brand with branded chaupatis,
            smart vending ecosystems, and technology-enhanced tradition worldwide.
          </p>
        </div>

      </div>

      {/* Divider Line */}
      <div className="container mx-auto mt-12 px-6">
        <div className="h-2px bg-machineBlue/20"></div>
      </div>
    </section>
  );
}
