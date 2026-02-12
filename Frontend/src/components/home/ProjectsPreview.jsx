
import machine_1 from "../../assets/images/Upcoming_Project.jpg";
import machine_2 from "../../assets/images/Our_projects_Black.jpg";


export default function ProjectsPreview() {
  return (
    <section className="py-20 bg-gray-50 bg-linear-to-br from-green-100 via-teal-100 to-green-100 ">
      <div className="grid md:grid-cols-2 gap- mt-12 text-center">
      <div className="container mx-auto px-6 grid  gap-10 animate-fadeIn">
        {[1,].map((p) => (
          <div key={p} className=" rounded-xl shadow-lg overflow-hidden bg-linear-to-br from-green-100 m9-card  ">
            <img src={machine_2} alt="machine_3" className="w-full object-cover h-100" />
            <div className="p-6">
              <h3 className="font-bold text-xl">Semi-Automated Pani Puri System</h3>
              <p className="text-gray-600 mt-2">
                Industrial engineering meets street food automation.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 grid  gap-10 animate-fadeIn">
        {[1].map((p) => (
          <div key={p} className=" rounded-xl shadow-lg overflow-hidden bg-linear-to-br from-green-100 m9-card  ">
            <img src={machine_1} alt="machine_3" className="w-full object-cover h-100" />
            <div className="p-6">
              <h3 className="font-bold text-xl">Fully-Automated Pani Puri System</h3>
              <p className="text-gray-600 mt-2">
                Industrial engineering meets street food automation.
              </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
