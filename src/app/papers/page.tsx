import SecondHeader from "@/components/secondheader";

const PaperPage = () => {
  return (
    <div>
      <SecondHeader title={"CALL FOR PAPERS"} />
      <div>
        <div className="w-full md:text-3xl text-lg text-center md:p-20 p-5 text-black font-bold">
          The topics of ICTCON 2025 will cover all aspects of research and
          application in intelligent computing and technologies, including but
          not limited to:
        </div>
        <div className="overflow-x-auto md:px-20 px-5 md:py-5 py-1">
          <table className="min-w-full table-auto divide-y divide-gray-200 shadow-lg h-80">
            <thead className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <tr>
                <th
                  scope="col"
                  className="w-1/5 px-6 py-4 text-left text-lg font-semibold uppercase tracking-wider border-r border-gray-300 hover:bg-blue-600 hover:font-semibold  duration-200"
                >
                  Artificial Intelligence
                </th>
                <th
                  scope="col"
                  className="w-1/5 px-6 py-4 text-left text-lg font-semibold uppercase tracking-wider border-r border-gray-300 hover:bg-blue-600 hover:font-semibold  duration-200"
                >
                  Computing
                </th>
                <th
                  scope="col"
                  className="w-1/5 px-6 py-4 text-left text-lg font-semibold uppercase tracking-wider border-r border-gray-300 hover:bg-blue-600 hover:font-semibold  duration-200"
                >
                  Data Science
                </th>
                <th
                  scope="col"
                  className="w-1/5 px-6 py-4 text-left text-lg font-semibold uppercase tracking-wider border-r border-gray-300 hover:bg-blue-600 hover:font-semibold  duration-200"
                >
                  Computer Vision
                </th>
                <th
                  scope="col"
                  className="w-1/5 px-6 py-4 text-left text-lg font-semibold uppercase tracking-wider hover:bg-blue-600 hover:font-semibold  duration-200"
                >
                  Technologies Trends
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-normal text-base text-gray-700 text-left border-r border-gray-300 align-top hover:bg-gray-100 hover:font-semibold  duration-200">
                  <ul className="list-disc pl-5">
                    <li>Machine Learning</li>
                    <li>Deep Learning</li>
                    <li>Pattern Recognition</li>
                    <li>Large language models (LLMs)</li>
                    <li>Explainable AI</li>
                    <li>Robotics & Automations</li>
                    <li>Agents and Multi-agent Systems</li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-normal text-base text-gray-700 text-left border-r border-gray-300 align-top hover:bg-gray-100 hover:font-semibold  duration-200">
                  <ul className="list-disc pl-5">
                    <li>High Performance Computing</li>
                    <li>Edge Computing</li>
                    <li>Cloud Computing</li>
                    <li>Cognitive Computing</li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-normal text-base text-gray-700 text-left border-r border-gray-300 align-top hover:bg-gray-100 hover:font-semibold  duration-200">
                  <ul className="list-disc pl-5">
                    <li>Data Analytics</li>
                    <li>Natural Language Processing</li>
                    <li>Sentiment Analysis</li>
                    <li>Information Retrieval</li>
                    <li>Fuzzy Logic</li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-normal text-base text-gray-700 text-left border-r border-gray-300 align-top hover:bg-gray-100 hover:font-semibold  duration-200">
                  <ul className="list-disc pl-5">
                    <li>Computer Vision</li>
                    <li>Image Processing</li>
                    <li>Human-Computer Interaction</li>
                    <li>Multimedia Forensic</li>
                    <li>AR/VR</li>
                    <li>Remote Sensing</li>
                  </ul>
                </td>
                <td className="px-6 py-4 whitespace-normal text-base text-gray-700 text-left align-top hover:bg-gray-100 hover:font-semibold  duration-200">
                  <ul className="list-disc pl-5">
                    <li>Blockchain</li>
                    <li>IoT</li>
                    <li>5G/6G Network Evolutions</li>
                    <li>Mobile Applications</li>
                    <li>Drone applications</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-32"></div>
    </div>
  );
};

export default PaperPage;
