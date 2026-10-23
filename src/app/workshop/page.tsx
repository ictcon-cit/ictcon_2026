import SecondHeader from "@/components/secondheader";

const WorkshopPage = () => {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SecondHeader title={"WORKSHOP"} />

        <main className="w-full flex justify-center md:min-h-screen pb-10 px-4">
          <div className="w-full max-w-5xl mt-10">
            <article className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 flex flex-col items-center gap-5 text-center">
              <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center">
                <svg
                  className="w-7 h-7 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                MathWorks Workshop
              </p>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
                AI+ MedTech: From Medical Images to Intelligent Clinical
                Research Workflows
              </h1>

              <dl className="mt-2 flex flex-col sm:flex-row gap-4 sm:gap-12 text-slate-600">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Date
                  </dt>
                  <dd className="mt-1 text-base font-medium">
                    3 November 2026
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Time
                  </dt>
                  <dd className="mt-1 text-base font-medium">
                    3:15 PM–4:30 PM
                  </dd>
                </div>
              </dl>

              <div className="w-24 h-[2px] bg-slate-200 rounded-full mt-2" />
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WorkshopPage;
