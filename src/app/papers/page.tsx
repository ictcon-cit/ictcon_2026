import SecondHeader from "@/components/secondheader";

const PaperPage = () => {
  return (
    <div>
      <SecondHeader title={"CALL FOR PAPERS"} />

      <div className="md:px-20 px-5 md:py-10 py-5 text-black">

        {/* Theme Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-xl shadow-lg text-center mb-10">
          <h1 className="md:text-3xl text-xl font-bold"> 
            Intelligent Synergy: Bridging AI, Computing, vision and Forensic Excellence
          </h1>
          <p className="mt-3 text-sm md:text-base">
            ICTCon 2026 invites researchers, academicians, and industry professionals
            to submit original, high-quality research focusing on Advanced Computing,
            Intelligence and Technologies.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Track Card */}
          {[
            {
              title: "Track 1: AI-Driven Intelligence",
              // focus: "Where Intelligence meets Investigation.",
              points: [
                // "Multimedia and Deepfake Forensics",
                // "Biometric Identification and Spoofing Detection",
                // "AI for Criminal Profiling and Pattern Matching",
                // "Explainable AI (XAI)",
                // "Digital Trace Analysis in LLMs",
                
                "Machine Learning and Deep Learning Algorithms", 
                "Large Language Models and Generative AI",
                "Explainable and Trustworthy AI",
                "Pattern Recognition and Data Analytics",
                "Multimedia and Deepfake Forensics Intelligence", 
                "Biometric Identification and Spoofing Detection",
                "Social Media Analytics and Intelligence",
                "Adversarial Machine Learning",
                "Intelligent Agents and Decision Support Systems",
              ],
            },
            // {
            //   title: "Track 2: Secure and Resilient Computing",
            //   focus: "Infrastructures that resist and report.",
            //   points: [
            //     "High-Performance Computing",
            //     "Cloud & Edge Security",
            //     "Quantum-Resistant Cryptography",
            //     "Blockchain for Data Integrity",
            //     "Fault-tolerant Systems",
            //   ],
            // },
            {
              title: "Track 2: Intelligent Vision & Sensory Systems",
              // focus: "Processing and Verifying the Physical World.",
              points: [
                // "Image & Video Enhancement",
                // "HCI in Investigative Tools",
                // "Computer Vision Applications",
                // "Remote Sensing",
                // "AR/VR Crime Scene Reconstruction",
                "Computer Vision and Image Processing",
                "Video Analytics and Multimedia Analysis",
                "Visual Forensics",
                "Sensor Fusion and Multimodal Perception",
                "Remote Sensing and Geospatial Intelligence",
                "Medical and Computational Imaging",
                "Intelligent Surveillance and Activity Recognition",
                "AR/VR based Simulation and Reconstruction",
                "Vision for Robotics, Drones, and Autonomous Systems",
                "Underwater, Aerial, and Maritime Visual Intelligence",
              ],
            },
            // {
            //   title: "Track 4: Data Science and Linguistic Engineering",
            //   focus: "Extracting Truth from Information.",
            //   points: [
            //     "NLP & Legal Analysis",
            //     "Sentiment Analysis",
            //     "Adversarial ML",
            //     "Big Data Analytics",
            //     "Information Retrieval",
            //   ],
            // },
            // {
            //   title: "Track 5: Next-Gen Communication",
            //   focus: "Connectivity with Security.",
            //   points: [
            //     "5G/6G Security",
            //     "IoT & Drone Forensics",
            //     "Autonomous Systems",
            //     "Underwater Communication",
            //     "Quantum Cryptography",
            //   ],
            // },
            {
              title: "Track 3: Cyber Security & Forensics",
              // focus: "Defending the Digital World.",
              points: [
                // "IDS/IPS Systems",
                // "Cloud & IoT Security",
                // "DevSecOps",
                // "Malware Analysis",
                // "Threat Intelligence",

                "Cyber Security and Digital Forensics",
                "Malware Analysis and Reverse Engineering",
                "Network Security and Threat Intelligence",
                "Intrusion Detection and Threat Hunting",
                "Edge, and IoT Security",
                "Cryptography and Secure Communication",
                "Mobile and Device Forensics",
                "Secure Software Systems and DevSecOps",
                "Resilient and Secure Computing Infrastructures",
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
