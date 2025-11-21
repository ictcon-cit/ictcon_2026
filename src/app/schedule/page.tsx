import SecondHeader from "@/components/secondheader";
import { FaDownload } from "react-icons/fa";

const SubmissionPage = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SecondHeader title={"SCHEDULE"} />
       
        <div className="w-full md:text-4xl text-xl flex justify-center sm:items-center md:min-h-screen text-black pb-7">
          <div className="text-center flex flex-col gap-6 mt-10 justify-center items-center">
            <p className="text-lg font-extrabold text-6xl text-gray-600">
              Program schedule is uploaded
            </p>
            <a
            href="/ICTCon_2025_Schedule.pdf"
            download
            className="text-red-500 underline font-semibold flex items-center hover:font-bold hover:text-red-400"
          >
            <FaDownload className="mr-2" />
            Download Schedule PDF
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
