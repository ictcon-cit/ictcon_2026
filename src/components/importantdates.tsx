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
            <td className="md:px-6 md:py-4 px-2 py-1 font-bold  text-gray-900">
              1st March, 2026
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
              <span className=" text-gray-900">
                5th May, 2026
              </span>
              <br />
             {/* <span className="line-through text-red-600">
                30th September, 2025 (  Extended )
              </span> */} 
              <br />
              {/*  <span className="text-green-700">
                12th October, 2025 <span className="text-xs">(Hard Deadline)</span>
              </span>  */} 
             
            </td>
          </tr>
          <tr className="bg-white border-black outline outline-black outline-1">
            <th
              scope="row"
              className="md:px-6 md:py-4 px-2 py-1 font-bold text-gray-900 md:whitespace-nowrap wrap"
            >
              Notification of Acceptance
            </th>
            <td className="md:px-6 md:py-4 px-2 py-1 font-bold ">
             <span className=" text-gray-900">10th July, 2026</span>
              <br />
            {/* <span className="text-green-700">31st October,2025</span>  */}
              
            </td>
          </tr>
          <tr className="bg-white border-black outline outline-black outline-1">
            <th
              scope="row"
              className="md:px-6 md:py-4 px-2 py-1 font-bold text-gray-900 md:whitespace-nowrap wrap"
            >
            Author Registration
            </th>
            <td className="md:px-6 md:py-4 px-2 py-1 font-bold  text-gray-900">
              5th August, 2026
            </td>
          </tr>
          <tr className="bg-white border-black outline outline-black outline-1">
            <th
              scope="row"
              className="md:px-6 md:py-4 px-2 py-1 font-bold text-gray-900 md:whitespace-nowrap wrap"
            >
              Date of Conference (Hybrid mode)
            </th>
            <td className="md:px-6 md:py-4 px-2 py-1 font-bold  text-gray-900">
              2-4 November, 2026
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ImportantDates;
