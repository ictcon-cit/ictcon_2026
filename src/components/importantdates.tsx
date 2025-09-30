const ImportantDates = () => {
  return (
    <div className="relative overflow-x-auto md:px-20 px-2 md:py-5 py-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <tbody>
          <tr className="bg-white border-black outline outline-black outline-1">
            <th
              scope="row"
              className="md:px-6 md:py-4 px-2 py-1 font-bold text-gray-900 md:whitespace-nowrap wrap"
            >
              Paper Submission starts
            </th>
            <td className="md:px-6 md:py-4 px-2 py-1 font-bold">
              15th August, 2025
            </td>
          </tr>
          <tr className="bg-white border-black outline outline-black outline-1">
            <th
              scope="row"
              className="md:px-6 md:py-4 px-2 py-1 font-bold text-gray-900 md:whitespace-nowrap wrap"
            >
              Last Date of Paper Submission
            </th>
            <td className="md:px-6 md:py-4 px-2 py-1 font-bold">
              <span className="line-through text-red-600">
                15th September, 2025
              </span>
              <br />
              <span className="line-through text-red-600">
                30th September, 2025 (  Extended )
              </span>
              <br />
              <span className="text-green-700">
                12th October, 2025 <span className="text-xs">(Hard Deadline)</span>
              </span>
            </td>
          </tr>
          <tr className="bg-white border-black outline outline-black outline-1">
            <th
              scope="row"
              className="md:px-6 md:py-4 px-2 py-1 font-bold text-gray-900 md:whitespace-nowrap wrap"
            >
              Notification of Acceptance
            </th>
            <td className="md:px-6 md:py-4 px-2 py-1 font-bold">
              10th October, 2025
            </td>
          </tr>
          <tr className="bg-white border-black outline outline-black outline-1">
            <th
              scope="row"
              className="md:px-6 md:py-4 px-2 py-1 font-bold text-gray-900 md:whitespace-nowrap wrap"
            >
              Registration
            </th>
            <td className="md:px-6 md:py-4 px-2 py-1 font-bold">
              15th November, 2025
            </td>
          </tr>
          <tr className="bg-white border-black outline outline-black outline-1">
            <th
              scope="row"
              className="md:px-6 md:py-4 px-2 py-1 font-bold text-gray-900 md:whitespace-nowrap wrap"
            >
              Date of Conference (Hybrid mode)
            </th>
            <td className="md:px-6 md:py-4 px-2 py-1 font-bold">
              2-3 December, 2025
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImportantDates;
