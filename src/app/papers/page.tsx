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
              title: "Artificial Intelligence and Intelligent Analytics",
              focus: "Topics of interest include, but are not limited to:",
              points: [
                "Machine Learning and Deep Learning Algorithms",
                "Pattern Recognition and Intelligent Data Analytics",
                "Large Language Models and Generative AI for Security and Forensics",
                "Explainable and Trustworthy AI",
                "Adversarial Machine Learning and Robust AI",
                "Intelligent Agents and Decision Support Systems",
                "AI for Authentication and Biometric Intelligence",
                "AI Applications in Digital Investigation and Threat Detection"
              ],
            },
            {
              title: "Computer Vision, Multimedia Intelligence and Forensic Imaging",
              focus: "Topics of interest include, but are not limited to:",
              points: [
                "Computer Vision and Image Processing",
                "Multimedia Analysis and Content Understanding",
                "Deepfake Detection and Multimedia Forensics",
                "Visual Forensics and Image Authentication",
                "Intelligent Surveillance and Activity Recognition",
                "Biometric Recognition and Anti-Spoofing",
                "Vision-Based Autonomous Systems and Drone Intelligence",
                "3D Vision and Forensic Scene Reconstruction",
                "AI for Remote Visual Monitoring and Situational Awareness"
              ],
            },
            {
              title: "Cyber Security, Digital Forensics and Threat Intelligence",
              focus: "Topics of interest include, but are not limited to:",
              points: [
                "Cybersecurity and Cyber Defense",
                "Malware Analysis and Reverse Engineering",
                "Network Security and Threat Intelligence",
                "Intrusion Detection and Threat Hunting",
                "Edge, IoT and Embedded Systems Security",
                "Mobile and Cloud Forensics",
                "Secure AI Systems and Adversarial Defense",
                "Cyber Threat Intelligence and Incident Response",
                "Privacy-Preserving Intelligent Systems"
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