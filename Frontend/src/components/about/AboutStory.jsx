
import machine_1 from "../../assets/images/Our_projects_Black.jpg";

export default function AboutStory() {
  return (
    <section className="py-20 bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn ">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6 items-center ">

        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-heavitas text-machineBlue">
            Our Story
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            M9Vends was created with a simple yet powerful vision—to bring the rich diversity of Indian street food to people in a hygienic, consistent, and modern way, without losing its authentic taste.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Our journey began at the ground level, understanding real street-food operations—from ingredient handling and taste consistency to customer flow and vendor challenges. This led us to develop semi-automated street-food carts starting with our flagship pani-puri vending system.
          </p>

          <ul className="mt-6 space-y-2 text-gray-700">
            <li>• Hygienic food handling using food-grade materials</li>
            <li>• Consistent taste through controlled mixing</li>
            <li>• Smart automation to reduce manual contact</li>
            <li>• Vendor-friendly designs</li>
            <li>• Scalable multi-city deployment</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center ">
          <img
            src={machine_1}
            className="w-full max-w-md rounded-xl shadow-lg"
            alt="Founder Story"
          />
        </div>

      </div>
    </section>
  );
}
