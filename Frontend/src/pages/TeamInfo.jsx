import founder from "../assets/images/Lavish_photo.jpeg";
import member1 from "../assets/images/rishi_photo.jpeg";
import member2 from "../assets/images/Dugesh_Photo.jpeg";
import member3 from "../assets/images/Disha_soni.jpeg";
import member4 from "../assets/images/Manya_photo.jpg";
import member5 from "../assets/images/Lokesh_photo.jpeg";
import member6 from "../assets/images/Shruti_photo.jpg";
import member7 from "../assets/images/jatin_photo.jpeg";
import member8 from "../assets/images/Bhavya_photo.jpg";
import member9 from "../assets/images/Aditya_photo.jpg";
//
//
//
const TeamInfo = () => {
  return (
    <section className="bg-white py-16 px-6 animate-fadeIn bg-linear-to-br from-green-100 via-teal-100 to-green-100">
      <div className="max-w-6xl mx-auto text-center">

        {/* Page Heading */}
        <h1 className="text-4xl font-bold text-[#008BD1] mb-4">
          Our Leadership & Core Team
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          M9Vends is driven by innovation, automation engineering excellence, and
          a strong leadership structure designed to scale intelligent vending solutions globally.
        </p>

        {/* ================= Founder Level ================= */}
        <div className="mt-16 flex flex-col items-center">
          <img
            src={founder}
            alt="Founder"
            className="w-50 h-50 rounded-full border-4 object-cover shadow-lg  "/>
            <h2 className="text-3xl font-bold text-[#028bcf] mb-2 mt-4">
            Lavish Goyal
          </h2>
          <h2 className="text-2xl font-bold mt-4 text-[#008BD1]">
           Founder of M9vends and strategist officer   </h2>

          <p className="text-gray-700 max-w-3xl mt-3">
            Our mission is to revolutionize the Indian street food landscape by engineering a smart, automated, and hygienic ecosystem driven by IoT-enabled and AI-powered vending systems. By merging electronics core architecture with data-driven operations, we aim to standardize local flavors and build a scalable franchise platform capable of global expansion. Through dedicated product innovation, business model structuring, and strategic leadership, we are transforming traditional vending into a high-tech, structured industry ready for international growth.
          </p>
        </div>

        {/* Connector Line */}
        <div className="w-px bg-gray-300 h-12 mx-auto mt-6"></div>

        {/* ================= Core Team Level ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mt-10">

          {/* Member 1 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md m9-card">
            <img
              src={member1}
              alt="Core Member"
              className="w-35 h-35 rounded-full border-3 border-[#008BD1] object-cover"
            />
            <h3 className="font-bold text-lg mt-3">
                Rishi Mishra
            </h3>
            <h3 className="font-bold text-lg mt-3">Head of Engineering</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
             Our goal is to build a technologically advanced, scalable vending ecosystem by integrating IoT, automation, and smart control systems into our products. We are committed to setting high standards for hygiene and operational reliability while aligning our technical innovations with evolving market demands to drive long-term brand growth. To achieve this, we lead product development and system integration, bridging engineering solutions with strategic marketing to position ourselves as an innovation-driven industry leader. By fostering digital partnerships and data-driven decision-making, we ensure effective communication with our stakeholders and investors.
            </p>
          </div>

          {/* Member 2 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md m9-card">
            <img
              src={member2}
              alt="Core Member"
              className="w-35 h-35 rounded-full border-3 border-[#008BD1] object-cover"
            />
            <h3 className="font-bold text-lg mt-3">
                Durgesh Varule
            </h3>
            {/* <h3 className="font-bold text-lg mt-3">AI & Software Lead</h3> */}
            <p className="text-sm text-gray-600 mt-2 text-center">
              I am architecting a centralized IoT ecosystem that bridges the gap between physical hardware and cloud intelligence. By designing a modular, secure hybrid architecture, I enable real-time device monitoring, remote OTA updates, and a structured data framework optimized for AI integration. My work focuses on building a scalable "Smart Food Network" that leverages edge computing and centralized dashboards to ensure a reliable, data-driven solution for the business
            </p>
          </div>

          {/* Member 4 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md m9-card">
            <img
              src={member3}
              alt="Core Member"
              className="w-35 h-35 rounded-full border-3 border-[#008BD1] object-cover"
            />
            <h3 className="font-bold text-lg mt-3">HR intern & Head - Software Team </h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              As the HR Intern & Head of the Software Team, I bridge the gap between people operations and technical execution to build a high-performing, accountable culture. I streamline workflows and track progress to ensure the existing team consistently delivers quality outcomes aligned with our startup’s long-term vision. By championing continuous learning and proactive problem-solving, I foster a growth-oriented environment where collaboration and individual ownership drive our collective success.
            </p>
          </div>
            
            {/* Member 4 */}
             <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md m9-card">
            <img
              src={member4}
              alt="Core Member"
              className="w-35 h-35 rounded-full border-3 border-[#008BD1] object-cover"
            />
            <h3 className="font-bold text-lg mt-3">Manya Shrivastava </h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              At MadhaVend, I am transforming traditional vending into an intelligent, interactive experience by integrating Edge AI and IoT. Working within the AI-ML team, I leverage embedded systems like the UNIHIKER K10 to develop face-based interactions, voice commands, and sensor-driven logic. My contribution focuses on building a seamless, "future-ready" system that combines offline AI capabilities with real-time fault detection to ensure the machines are as reliable as they are smart.
            </p>
          </div>

            {/* Member 5 */}
           <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md m9-card">
            <img
              src={member5}
              alt="Core Member"
              className="w-35 h-35 rounded-full border-3 border-[#008BD1] object-cover"
            />
            <h3 className="font-bold text-lg mt-3">Lokesh Bodhke</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              I am dedicated to fortifying our technology through AI-driven security, specifically by developing machine learning models for real-time threat and anomaly detection. By optimizing these models for Edge AI hardware like the UNIHIKER board, I ensure our systems are both intelligent and highly responsive. Beyond AI development, I actively contribute to our startup’s digital presence through web development, combining technical security expertise with cross-functional collaboration to build a safe, high-performance ecosystem
            </p>
          </div>

            {/* Member 6 */}
           <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md m9-card">
            <img
              src={member6}
              alt="Core Member"
              className="w-35 h-35 rounded-full border-3 border-[#008BD1] object-cover"
            />
            <h3 className="font-bold text-lg mt-3">Shruti Mahale</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              I am focused on elevating our startup’s digital identity by driving brand awareness and high-impact audience engagement. Through strategic content planning and trend-based execution, I manage social media operations and create compelling posts that resonate with our community. My role ensures a consistent, professional, and creative online presence, bridging the gap between brand values and audience connection to accelerate our digital growth.
            </p>
          </div>

            {/* Member 7 */}
             <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md m9-card">
            <img
              src={member7}
              alt="Core Member"
              className="w-35 h-35 rounded-full border-3 border-[#008BD1] object-cover"
            />
            <h3 className="font-bold text-lg mt-3">Jatin</h3>
            <h3 className="font-bold text-lg mt-3">Administrative Officer</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              As the Administrative Officer at M9VENDS, my primary focus is on scaling the venture into a sustainable and market-leading business. I drive long-term value by supporting innovation and ensuring the organization remains adaptable for future expansion. By taking full ownership of cross-functional responsibilities and aligning my efforts with team objectives, I am dedicated to continuous improvement and operational excellence to fuel the startup's growth
            </p>
          </div>  

            {/* Member 8 */}
             <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md m9-card">
            <img
              src={member8}
              alt="Core Member"
              className="w-35 h-35 rounded-full border-3 border-[#008BD1] object-cover"
            />
            <h3 className="font-bold text-lg mt-3">Bhavya Motwani</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              As a Web Developer, I focus on building scalable, efficient, and user-centric solutions designed to accelerate the startup’s growth. I have actively contributed to developing and refining the company’s web infrastructure, ensuring a seamless digital experience that enhances our online presence and supports evolving business needs.
            </p>
          </div>

          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow-md m9-card">
            <img
              src={member9}
              alt="Core Member"
              className="w-35 h-35 rounded-full border-3 border-[#008BD1] object-cover"
            />
            <h3 className="font-bold text-lg mt-3">Aditya</h3>
            <p className="text-sm text-gray-600 mt-2 text-center">
              I lead the material research and selection for our prototype, focusing on the intersection of structural efficiency and economic viability. By bridging sustainable theory with physical fabrication, I have identified low-cost, carbon-negative alternatives that ensure our construction is both scalable and environmentally regenerative. Through meticulous data management and innovative waste-reduction methods, I coordinate closely with mentors and the team to deliver a cost-effective machine that prioritizes environmental stewardship without compromising technical performance.
            </p>
          </div>
          



        </div>

        {/* ================= Extended Team Section ================= */}
        <div className="mt-20">
        
          <h2 className="text-3xl font-bold text-[#028bcf] mb-6">
            Extended Technical & Operations Team
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto">
            M9Vends also collaborates with multidisciplinary engineers, designers, 
            data scientists, and operations professionals to ensure scalable, 
            secure, and high-performance vending automation systems.
          </p>
        </div>

      </div>
    </section>
  );
};

export default TeamInfo;
