import SecondHeader from "@/components/secondheader";
import { FaDownload } from "react-icons/fa";

type ScheduleItem = {
  time: string;
  title: string;
  details?: string[];
  agenda?: string[];
  tone?: "keynote" | "sessions" | "workshop";
};

const schedule: { date: string; items: ScheduleItem[] }[] = [
  {
    date: "Day 1 - Monday, 2nd November 2026",
    items: [
      { time: "8:30-9:45 AM", title: "Registration and Welcome Tea" },
      {
        time: "9:45-11:10 AM",
        title: "Inaugural Ceremony",
        agenda: [
          "Arrival of dignitaries",
          "Lighting of the lamp and invocation",
          "Welcome address by the Organizing Chairs",
          "Conference overview by the Conference Chair",
          "Addresses by the Chief Guest, Director of IIT Goa, Campus Director of NFSU Goa, and Vice-Chancellor of Goa University",
          "Address by the General Chair",
        ],
      },
      { time: "11:10-11:25 AM", title: "High Tea / Networking" },
      {
        time: "11:25 AM-12:10 PM",
        title: "Keynote Talk 1",
        details: [
          "Prof. Sebastiano Battiato, University of Catania, Italy",
          "The Mirage Problem: When AI-Generated Content Breaks Reality - and How Science Fights Back",
        ],
        tone: "keynote",
      },
      {
        time: "12:10-12:55 PM",
        title: "Keynote Talk 2",
        details: [
          "Dr. Gaurav Pandey, Texas A&M University (TAMU), United States",
          "Autonomous Vehicles: From DARPA Challenges to Robotaxis",
        ],
        tone: "keynote",
      },
      { time: "1:00-2:15 PM", title: "Lunch Break" },
      {
        time: "2:15-3:00 PM",
        title: "Keynote Talk 3",
        details: [
          "Dr. Aparna Akula, Scientist-F, CSIR-CSIO, Chandigarh",
          "Intelligent Thermal Imaging System and its Applications",
        ],
        tone: "keynote",
      },
      {
        time: "3:00-4:00 PM",
        title: "Parallel Paper Session I",
        details: ["Hall 1, Hall 2, and Hall 3"],
        tone: "sessions",
      },
      { time: "4:00-4:15 PM", title: "Tea / Networking" },
      {
        time: "4:15-5:15 PM",
        title: "Parallel Paper Session II",
        details: ["Hall 1, Hall 2, and Hall 3"],
        tone: "sessions",
      },
      { time: "5:15-5:30 PM", title: "Day 1 Summary and Announcements" },
      { time: "5:45-10:30 PM", title: "Gala Dinner and Networking" },
    ],
  },
  {
    date: "Day 2 - Tuesday, 3rd November 2026",
    items: [
      { time: "8:45-9:15 AM", title: "Registration and Welcome Tea" },
      {
        time: "9:15-10:00 AM",
        title: "Industrial Talk 1: Mr. Tanmay Bandodkar",
        details: ["IT and HPC Solutions by DIGISol"],
        tone: "keynote",
      },
      {
        time: "10:00-11:00 AM",
        title: "Parallel Paper Session III",
        details: ["Hall 1, Hall 2, and Hall 3"],
        tone: "sessions",
      },
      { time: "11:00-11:30 AM", title: "Tea / Networking" },
      {
        time: "11:30 AM-12:30 PM",
        title: "Parallel Paper Session IV",
        details: ["Hall 1, Hall 2, and Hall 3"],
        tone: "sessions",
      },
      {
        time: "12:30-1:15 PM",
        title: "Keynote Talk 4",
        details: [
          "Dr. Biplab Banerjee, Centre of Machine Intelligence & Data Science (MINDS), IIT Bombay",
          "The JEPA Paradigm in Remote Sensing: Bridging Multimodal Gaps, Sensor Uncertainty, and Structural Priors",
        ],
        tone: "keynote",
      },
      { time: "1:15-2:30 PM", title: "Lunch Break" },
      {
        time: "2:30-3:15 PM",
        title: "Keynote Talk 5",
        details: [
          "Prof. Sharad Sinha, Indian Institute of Technology Goa",
          "Complementary Relationship Between AI and Computing Systems Design",
        ],
        tone: "keynote",
      },
      {
        time: "3:15-4:30 PM",
        title: "MATLAB Workshop: Mr. Nikhil Sonavane",
        details: [
          "AI+ MedTech: From Medical Images to Intelligent Clinical Research Workflows",
        ],
        tone: "workshop",
      },
      {
        time: "4:30-5:00 PM",
        title: "Tea / Networking and Day 2 Announcements",
      },
      { time: "6:30-9:00 PM", title: "Cultural Program and Dinner" },
    ],
  },
  {
    date: "Day 3 - Wednesday, 4th November 2026",
    items: [
      {
        time: "9:15-10:00 AM",
        title: "Keynote Talk 6",
        details: [
          "Dr. V S Samy, NCPOR Goa, Ministry of Earth Science, India",
          "Advancing Antarctic Weather and Climate Research through Artificial Intelligence and Machine Learning",
        ],
        tone: "keynote",
      },
      {
        time: "10:00-11:00 AM",
        title: "Parallel Paper Session V",
        details: ["Hall 1, Hall 2, and Hall 3"],
        tone: "sessions",
      },
      { time: "11:00-11:30 AM", title: "Tea / Networking" },
      {
        time: "11:30 AM-12:00 PM",
        title: "Keynote Talk 7",
        details: [
          "Mr. Parshu Ram Dhungyel",
          "Smart Greenhouse Automation System: An IoT-Based Mobile and Web Platform for Monitoring and Control",
        ],
        tone: "keynote",
      },
      {
        time: "12:00-1:00 PM",
        title: "Keynote Talk 8",
        details: [
          "Prof. Manish Kumar, IIIT Allahabad, India",
          "Gen-AI Pipeline in Data Analytics",
        ],
        tone: "keynote",
      },
      { time: "1:00-2:15 PM", title: "Lunch Break" },
      {
        time: "2:15-3:30 PM",
        title: "Industrial Talk 2: Dr. Prashant Aparajeva",
        details: [
          "AI/ML & Computer Vision Expert, London, UK",
          "Learning by Doing: An Intuitive Journey into Reinforcement Learning",
        ],
        tone: "keynote",
      },
      {
        time: "3:30-4:15 PM",
        title: "Valedictory Session",
        agenda: [
          "Conference highlights and statistics",
          "Best Paper / Best Presentation / Recognition Awards",
          "Organizing Chair's Report",
          "Valedictory Address",
          "Vote of Thanks",
        ],
      },
      {
        time: "4:15-4:30 PM",
        title: "Formal Closing of ICTCon 2026 and Group Photo",
      },
      { time: "4:30 PM", title: "Tea / Networking" },
    ],
  },
];

