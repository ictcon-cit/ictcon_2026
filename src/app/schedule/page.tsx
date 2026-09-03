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
                          Parallel Technical Sessions (Tracks 1–3)
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
                          Parallel Technical Sessions (Tracks 4–6)
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
                          08:45–09:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Registration/Virtual Check-in &amp; Welcome Tea
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          09:00–09:45 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 4
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          09:45–10:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          10:00–11:30 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Technical Sessions (Tracks 1–3)
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          11:30–12:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 5
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          12:15–13:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 6
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

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          14:15–15:00 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Workshop
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          15:00–16:30 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Technical Sessions (Tracks 4–6)
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          16:30–16:45 PM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                      <tr>
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          16:45–18:15 PM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium bg-[#f4f8ed]">
                          Parallel Technical Sessions (Tracks 7–9)
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
                          09:00–09:45 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 7
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          09:45–10:00 AM
                        </td>
                        <td className="px-4 py-2.5 text-gray-700">
                          Tea / Networking
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#fffaf0]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          10:00–10:45 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#765b00] font-medium">
                          Keynote Talk 8
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb] bg-[#f4f8ed]">
                        <td className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8]">
                          10:45–11:30 AM
                        </td>
                        <td className="px-4 py-2.5 text-[#466d10] font-medium">
                          Parallel Technical Sessions (Tracks 1–3)
                        </td>
                      </tr>

                      <tr className="border-b border-[#e1e7eb]">
                        <td
                          rowSpan={5}
                          className="px-4 py-2.5 text-[#334e68] font-medium bg-[#f3f6f8] align-middle"
                        >
                          11:30–12:45 PM
                        </td>

                        <td className="px-4 py-2.5 text-gray-700">
                          Conference Highlights &amp; Statistics
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
                          12:45 PM
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