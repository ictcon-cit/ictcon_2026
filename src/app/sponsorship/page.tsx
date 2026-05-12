"use client";

import SecondHeader from "@/components/secondheader";

export default function SponsorshipPage() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SecondHeader title={"SPONSORSHIP"} />

        <main className="w-full flex justify-center pb-16 px-4">
          <div className="w-full max-w-6xl mt-10 space-y-10">

            {/* ===== Top Description ===== */}
            <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed">
              ICTCon 2026 is a premier international conference focused on AI, Advanced Computing, Computer Vision, Next-Gen Communication,
              Image Processing, and Forensic Excellence. 
            </p>

            {/* ===== Cards Section ===== */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white shadow-md rounded-xl border-l-4 border-red-500 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Why Sponsor Us?
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  With 250–300+ expected participants, sponsoring ICTCon gives
                  you a unique platform to showcase products, recruit talent,
                  and build collaborations through plenary talks, sessions, and workshops.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-xl border-l-4 border-blue-500 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  Networking Opportunities
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reserve demo tables, sponsor sessions, or deliver talks.
                  Sponsorship tiers provide visibility via website, booths,
                  and direct interaction with the research community.
                </p>
              </div>
            </div>

            {/* ===== Table Section ===== */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-red-500 pl-3">
                Sponsorship Tiers & Benefits
              </h2>

              <div className="overflow-x-auto rounded-lg shadow">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="bg-gradient-linear text-white">
                    <tr>
                      <th className="p-3">Offerings</th>
                      <th className="p-3">Bronze</th>
                      <th className="p-3">Silver</th>
                      <th className="p-3">Gold</th>
                      <th className="p-3">Diamond</th>
                      <th className="p-3">Platinum</th>
                      <th className="p-3 bg-green-600">Premier</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white text-gray-700">
                    <tr className="border-t">
                      <td className="p-3 font-medium">INR (excl. GST)</td>
                      <td className="p-3">&lt; 50,000</td>
                      <td className="p-3">50k – 75k</td>
                      <td className="p-3">75k – 1L</td>
                      <td className="p-3">1L – 1.5L</td>
                      <td className="p-3">1.5L – 2L</td>
                      <td className="p-3">&gt; 2L</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-3 font-medium">Free Registrations</td>
                      <td className="p-3">-</td>
                      <td className="p-3">1</td>
                      <td className="p-3">2</td>
                      <td className="p-3">3</td>
                      <td className="p-3">4</td>
                      <td className="p-3">5</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-3 font-medium">ICTCon2026 Website Visibility</td>
                      <td className="p-3">✓</td>
                      <td className="p-3">✓</td>
                      <td className="p-3">✓</td>
                      <td className="p-3">✓</td>
                      <td className="p-3">✓</td>
                      <td className="p-3">✓</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-3 font-medium">Exhibit Booth</td>
                      <td className="p-3">On availability</td>
                      <td className="p-3">✓</td>
                      <td className="p-3">✓</td>
                      <td className="p-3">✓</td>
                      <td className="p-3">✓</td>
                      <td className="p-3">Preferred</td>
                    </tr>

                    <tr className="border-t">
                      <td className="p-3 font-medium">Session Talk</td>
                      <td className="p-3">-</td>
                      <td className="p-3">10 min</td>
                      <td className="p-3">15 min</td>
                      <td className="p-3">20 min</td>
                      <td className="p-3">25 min</td>
                      <td className="p-3">35 min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ===== Contact Section ===== */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Interested in Sponsoring?
              </h3>

              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Please send us your organization’s details. Our team will respond
                within <span className="font-semibold">5 working days</span>.
              </p>

              <a
                href="mailto:ictcon2026@cit.ac.in"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
              >  ictcon@iitgoa.ac.in
              <br />
                conf.ictcon26@gmail.com
              </a>
            </div>

            {/* ===== Note ===== */}
            <p className="text-xs text-gray-500 text-center">
              * Free registration includes access to all sessions and networking events.
            </p>

          </div>
        </main>
      </div>
    </div>
  );
}
