import SecondHeader from "@/components/secondheader";

const PaperPage = () => {
  return (
    <div>
      <SecondHeader title={"CALL FOR PAPERS"} />

      <div className="md:px-20 px-5 md:py-10 py-5 text-black">

        {/* Theme Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-lg text-center mb-10">
          <h1 className="md:text-3xl text-xl font-bold">
            Intelligent Synergy: Bridging AI, Computing, and Forensic Excellence
          </h1>
          <p className="mt-3 text-sm md:text-base">
            ICTCon 2026 invites researchers, academicians, and industry professionals
            to submit original, high-quality research focusing on Advanced Computing
            and Forensic Intelligence.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {[
            {
              title: "AI-Driven Intelligence",
              focus: "Topics of interest include, but are not limited to:",
              points: [
                "Pattern Recognition and Data Analytics using ML/DL Algorithms ",
                "LLMs and Generative AI",
                "Intelligence for Multimedia and Deepfake Forensics",
                "Biometric and Spoofing",
                "Adversarial Machine Learning",
                "Intelligent Agents and Decision Support Systems",
              ],
            },
            {
              title: "Intelligent Vision & Sensory Systems",
              focus: "Topics of interest include, but are not limited to:",
              points: [
                "Computer Vision and Image Processing",
                "Multimedia Analysis",
                "Visual Forensics",
                "Sensor Fusion and Multimodal Perception",
                "Remote Sensing and Geospatial Intelligence",
                "Medical and Computational Imaging",
                "Intelligent Surveillance and Activity Recognition",
                "AR/VR for Simulation and Reconstruction",
                "Vision for Robotics, Drones, and Autonomous Systems",
                "Maritime Visual Intelligence",
              ],
            },
            {
              title: "Cyber Security, Digital Forensics and Threat Intelligence",
              focus: "Topics of interest include, but are not limited to:",
              points: [
                "Cyber Security and Digital Forensics",
                "Malware Analysis and Reverse Engineering",
                "Network Security and Threat Intelligence",
                "Intrusion Detection and Threat Hunting",
                "Edge and IoT Security",
                "Cryptography and Secure Algorithms ",
                "Mobile and Device Forensics",
                "Secure Software Systems and DevSecOps",
              ],
            },
          ].map((track, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 font-semibold">
                {track.title}
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="italic text-sm mb-3 text-gray-600">
                  {track.focus}
                </p>

                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  {track.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

        </div>

      </div>

      <div className="h-32"></div>
    </div>
  );
};

export default PaperPage;