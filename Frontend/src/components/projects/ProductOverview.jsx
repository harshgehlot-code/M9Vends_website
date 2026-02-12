import machine_1 from "../../assets/images/Our_projects_Black.jpg";

export default function ProductOverview() {
  return (
    <section className="py-20 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 items-center  ">

        <img src={machine_1} alt="machine_image" className="w-full shadow-lg max-w-md border rounded-2xl " />

        <div>
          <h2 className="text-3xl font-heavitas text-machineBlue">
            Semi-Automated Pani-Puri Vending System
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            M9Vends flagship engineering product integrating mechanical systems,
            embedded electronics, and food-grade materials for hygienic vending.
          </p>

          <p className="mt-4 text-gray-700">
            Developed in Indore (2025–2026), this system delivers consistent taste
            and structured automation for real-world street vending.
          </p>
        </div>

      </div>
    </section>
  );
}
