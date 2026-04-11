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

  <div className="flex flex-col">
    <img
      src="/images/tourists/image_1.png"
      alt="Anjuna Beach"
      className="h-48 w-full object-cover rounded-lg"
    />
    <p className="mt-2 font-medium">Anjuna Beach</p>
  </div>

  <div className="flex flex-col">
    <img
      src="/images/tourists/image_2.png"
      alt="Palolem Beach"
      className="h-48 w-full object-cover rounded-lg"
    />
    <p className="mt-2 font-medium">Palolem Beach</p>
  </div>

  <div className="flex flex-col">
    <img
      src="/images/tourists/image_4.png"
      alt="Pebble Beach"
      className="h-48 w-full object-cover rounded-lg"
    />
    <p className="mt-2 font-medium">Pebble Beach</p>
  </div>

  <div className="flex flex-col">
    <img
      src="/images/tourists/image_3.png"
      alt="Benaulim Beach"
      className="h-48 w-full object-cover rounded-lg"
    />
    <p className="mt-2 font-medium">Benaulim Beach</p>
  </div>

</div>
            </section>

             {/* ================= HISTORICAL AND NATURAL SITES ================= */}
            <section className="bg-white rounded-2xl shadow-lg border p-6 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                Historical and Natural Sites
              </h2>

              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Historical and Cultural Sites
              </h3>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><b>Fort Aguada:</b> Offers panoramic views of the coastline.</li>
                <li><b>Basilica of Bom Jesus:</b> A significant historical and architectural landmark in Old Goa.</li>
                <li><b>Old Goa:</b> A UNESCO World Heritage site with historical churches and buildings.</li>
                <li><b>Fontainhas:</b> The historic Latin Quarter of Panaji, with old Portuguese architecture.</li>
                <li><b>Chapora Fort:</b> A historical fort overlooking the Chapora River.</li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
  
  <div className="flex flex-col items-center">
    <img
      src="/images/tourists/Basilica of Bom Jesus.png"
      alt="Basilica of Bom Jesus"
      className="h-48 w-full object-cover rounded-lg"
    />
    <p className="mt-2 text-center font-medium">
      Basilica of Bom Jesus
    </p>
  </div>

  <div className="flex flex-col items-center">
    <img
      src="/images/tourists/LatinQuarter.png"
      alt="Fontainhas Latin Quarter"
      className="h-48 w-full object-cover rounded-lg"
    />
    <p className="mt-2 text-center font-medium">
      Fontainhas Latin Quarter
    </p>
  </div>

  <div className="flex flex-col items-center">
    <img
      src="/images/tourists/fort.png"
      alt="Aguada Fort"
      className="h-48 w-full object-cover rounded-lg"
    />
    <p className="mt-2 text-center font-medium">
      Aguada Fort
    </p>
  </div>

</div>

              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Natural Attractions
              </h3>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><b>Dudhsagar Falls:</b> A majestic, multi-tiered waterfall set amidst lush greenery.</li>
                <li><b>Salim Ali Bird Sanctuary:</b> A haven for bird watchers on Chorao Island.</li>
                <li><b>Divar Island:</b> Offers scenic views and a glimpse into a different pace of Goan life.</li>
                <li><b>Spice Plantations:</b> Explore the fragrant hinterland with a tour of spice farms.</li>
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div>
                  <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                     <img
    src="/images/tourists/dudhsagar.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
                  </div>
                  <p className="text-center mt-2 font-medium">Dudhsagar Waterfall</p>
                </div>
                <div>
                  <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                     <img
    src="/images/tourists/Savari.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
                  </div>
                  <p className="text-center mt-2 font-medium">Savari Waterfall</p>
                </div>
                <div>
                  <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img
    src="/images/tourists/nature1.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
                  </div>
                </div>
                <div>
                  <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img
    src="/images/tourists/nature2.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Activities and Experiences
              </h3>

              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                <li><b>Water Sports:</b> Enjoy activities like parasailing, jet skiing, and scuba diving, especially around Baga and Grand Island.</li>
                <li><b>Markets:</b> Shop for souvenirs and local goods at the Anjuna Flea Market or the Mapusa Friday Market.</li>
                <li><b>Cruises:</b> Take a sunset cruise on the Mandovi River.</li>
                <li><b>Nightlife:</b> Experience the party scene on streets like Tito's Lane in Baga.</li>
                <li><b>Museums:</b> Visit the Naval Aviation Museum in Bogmalo.</li>
              </ul>

              <div className="flex justify-center mb-10">
                <div className="h-48 w-96 bg-gray-200 rounded-lg flex items-center justify-center">
                  <img
    src="/images/tourists/activity1.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                For more details, please visit <span className="text-blue-600 underline">Goa Tourism (https://goatourism.gov.in/)</span>
              </p>

              <p className="text-gray-700 mb-4 font-semibold">
                PLACES NEARBY GOA: AMBOLI, MAHARASHTRA; KARWAR, KARNATAKA; MURUDESHWAR, KARNATAKA; DANDELI, KARNATAKA; etc..
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                   <img
    src="/images/tourists/activity2.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
                </div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                   <img
    src="/images/tourists/activity3.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  />
                </div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center"> <img
    src="/images/tourists/activity4.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  /></div>
                <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center"> <img
    src="/images/tourists/activity5.png"
    alt="Goa Beach"
    className="h-48 w-full object-cover rounded-lg"
  /></div>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}