
import { useState } from "react";
import { submitContact } from "../services/contact.service";

const Contact = () => {
  // Form state to store user input
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  /**
   * Handle form submission
   * Submits contact form to the backend API
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Submit contact form to backend
      await submitContact(form);
      
      // Show success message and reset form
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      // Handle errors
      setError(err.response?.data?.message || "Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

// export default function Contact() {
  return (
    <section className="py-24 bg-white bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6">

        {/* ================= Section 1 – Header Banner ================= */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-heavitas text-machineBlue tracking-wide">
            Contact M9Vends
          </h1>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Let’s Build the Future of Automated Street Food.
            <br />
            Whether you are a vendor, partner, investor, or collaborator,
            we welcome structured discussions and inquiries.
          </p>
        </div>


        {/* ================= Section 2 – Two Column Layout ================= */}
        <div className="grid md:grid-cols-2 gap-12 mt-20">

          {/* -------- Left: Contact Info -------- */}
          <div className="space-y-6 ">
            <h2 className="text-2xl font-heavitas text-machineBlue">
              Contact Information
            </h2>

            <div className="text-gray-700 space-y-3">
              <p className="font-semibold">M9Vends</p>
              <p>66, Silver Stud, Race Course Road</p>
              <p>Indore, Madhya Pradesh</p>
              <p className="mt-3">
                <span className="font-semibold">Contact Person:</span> Lavish Goyal
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +91 79747 65416
              </p>
              <p>
                <span className="font-semibold">Email:</span> officialswaadishq@gmail.com
              </p>
            </div>
          </div>


          {/* -------- Right: Contact Form -------- */}
          <div className="border-3 rounded-2xl shadow-md p-8 hover:shadow-2xl transition bg-linear-to-br from-green-100 via-teal-100 to-green-100 m9-card">

            <h2 className="text-xl font-heavitas text-machineBlue text-center">
              Send an Inquiry
            </h2>

            <form className="mt-6 space-y-5 " 
            onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-2 p-3  focus:ring-2 focus:outline-none focus:ring-machineBlue rounded-2xl  bg-amber-50"
                value={form.name}
                onChange={(e) =>
                setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border-2 p-3 rounded-2xl bg-amber-50  focus:ring-2 focus:outline-none focus:ring-machineBlue"
                value={form.email}
                onChange={(e) => 
                  setForm({ ...form, email: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border-2 p-3 rounded-2xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-machineBlue"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border-2 p-3 rounded-2xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-machineBlue"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
              />

              <textarea
                rows="5"
                placeholder="Message"
                className="w-full border-2 p-3 rounded-2xl bg-amber-50 focus:outline-none focus:ring-2 focus:ring-machineBlue"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <button
                type="submit"
                className="w-full bg-machineBlue text-gray py-3 rounded-xl font-bold hover:bg-cyan-700  transition border"
              >
                Submit Inquiry
              </button>
            </form>

            {/* Submission Message Placeholder */}
            <p className="text-sm text-gray-500 mt-4 text-center">
              Thank you for contacting M9Vends. Our team will review your inquiry and respond shortly.
            </p>

          </div>
        </div>


        {/* ================= Section 3 – Map ================= */}
        <div className="mt-24">
          <h3 className="text-2xl font-heavitas text-machineBlue text-center mb-6">
            Visit Our Location
          </h3>

          <div className="w-full h-400px border rounded-xl overflow-hidden">
            <iframe
              title="M9Vends Location"
              src="https://www.google.com/maps?q=66%20Silver%20Stud%20Race%20Course%20Road%20Indore&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;