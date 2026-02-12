const blocks = ["Mechanical", "Electronics", "IoT", "AI"];
import machine_1 from "../../assets/images/Upcoming_Project.jpg";

export default function FutureArchitecture() {
  return (
    <section className="py-20 bg-gray-50 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-heavitas text-machineBlue">Future System Architecture</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-12 text-center">
        <div className="space-y-6 mt-10">
          {blocks.map((b, i) => (
            <div key={i} className="p-12 border shadow-sm hover:shadow-2xl transition rounded-2xl m9-card">
              <h3 className="font-bold text-xl">{b} Layer</h3>
              
            </div>
          ))}
        </div>
        <div className="flex justify-center ">
          <img src={machine_1} alt="machine_image" className="w-full max-w-md border rounded-3xl " />
        </div>
      </div>
      </div>
    </section>
  );
}



