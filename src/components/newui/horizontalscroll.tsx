import Link from "next/link";

export default function HorizontalScrollA() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden py-6 sm:py-10">
      <div className="mb-6 flex w-full max-w-7xl flex-col gap-6">
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3 sm:gap-4">
          <div className="flex justify-center sm:justify-start sm:pl-[5%] lg:pl-[7%]">
            <img
              src="/images/sponsors/Netweb.jpeg"
              alt="Netweb sponsor logo"
              className="max-h-32 max-w-[min(80%,360px)] object-contain sm:max-h-36 sm:max-w-full"
            />
          </div>
          <div className="mx-auto flex h-32 w-full max-w-[320px] items-center justify-center rounded-lg bg-white p-4 shadow-md">
            <img
              src="/images/sponsors/mathworks.jpeg"
              alt="MathWorks sponsor logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="mx-auto flex h-32 w-full max-w-[320px] items-center justify-center rounded-lg bg-white p-4 shadow-md">
            <img
              src="/images/sponsors/benchmark.jpeg"
              alt="Benchmark Computer Solutions Limited sponsor logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3 sm:gap-4">
          <div className="mx-auto flex h-32 w-full max-w-[320px] items-center justify-center rounded-lg bg-white p-3 shadow-md">
            <img
              src="/images/sponsors/stihub.jpg"
              alt="STIHUB CIT Kokrajhar sponsor logo"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="mx-auto flex h-32 w-full max-w-[320px] items-center justify-center rounded-lg bg-slate-800 p-4 shadow-md">
            <img
              src="/images/sponsors/doma.png"
              alt="DigitalOma sponsor logo"
              className="h-auto max-h-full w-full object-contain"
            />
          </div>
          <div className="mx-auto flex h-32 w-full max-w-[320px] items-center justify-center rounded-lg bg-white p-4 shadow-md">
            <img
              src="/images/sponsors/digisol.jpeg"
              alt="Digisol sponsor logo"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* ===== New Sponsorship Message ===== */}
      <div className="max-w-2xl px-4 text-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-3">
          Interested in Sponsoring?
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
          We welcome sponsorships from organizations and companies interested in
          supporting the <span className="font-semibold">
          Intelligent Computing and Technologies Conference 2026
          </span>.
        </p>
        <br />
          {/* ✅ CTA Button */}
        <Link
          href="/sponsorship"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300"
        >
          Call for Sponsorship
        </Link>
      </div>

    </div>
  );
}