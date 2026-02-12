
import { useState } from "react";
import { applyForCareer } from "../services/application.service";

const Careers = () => {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    resume_drive_url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // console.log("FORM DATA:", Form);

    try {
      await applyForCareer(Form);
      alert("Application submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        role: "",
        resume_drive_url: "",
      });
    } catch (err) {
      console.error("Career Submit Error:", err.response?.data || err.message);
      alert("Submission failed!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="py-24 bg-white bg-linear-to-br from-green-100 via-teal-100 to-green-100 animate-fadeIn">
      <div className="container mx-auto px-6 ">

        {/* ================= Section 1 – Header ================= */}
        <div className="text-center max-w-3xl mx-auto ">
          <h1 className="text-4xl font-heavitas text-machineBlue tracking-wide">
            Careers at M9Vends
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Join us in building the future of automated street food systems.
          </p>
        </div>


        {/* ================= Section 2 – Application Form ================= */}
        <div className="mt-16 max-w-xl mx-auto border rounded-2xl shadow-md p-8 hover:shadow-2xl transition m9-card">

          <h2 className="text-xl font-heavitas text-machineBlue text-center">
            Apply Now
          </h2>

        <form
          className="mt-10 p-8 rounded-xl" onSubmit={handleSubmit}>
            
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={Form.name}
            onChange={handleChange}
            className="w-full border-2 p-3 rounded-2xl  bg-amber-50 mb-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={Form.email}
            // onChange={handleChange}
            onChange={handleChange}
            className="w-full border-2 p-3 rounded-2xl bg-amber-50 mb-4"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={Form.phone}
            // onChange={handleChange}
            onChange={handleChange}
            className="w-full border-2 p-3 rounded-2xl bg-amber-50 mb-4"
          />

          <select
            name="role"
            required
            value={Form.role}
            // onChange={handleChange}
            onChange={handleChange}
            className="w-full border-2 p-3 rounded-2xl  bg-amber-50 mb-4"
          >
            <option value="">Select Role</option>
            <option>Web Development</option>
            <option>Design (SolidWorks / AutoCAD)</option>
            <option>Electronics Core Systems</option>
            <option>AI & ML Integration</option>
            <option>Management</option>
            <option>Marketing</option>
            <option>Material Science</option>
          </select>

          {/* <input
            type="file"
            accept=".pdf,.jpg,.jpeg"
            onChange={handleFile}
            className="w-full border p-3 rounded mb-4"
          /> */}

          <input
            type="text"
            name="resume_drive_url"
            placeholder="Resume Google Drive URL"
            required
            value={Form.resume_drive_url}
            // onChange={handleChange}
            onChange={handleChange}
            className="w-full border-2 p-3  mb-4 rounded-2xl  bg-amber-50"
          />
           

          <button
            type="submit"
            disabled={loading}
            className="w-full border-2 text-black py-3 rounded-2xl font-bold hover:bg-cyan-700 transition"
          >
            {loading ? "Submitting..." : "Apply Now"}
          </button>
        </form>
        </div>


        {/* ================= Section 3 – Hiring Process ================= */}
        <div className="mt-24">

          <h3 className="text-2xl font-heavitas text-machineBlue text-center">
            Our Hiring Process
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mt-12 text-center">

            {/* Step 1 */}
            <div className="p-6 border rounded-xl shadow-sm m9-card">
              <h4 className="font-bold text-lg">Level 1: Problem Statement Project Round</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Our team evaluates your profile and portfolio.</p>
                <p className="mt-2 text-gray-600 text-sm">
                Purpose : To evaluate practical thinking, creativity, and execution ability. </p>
                <p className="mt-2 text-gray-600 text-sm">
                What Happens : Candidates receive a real-world problem statement related to: </p>
                <ul className="mt-2 text-gray-600 text-left text-sm list-disc list-inside">
                  <li> Smart automation systems</li>
                  <li> IoT integration</li>
                  <li>Sustainable engineering</li>
                  <li>User experience design</li>
                  <li>Business scalability</li>
                  <p className="mt-2 mb-2">The task must be completed within a given timeframe</p>
                  <p className="mt-2 mb-2">Submission can include:</p>
                  <li>Concept notes</li>
                  <li>Wireframes / system architecture</li>
                  <li> Technical approach</li>
                  <li>Business logic explanation</li>
                  <li>Prototype (if applicable)</li>
                  <p className="mt-2 mb-2">What We Evaluate:</p>
                  <li>Problem-solving approach</li>
                  <li>Innovation & originality</li>
                  <li>Technical clarity</li>
                  <li>Practical feasibility</li>
                  <li> Alignment with M9Vends vision</li>
                  <li>Communication & presentation skills</li>
                  <p className="mt-2 mb-2">We believe real capability is shown through execution, not just credentials.</p>
                </ul>
              
            </div>

            {/* Step 2 */}
            <div className="p-6 border rounded-xl shadow-sm m9-card">
              <h4 className="font-bold text-lg">Level 2: Strategic Interview Round</h4>
              <p className="mt-2 text-gray-600 text-sm">
                Purpose : To understand mindset, long-term thinking, and cultural alignment
              </p>
              <ul className="mt-2 text-gray-600 text-left text-sm list-disc list-inside">
                <p className="mt-2 mb-2">Interview Focus Areas:</p>
                <li>Deep discussion on submitted project</li>
                <li>Technical knowledge (role-specific)</li>
                <li>Understanding of automation & technology ecosystem</li>
                <li> Adaptability and learning mindset</li>
                <li>Leadership & ownership capability</li>
                <li>Vision alignment with M9Vends mission</li>
                <p className="mt-2 mb-2"> Format:</p>
                <li>1-on-1 discussion with Founder / Core Team</li>
                <li>Technical cross-questioning</li>
                <li>Scenario-based problem solving</li>
                <li>Culture & ethics evaluation</li>
              </ul>
            </div>

            

          </div>
        </div>

      </div>
    </section>
  );
}

export default Careers;