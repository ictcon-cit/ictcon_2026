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

          {schedule.map((day) => (
            <section key={day.date} className="mb-12 last:mb-10">
              <h2 className="mb-5 text-center text-xl font-semibold text-[#17365d] md:text-2xl">
                {day.date}
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
                      {day.items.map((item) => (
                        <tr
                          key={`${item.time}-${item.title}`}
                          className="border-b border-[#e1e7eb] last:border-b-0"
                        >
                          <td className="whitespace-nowrap bg-[#f3f6f8] px-4 py-3 align-top font-medium text-[#334e68]">
                            {item.time}
                          </td>
                          <td
                            className={`px-4 py-3 text-gray-700 ${
                              item.tone ? toneClasses[item.tone] : ""
                            }`}
                          >
                            <p className="font-medium">{item.title}</p>
                            {item.details && (
                              <div className="mt-1 space-y-1 text-sm font-normal text-gray-600">
                                {item.details.map((detail) => (
                                  <p key={detail}>{detail}</p>
                                ))}
                              </div>
                            )}
                            {item.agenda && (
                              <ul className="mt-1 list-inside list-disc space-y-1 text-sm font-normal text-gray-600">
                                {item.agenda.map((entry) => (
                                  <li key={entry}>{entry}</li>
                                ))}
                              </ul>
                            )}
                          </td>
                        </tr>
                      ))}
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
