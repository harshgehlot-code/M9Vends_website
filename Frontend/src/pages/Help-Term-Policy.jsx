import {Link} from "react-router-dom";

export default function HelpDesk() {
  return (
    <section className="py-24 bg-white bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6">

        {/* ================= Section 1 – Intro ================= */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-heavitas text-machineBlue tracking-wide">
            Help Desk & Support
          </h1>

          <p className="mt-4 text-xl font-semibold text-gray-800">
            We’re Here to Help
          </p>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            At M9Vends, we believe strong support is as important as a strong product.
            Our Help Desk is designed to assist you at every stage of your journey.
          </p>
        </div>


        {/* ================= Section 2 – Support Categories ================= */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {/* Technical Support */}
          <div className="border rounded-xl shadow-sm p-8 hover:shadow-xl transition m9-card">
            <h3 className="text-xl font-heavitas text-machineBlue">
              Technical Support
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Machine operation guidance</li>
              <li>• Sensor or motor-related assistance</li>
              <li>• Control panel usage help</li>
            </ul>
          </div>

          {/* Maintenance Assistance */}
          <div className="border rounded-xl shadow-sm p-8 hover:shadow-xl transition m9-card">
            <h3 className="text-xl font-heavitas text-machineBlue">
              Maintenance Assistance
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Cleaning and hygiene instructions</li>
              <li>• Preventive maintenance tips</li>
              <li>• Basic troubleshooting support</li>
            </ul>
          </div>

          {/* Product & Order Support */}
          <div className="border rounded-xl shadow-sm p-8 hover:shadow-xl transition m9-card">
            <h3 className="text-xl font-heavitas text-machineBlue">
              Product & Order Support
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>• Product details and configurations</li>
              <li>• Order status and delivery support</li>
              <li>• Customization queries</li>
            </ul>
          </div>

        </div>


        {/* ================= Section 3 – Support CTA ================= */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-heavitas text-machineBlue">
            Product & Service Capabilities
          </h3>

          <ul className="mt-6 space-y-3 text-gray-700 text-lg">
            <li>1. Design & Development</li>
            <li>2. Installation & Setup</li>
            <li>3. Maintenance & Support</li>
            <li>4. Branding & Expansion Support</li>
            <li>5. Future Upgrades (Automation, IoT & monitoring planned)</li>
          </ul>

          <button className="mt-10 px-10 py-4 font-bold border-2 rounded-xl hover:bg-cyan-700 transition m9-cta">
            <Link to="/contact" className="text-black font-bold">
            Contact Support Team
            </Link>
          </button>
        </div>


        {/* ================= Section 4 – Terms & Conditions ================= */}
        <div className="mt-28 max-w-5xl mx-auto">
          <h2 className="text-3xl font-heavitas text-machineBlue text-center">
            Terms & Conditions
          </h2>

          <p className="mt-6 text-gray-700 text-lg text-center">
            At M9Vends, these terms ensure smooth operations and protect both parties.
            Please read them carefully before using our vending systems.
          </p>

          <div className="mt-10 space-y-5 text-gray-700">
            <p><span className="font-semibold">1. Product Usage:</span> Systems are designed exclusively for food vending and must be operated according to provided guidelines.</p>
            <p><span className="font-semibold">2. Customization:</span> Custom designs may involve varied delivery timelines and costs.</p>
            <p><span className="font-semibold">3. Maintenance Responsibility:</span> Operators must perform regular cleaning and basic maintenance.</p>
            <p><span className="font-semibold">4. Warranty:</span> Applies only to manufacturing defects. Excludes misuse, improper handling, or unauthorized modifications.</p>
            <p><span className="font-semibold">5. Intellectual Property:</span> All designs and branding are proprietary. Replication without permission is prohibited.</p>
            <p><span className="font-semibold">6. Liability:</span> M9Vends is not responsible for improper usage, regulatory non-compliance, or operational negligence.</p>
            <p><span className="font-semibold">7. Updates:</span> Terms and products may be updated without prior notice.</p>
          </div>
        </div>


        {/* ================= Section 5 – Privacy Policy ================= */}
        <div className="mt-28 max-w-5xl mx-auto">
          <h2 className="text-3xl font-heavitas text-machineBlue text-center">
            Privacy Policy
          </h2>

          <p className="mt-6 text-gray-700 text-lg text-center">
            M9Vends respects your privacy and is committed to protecting your personal information.
          </p>

          <div className="mt-10 space-y-5 text-gray-700">
            <p><span className="font-semibold">1. Information We Collect:</span> Name, email, phone number, professional details, and voluntarily submitted form data.</p>
            <p><span className="font-semibold">2. How We Use Information:</span> To respond to inquiries, recruitment processing, service improvement, and communication.</p>
            <p><span className="font-semibold">3. Data Storage:</span> Stored securely in official M9Vends Google Sheets systems.</p>
            <p><span className="font-semibold">4. Data Sharing:</span> No selling, renting, or trading. Shared only when legally required.</p>
            <p><span className="font-semibold">5. Security:</span> Reasonable measures protect against unauthorized access and misuse.</p>
            <p><span className="font-semibold">6. Updates:</span> Policy may change due to operational or regulatory updates.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
