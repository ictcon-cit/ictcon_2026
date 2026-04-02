const ImportantDates = () => {
  return (
    <section className="bg-[#fffbe6] py-10">
      <div className="mx-auto max-w-6xl px-3">
        <div className="overflow-hidden rounded-lg bg-white shadow-md">
          <table className="w-full table-fixed text-sm md:text-base">
            {/* Fixed column alignment */}
            <colgroup>
              <col className="w-[70%]" />
              <col className="w-[30%]" />
            </colgroup>

            <tbody>
              {[
                ["Paper Submission Starts", "1st April, 2026"],
                ["Last Date of Paper Submission", "5th May, 2026"],
                ["Notification of Acceptance", "10th July, 2026"],
                ["Author Registration", "5th August, 2026"],
                ["Date of Conference (Hybrid Mode)", "2–4 November, 2026"],
              ].map(([label, date], index) => (
                <tr
                  key={index}
                  className="border-b last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {label}
                  </td>

                  <td className="px-6 py-4 text-right font-semibold text-gray-900 tabular-nums">
                    {date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
