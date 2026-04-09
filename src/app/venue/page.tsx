import SecondHeader from "@/components/secondheader";
import { FaDownload } from "react-icons/fa";

const SubmissionPage = () => {
  return (
  <div className="relative">
    <div className="relative z-10">
      <SecondHeader title={"Venue Information"} />

      <main className="w-full flex justify-center md:min-h-screen pb-10 px-4">
        <div className="w-full max-w-5xl mt-10">
          {/* Card */}
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-200 p-8 md:p-12 flex flex-col items-center justify-center gap-4 text-center">
            


            {/* Main text */}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-800">
             How to Reach IIT Goa and NFSU Goa?
            </h1>
               <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed">
                  IIT Goa and NFSU Goa are currently operating from the Farmagudi Campus in Ponda, Goa. Located approximately 30 km from the state capital, Panaji, the campus is well-connected by road, rail, and air.
                </p>


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



            {/* Subtext */}
            <p className="max-w-md text-sm md:text-base text-slate-500">
             
            </p>

            {/* Subtle divider */}
            <div className="w-24 h-[2px] bg-slate-200 rounded-full mt-2" />

            {/* Status badge */}
            <span className="mt-2 inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-xs md:text-sm font-medium text-slate-600">

            </span>

                            {/* ===== Contact Section ===== */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                1. By Air (Dabolim Airport GOI)/Manohar International Airport (GOX) 
              </h3>
              
               <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed">
                  The Goa International Airport (Dabolim) is the nearest airport, located about 38 km from the campus, while GOX is 64km.
                </p>

              <p className="text-gray-600 mb-6 text-sm md:text-base text-left">
                <span className="font-semibold text-blue-700">Pre-paid Taxi:</span>The most convenient option. Available at the airport counter; mention "Farmagudi, Ponda" as your destination. It takes approximately 40–50 minutes. <br />
                <span className="font-semibold text-blue-700">Bus:</span> You can take a bus to Vasco-da-Gama, then to Panaji, and finally to Ponda/Farmagudi. (Not recommended if carrying heavy luggage). <br />
              </p>
            </div>           


                            {/* ===== Contact Section ===== */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2. By Rail (Railway Stations)
              </h3>
              
               <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed">
                  There are two major railway stations serving the area:
               </p>

              <p className="text-gray-600 mb-6 text-sm md:text-base text-left">
                <span className="font-semibold text-blue-700">Madgaon Junction (MAO):</span>Located about 20 km away. This is the most well-connected station. A taxi from Madgaon to Farmagudi takes about 35–40 minutes. <br />
                <span className="font-semibold text-blue-700">Karmali (KRMI):</span> Located about 18 km away. This is the closest station on the Konkan Railway route from the north (Mumbai/Ratnagiri). A taxi takes about 30 minutes. <br />
              </p>
            </div>           


                                        {/* ===== Contact Section ===== */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                3. By Road (Buses & Taxis)
              </h3>
              
               <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed">
                Farmagudi is situated on the NH-4A (Panaji-Belgaum Highway), making it very accessible.
               </p>

              <p className="text-gray-600 mb-6 text-sm md:text-base text-left">
                <span className="font-semibold text-blue-700">From Panaji:</span> Frequent KTC (Kadamba) and private buses run from the Panaji KTC Bus Stand to Ponda. Ask the conductor to drop you at the "Farmagudi Bus Stop" (near the Ganpati Temple). <br />
                <span className="font-semibold text-blue-700">From Ponda City: </span> The campus is just 3 km from the main Ponda Bus Stand. Local rickshaws and taxis are easily available. <br />
              </p>
            </div>     



                          {/* ===== Contact Section ===== */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Campus Locations
              </h3>
               <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed text-left">
                  Once you reach the Farmagudi plateau:
               </p>

              <p className="text-gray-600 mb-6 text-sm md:text-base text-left">
                <span className="font-semibold text-blue-700">IIT Goa:</span> Located within the GEC (Goa Engineering College) Campus. Follow the signboards for "IIT Goa Administration" or the specific venue (e.g., LT-3). <br />
                <span className="font-semibold text-blue-700">NFSU Goa:</span> Located adjacent to the GEC campus at the Transit Campus. <br />
                <span className="font-semibold text-blue-700">Landmark:</span> The campus is located very close to the historic Shivaji Statue and the Gopal Ganapati Temple at Farmagudi. <br />
                <span className="font-semibold text-blue-700">Local Transport: </span>While buses are frequent during the day, we recommend booking a taxi or using the GoaMiles app for late-evening travel. <br />
                <span className="font-semibold text-blue-700">Weather:</span> Nov. in Goa can be light rain; we recommend carrying an umbrella and/or a raincoat.
              </p>
            </div> 

                                      {/* ===== Contact Section ===== */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                45-minute direct flight from Mumbai to Goa: 
              </h3>
               <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed text-left">
                  Take a direct flight from Chhatrapati Shivaji Maharaj International Airport (BOM) in Mumbai to Dabolim Airport (GOI)/ Manohar International Airport (GOX) in Goa. The flight duration is approximately 45 minutes.
               </p>
            </div> 

                                                    {/* ===== Contact Section ===== */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center border w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                2-hour direct flight from Delhi to Goa: 
              </h3>
               <p className="text-center text-gray-700 text-sm md:text-base leading-relaxed text-left">
                  Board a direct flight from Indira Gandhi International Airport (DEL) in Delhi to Dabolim Airport (GOI)/ Manohar International Airport (GOX) in Goa. The flight takes around 2 hours. <br />
                  After arriving in Goa, local transport options such as taxis, the hotel's pick-up/drop-off service, buses, and rental cars are available to take you to your destination within Goa.
               </p>
            </div> 

       
              
          </div>
        </div>
      </main>
    </div>
  </div>
);

};

export default SubmissionPage;
