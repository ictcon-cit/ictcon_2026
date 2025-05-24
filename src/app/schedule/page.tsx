import SecondHeader from "@/components/secondheader";
import { FaDownload } from "react-icons/fa";

const SubmissionPage = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SecondHeader title={"SCHEDULE"} />
        <div className="w-full flex justify-center items-center py-4">
          <a
            href="/schedule.pdf"
            download
            className="text-blue-500 underline font-semibold flex items-center hover:font-bold hover:text-red-500"
          >
            <FaDownload className="mr-2" />
            Download Schedule PDF
          </a>
        </div>
        <div className="w-full md:text-4xl text-xl flex justify-center sm:items-center md:min-h-screen text-black pb-7">
          <img
            src="/images/programschedule.jpg"
            alt="Program Schedule"
            className="w-full max-w-md md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
