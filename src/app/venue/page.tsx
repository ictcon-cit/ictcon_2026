"use client";
import SecondHeader from "@/components/secondheader";
import { FaEnvelope } from "react-icons/fa";

export default function VenuePage() {
  return (
    <div className="relative">
      <div className="relative z-10">
        <SecondHeader title={"VENUE"} />

        <main className="w-full flex justify-center pb-16 px-4">
          <div className="w-full max-w-6xl mt-10 space-y-16">

            {/* ================= HOW TO REACH ================= */}
            <section className="bg-white rounded-2xl shadow-lg border p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                How to Reach IIT Goa and NFSU Goa?
              </h2>

              <p className="text-gray-700 mb-4 leading-relaxed">
                IIT Goa and NFSU Goa are currently operating from the Farmagudi Campus in Ponda, Goa.
                Located approximately 30 km from the state capital, Panaji, the campus is well-connected
                by road, rail, and air.
              </p>

              <h3 className="font-semibold text-lg mt-4 mb-2">
                1. By Air (Dabolim Airport GOI / Manohar International Airport GOX)
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <b>Pre-paid Taxi:</b>The most convenient option. Available at the airport counter; mention "Farmagudi, Ponda" as your destination. It takes approximately 40–50 minutes.

                </li>
                <li>
                  <b>Bus:</b>You can take a bus to Vasco-da-Gama, then to Panaji, and finally to Ponda/Farmagudi. (Not recommended if carrying heavy luggage).

                </li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">
                2. By Rail (Railway Stations)
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <b>Madgaon Junction (MAO):</b>Located about 20 km away. This is the most well-connected station. A taxi from Madgaon to Farmagudi takes about 35–40 minutes.

                </li>
                <li>
                  <b>Karmali (KRMI):</b> Located about 18 km away. This is the closest station on the Konkan Railway route from the north (Mumbai/Ratnagiri). A taxi takes about 30 minutes.

                </li>
              </ul>

              <h3 className="font-semibold text-lg mt-4 mb-2">
                3. By Road (Buses & Taxis)
              </h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <b>From Panaji:</b> Frequent KTC (Kadamba) and private buses run from the Panaji KTC Bus Stand to Ponda. Ask the conductor to drop you at the "Farmagudi Bus Stop" (near the Ganpati Temple).

                </li>
                <li>
                  <b>From Ponda City:</b> The campus is just 3 km from the main Ponda Bus Stand. Local rickshaws and taxis are easily available.
                </li>
              </ul>
            </section>

            {/* ================= CAMPUS LOCATIONS ================= */}
            <section className="bg-white rounded-2xl shadow-lg border p-6 md:p-10">
              <h2 className="text-2xl font-bold text-black mb-4">
                Campus Locations
              </h2>

              <p className="text-gray-700 mb-4">
                Once you reach the Farmagudi plateau:
              </p>

              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>
                  <b>IIT Goa:</b> Located within the GEC (Goa Engineering College) Campus. Follow the signboards for "IIT Goa Administration" or the specific venue (e.g., LT-3).

                </li>
                <li>
                  <b>NFSU Goa:</b> Located adjacent to the GEC campus at the Transit Campus.

                </li>
              </ul>

              <p className="text-gray-700 mt-4">
                <b>Landmark:</b> The campus is located very close to the historic Shivaji Statue and the Gopal Ganapati Temple at Farmagudi.

              </p>

              <p className="text-gray-700 mt-2">
                <b>Local Transport:</b> While buses are frequent during the day, we recommend booking a taxi or using the GoaMiles app for late-evening travel.

              </p>

              <p className="text-gray-700 mt-2">
                <b>Weather:</b>  During November, there can be light rain in Goa; we recommend carrying an umbrella and/or a raincoat.

              </p>

              <div className="mt-4 text-gray-700 space-y-2">
                <p>
                  <b>45-min flight from Mumbai to Goa:</b> Take a direct flight from Chhatrapati Shivaji Maharaj International Airport (BOM) in Mumbai to Dabolim Airport (GOI)/ Manohar International Airport (GOX) in Goa. The flight duration is approximately 45 minutes.

                </p>
                <p>
                  <b>2-hour flight from Delhi to Goa:</b> Board a direct flight from Indira Gandhi International Airport (DEL) in Delhi to Dabolim Airport (GOI)/ Manohar International Airport (GOX) in Goa. The flight takes around 2 hours. 
                  <br />
After arriving in Goa, local transport options such as taxis, the hotel's pick-up/drop-off service, buses, and rental cars are available to take you to your destination within Goa.

                </p>
               
              </div>
            </section>

            {/* ================= STAY IN PONDA ================= */}
            <section className="bg-white rounded-2xl shadow-lg border p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Stay in Ponda, Goa <span className="text-red-600">(NEARBY HOTELS)</span>
              </h2>

              <ul className="list-disc pl-6 text-blue-700 space-y-2 font-medium">
                <li>Farmagudi Hill Retreat</li>
                <li>Hotel Royal Punjab</li>
                <li>Hotel Menino</li>
                <li>Farmagudi Residency</li>
                <li>OYO 1152 Hotel Sun Inn</li>
                <li>Rock Valley Goa</li>
                <li>Hotel Menino Executive</li>
                <li>Hotel Yashoda Deluxe</li>
                <li>The Enchanting Nest</li>
                <li>Ganesh Residency Hotel</li>
                <li>Marias House</li>
              </ul>

              
            </section>
            {/* ================= TOURIST ATTRACTIONS ================= */}
            <section className="bg-white rounded-2xl shadow-lg border p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-900 mb-6">
                Tourist Attractions in Goa
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                Goa offers far more than its golden coastline: it is a remarkable blend of Indian tradition and centuries of Portuguese influence. Nestled on the western shore of India, this vibrant state invites you to explore lush forests, elegant baroque churches, spice-rich cuisine, colorful markets, and a relaxed coastal charm. From witnessing history at the UNESCO-listed Basilica of Bom Jesus — home to the sacred relics of St. Francis Xavier — to experiencing the calm of Palolem’s iconic “Silent Noise” gatherings or feeling the mist of the majestic Dudhsagar Falls, Goa promises a refreshing mix of culture, nature, and leisure. 

              </p>

              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Beaches
              </h3>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><b>Baga and Calangute:</b> Known for water sports and a high-energy atmosphere.</li>
                <li><b>Palolem and Agonda:</b> Picturesque and peaceful beaches, ideal for leisurely walks.</li>
                <li><b>Arambol:</b> Offers a more bohemian and serene vibe.</li>
                <li><b>Anjuna:</b> Famous for its flea market and vibrant nightlife.</li>
              </ul>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <img
    src="/images/tourists/image_1.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
  <img
    src="/images/tourists/image_2.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
  <img
    src="/images/tourists/image_4.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
  <img
    src="/images/tourists/image_3.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
</div>
            </section>

            

          </div>
        </main>
      </div>
    </div>
  );
}