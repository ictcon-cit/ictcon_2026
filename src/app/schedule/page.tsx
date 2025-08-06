import SecondHeader from "@/components/secondheader";
import { FaDownload } from "react-icons/fa";

const SubmissionPage = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SecondHeader title={"SCHEDULE"} />
        {/* <div className="w-full flex justify-center items-center py-4">
          <a
            href="/schedule.pdf"
            download
            className="text-blue-500 underline font-semibold flex items-center hover:font-bold hover:text-red-500"
          >
            <FaDownload className="mr-2" />
            Download Schedule PDF
          </a>
        </div> */}
        <div className="w-full md:text-4xl text-xl flex justify-center sm:items-center md:min-h-screen text-black pb-7">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-600 mb-4">TBD</h2>
            <p className="text-lg text-gray-500">
              Schedule will be announced soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
