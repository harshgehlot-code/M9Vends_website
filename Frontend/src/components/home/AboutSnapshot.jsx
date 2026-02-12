export default function AboutSnapshot() {
  return (
    <section className="py-20 bg-white bg-linear-to-br from-green-100 via-teal-100 to-green-100">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-heavitas text-machineBlue">
          The Street Food Challenge
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12 animate-fadeIn">
          {[
            "Hygiene Challenges",
            "Inconsistent Taste",
            "Lack of Structured Systems",
          ].map((title, i) => (
            <div key={i} className="p-6 border rounded-xl shadow-sm hover:shadow-2xl transition m9-card ">
              <h3 className="font-bold text-xl">{title}</h3>
              <p className="mt-2 text-gray-600">
                Traditional street vending lacks hygiene, consistency, and scalability.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