const toneClasses = {
  keynote: "bg-[#fffaf0] text-[#765b00]",
  sessions: "bg-[#f4f8ed] text-[#466d10]",
  workshop: "bg-[#f0f7fb] text-[#285c78]",
};

const SchedulePage = () => (
  <div className="relative">
    <div className="relative z-10">
      <SecondHeader title="SCHEDULE" />

      <main className="flex w-full justify-center px-4 pb-14">
        <div className="mt-8 w-full max-w-6xl md:mt-10">
          <div className="mb-8 text-center md:mb-10">
            <h1 className="text-2xl font-bold text-[#17365d] md:text-3xl">
              ICTCon 2026 Program Schedule
            </h1>
            <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-[#3d6f91]" />
          </div>

          <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-[#d7e0e7] bg-white p-5 shadow-sm sm:flex-row">
            <div>
              <h2 className="text-lg font-semibold text-[#17365d]">
                Conference Programme
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Download the full conference booklet, including the technical programme.
              </p>
            </div>
            <a
              href="/ICTCon_2026_Conference_Abstract_Booklet.pdf"
              download="ICTCon_2026_Conference_Abstract_Booklet.pdf"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
            >
              <FaDownload aria-hidden="true" />
              Download Conference Booklet
            </a>
          </div>

            <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-[#d7e0e7] bg-white p-5 shadow-sm sm:flex-row">
              <div>
                <h2 className="text-lg font-semibold text-[#17365d]">
                  Conference Schedule
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  View the full program below or download the schedule for offline use.
                </p>
              </div>
              <a
                href="/ICTCon_2026_Program%20Schedule.pdf"
                download="ICTCon_2026_Program_Schedule.pdf"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              >
                <FaDownload aria-hidden="true" />
                Download Schedule PDF
              </a>
            </div>

            {/* =====================================================
                DAY 1
            ====================================================== */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[#17365d] text-center mb-5">
                Day 1 – Monday, 2 November 2026
              </h2>

              <div className="overflow-hidden rounded-xl border border-[#d7e0e7] bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#3d6f91] text-white">
                        <th className="px-4 py-3 w-[27%] text-center font-semibold">
                          Time
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Program
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          08:30–09:30 AM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Registration &amp; Welcome Tea
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td
                          rowSpan={8}
                          className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8] align-middle"
                        >
                          09:30–11:10 AM
                        </td>

                        <td className="px-4 py-2.5 text-gray-700">
                          Arrival of Dignitaries
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Lighting of the Lamp / Invocation
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Welcome Address by Organizing Chair / Host
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Conference Overview by Conference Chair
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Address by Director, IIT Goa
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Address by Director, NFSU Goa
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Address by Chief Guest / General Chair
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Formal Inauguration
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          11:10–11:20 AM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          11:25–12:10 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 1
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          12:10–12:55 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 2
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          13:00–14:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Lunch
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          14:15–15:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 3
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          15:00–16:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Technical Sessions (Tracks-1 [66, 77, 117, 119], Track-2 [23, 145, 186, 74], Track-3 [153, 164, 180])
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          16:00–16:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          16:15–17:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium bg-[#f4f8ed]">
                          Parallel Technical Sessions (Tracks-4 [138, 151, 188], Tracks-5 [127, 109, 202], Tracks–6 [19, 99, 87])
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </section>


            {/* =====================================================
                DAY 2
            ====================================================== */}
            <section className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[#17365d] text-center mb-5">
                Day 2 – Tuesday, 3 November 2026
              </h2>

              <div className="overflow-hidden rounded-xl border border-[#d7e0e7] bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#3d6f91] text-white">
                        <th className="px-4 py-3 w-[27%] text-center font-semibold">
                          Time
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Program
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          08:45–09:15 AM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Registration/Virtual Check-in &amp; Welcome Tea
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          09:15–10:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Industrial Talk 1: DigiSol
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          10:00–11:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Technical Sessions (Tracks-1 [154, 156, 205], Tracks-2 [150, 185, 189], Tracks-3 [12, 195, 184] )
                        </td>
                      </tr>
                      
                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          11:00–11:30 AM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          11:30 AM–12:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Technical Sessions (Tracks-4 [207, 115, 167], Tracks-5 [69, 194, 88], Tracks-6 [76, 141, 78])
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          12:30 PM–13:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 4
                        </td>
                      </tr>

                     <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          13:15–14:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Lunch
                        </td>
                      </tr>
                      
                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          14:30–15:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 5
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          15:15–16:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Matlab Workshop
                        </td>
                      </tr>


                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          16:30–17:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          18:30–21:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium bg-[#f4f8ed]">
                          Cultural Program and Dinner
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </section>


            {/* =====================================================
                DAY 3
            ====================================================== */}
            <section className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-[#17365d] text-center mb-5">
                Day 3 – Wednesday, 4 November 2026
              </h2>

              <div className="overflow-hidden rounded-xl border border-[#d7e0e7] bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-[#3d6f91] text-white">
                        <th className="w-[27%] px-4 py-3 text-center font-semibold">
                          Time
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Programme
                        </th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          09:15–10:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 6
                        </td>
                      </tr>

                      
                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          10:00–11:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Technical Sessions (Tracks-1 [6, 85, 135], Tracks-2 [84, 181, 196], Tracks–3 [124, 183])
                        </td>
                      </tr>
                      
                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          11:00–11:30 AM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          11:30–12:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 7: Mr. Pashu Ram
                        </td>
                      </tr>


                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          12:00–13:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keybite Talk 8:: Prof. Manish Kumar, IIIT Allahabad
                        </td>
                      </tr>

                      
                     <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          13:00–14:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Lunch
                        </td>
                      </tr>
                   

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          14:15–15:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Industrial Talk 3
                        </td>
                      </tr>


                      
                      <tr className="border-b border-[#e1e7eb]">
                        <td
                          rowSpan={5}
                          className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8] align-middle"
                        >
                          15:30–16:15 PM
                        </td>

                        <td className="px-4 py-2.5 text-gray-700">
                          Valedictory Session: &amp; Statistics
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Best Paper / Best Presentation / Recognition
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Organizing Chair Report
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Valedictory Address
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Vote of Thanks
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          16:15-16:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700 font-medium">
                          Formal Closing of ICTCon 2026
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  </div>
);

export default SchedulePage;
