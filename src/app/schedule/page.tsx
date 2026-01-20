import SecondHeader from "@/components/secondheader";
import { FaDownload } from "react-icons/fa";

const SubmissionPage = () => {
  return (
  <div className="relative">
    <div className="relative z-10">
      <SecondHeader title={"SCHEDULE"} />

      <main className="w-full flex justify-center md:min-h-screen pb-10 px-4">
        <div className="w-full max-w-5xl mt-10">
          {/* Card */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 flex flex-col items-center justify-center gap-4 text-center">
            
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
              <svg
                className="w-7 h-7 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>

            {/* Main text */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
              Schedule Coming Soon
            </h1>

            {/* Subtext */}
            <p className="max-w-md text-sm md:text-base text-slate-500">
              The detailed conference schedule is currently being finalized.
              Please check back shortly for updates.
            </p>

            {/* Subtle divider */}
            <div className="w-24 h-[2px] bg-slate-200 rounded-full mt-2" />

            {/* Status badge */}
            <span className="mt-2 inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-xs md:text-sm font-medium text-slate-600">
              Status: TBD
            </span>
          </div>
        </div>
      </main>
    </div>
  </div>
);

};

export default SubmissionPage;
