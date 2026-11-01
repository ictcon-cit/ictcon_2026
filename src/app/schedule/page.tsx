import SecondHeader from "@/components/secondheader";
import { FaDownload } from "react-icons/fa";

const SubmissionPage = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SecondHeader title={"SCHEDULE"} />

        <main className="w-full flex justify-center pb-14 px-4">
          <div className="w-full max-w-6xl mt-8 md:mt-10">

            {/* =====================================================
                PAGE INTRO
            ====================================================== */}
            <div className="text-center mb-8 md:mb-10">
              <h1 className="text-2xl md:text-3xl font-bold text-[#17365d]">
                ICTCon 2026 Program Schedule
              </h1>

              <p className="mt-1.5 text-sm text-gray-500">
                Tentative Schedule
              </p>

              <div className="w-16 h-[2px] bg-[#3d6f91] mx-auto mt-4 rounded-full" />
            </div>

            <div className="mb-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-[#d7e0e7] bg-white p-5 shadow-sm sm:flex-row">
              <div>
                <h2 className="text-lg font-semibold text-[#17365d]">
                  Conference Schedule
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  View the programme below or download the conference booklet, including the full schedule.
                </p>
              </div>
              <a
                href="/ICTCon_2026_Conference_Abstract_Booklet%20%282%29.pdf"
                download="ICTCon_2026_Conference_Abstract_Booklet.pdf"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              >
                <FaDownload aria-hidden="true" />
                Download Programme Schedule
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
                          08:30–09:45 AM
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
                          09:45–11:10 AM
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
                          Address by Chief Guest and Director, IIT Goa
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Address by Campus Director, NFSU Goa
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Address by Vice Chancellor, Goa University
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Address by the General Chair
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          11:10–11:25 AM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          High Tea / Networking
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          11:25–12:10 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 1: Prof. Sebastiano Battiato, University of Catania, Italy — The Mirage Problem: When AI-Generated Content Breaks Reality
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          12:10–12:55 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 2: Dr. Gaurav Pandey, Texas A&amp;M University — Autonomous Vehicles: From DARPA Challenges to Robotaxis
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          1:00–2:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Lunch Break
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          2:15–3:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 3: Dr. Aparna Akula, CSIR-CSIO, Chandigarh — Intelligent Thermal Imaging System and its Applications
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          3:00–4:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Paper Session I (Halls 1, 2, and 3)
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          4:00–4:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          4:15–5:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium bg-[#f4f8ed]">
                          Parallel Paper Session II (Halls 1, 2, and 3)
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          5:15–5:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Day 1 Summary and Announcements
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          5:45–10:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium bg-[#f4f8ed]">
                          Gala Dinner and Networking
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
                          Registration and Welcome Tea
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          09:15–10:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Industrial Talk 1: Mr. Tanmay Bandodkar — IT and HPC Solutions by DIGISol
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          10:00–11:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Paper Session III (Halls 1, 2, and 3)
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
                          Parallel Paper Session IV (Halls 1, 2, and 3)
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          12:30–1:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 4: Dr. Biplab Banerjee, IIT Bombay — The JEPA Paradigm in Remote Sensing
                        </td>
                      </tr>

                     <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          1:15–2:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Lunch
                        </td>
                      </tr>
                      
                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          2:30–3:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 5: Prof. Sharad Sinha, IIT Goa — Complementary Relationship Between AI and Computing Systems Design
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          3:15–4:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          MATLAB Workshop: Mr. Nikhil Sonavane — AI+ MedTech: From Medical Images to Intelligent Clinical Research Workflows
                        </td>
                      </tr>


                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          4:30–5:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking and Day 2 Announcements
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          6:30–9:00 PM
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
                        <th className="px-4 py-3 w-[27%] text-center font-semibold">
                          Time
                        </th>
                        <th className="px-4 py-3 text-left font-semibold">
                          Program
                        </th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          09:15–10:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 6: Dr. V S Samy, NCPOR Goa — Advancing Antarctic Weather and Climate Research through AI and Machine Learning
                        </td>
                      </tr>

                      
                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          10:00–11:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Paper Session V (Halls 1, 2, and 3)
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
                          11:30 AM–12:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 7: Mr. Parshu Ram Dhungyel — Smart Greenhouse Automation System
                        </td>
                      </tr>


                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          12:00–1:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 8: Prof. Manish Kumar, IIIT Allahabad — Gen-AI Pipeline in Data Analytics
                        </td>
                      </tr>

                      
                     <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          1:00–2:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Lunch Break
                        </td>
                      </tr>
                   

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          2:15–3:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Industrial Talk 2: Dr. Prashant Aparajeva — Learning by Doing: An Intuitive Journey into Reinforcement Learning
                        </td>
                      </tr>


                      
                      <tr className="border-b border-[#e1e7eb]">
                        <td
                          rowSpan={5}
                          className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8] align-middle"
                        >
                          3:30–4:15 PM
                        </td>

                        <td className="px-4 py-2.5 text-gray-700">
                          Valedictory Session: Conference Highlights and Statistics
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Best Paper / Best Presentation / Recognition
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-gray-700">
                          Organizing Chair’s Report
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
                          4:15–4:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700 font-medium">
                          Formal Closing of ICTCon 2026 and Group Photo
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          4:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
              </div>
            </section>




            {/* =====================================================
                FOOTNOTE
            ====================================================== */}
            <p className="text-center text-xs md:text-sm text-gray-500 mt-5">
              * The schedule is tentative and subject to change.
            </p>

          </div>
        </main>
      </div>
    </div>
  );
};

export default SubmissionPage;
