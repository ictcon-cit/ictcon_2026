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
            <div className="bg-white/90 rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 flex flex-col gap-6">
              <h1>TBD</h1>
              {/* Header + Download button */}
             {/* <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-semibold text-slate-800">
                    Conference Schedule
                  </h1>
                  <p className="mt-1 text-sm md:text-base text-slate-500">
                    View the full program below or download the schedule for offline use.
                  </p>
                </div>

                <a
                  href="/Program_schedule_1__.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-2.5 text-sm md:text-base font-semibold text-white shadow-md hover:bg-red-600 hover:shadow-lg transition"
                >
                  <FaDownload className="text-lg" />
                  <span>Download Schedule PDF</span>
                </a>
              </div>

             {/* PDF preview */}
             { /* <div className="mt-2 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
              <iframe
                  src="/Program_schedule_1__.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  title="Schedule PDF"
                  className="w-full h-[70vh] rounded-xl border"
              ></iframe>

              </div> */} 

           {/*<p className="text-xs text-center text-slate-400">
                Tip: Scroll inside the document to view all sessions.
              </p> */}   
            </div>
          </div>
        </main>
      </div> 
    </div>
  );
};

export default SubmissionPage;
